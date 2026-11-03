import sys
from PIL import Image
import numpy as np
from collections import deque

def remove_background(input_path, output_path, tolerance=25):
    img = Image.open(input_path).convert("RGBA")
    arr = np.array(img)
    h, w, _ = arr.shape

    # Calculate difference from pure white (255, 255, 255)
    # Background in high-key studio is very close to white: > 235 on all channels
    r = arr[:, :, 0].astype(int)
    g = arr[:, :, 1].astype(int)
    b = arr[:, :, 2].astype(int)
    
    # Is background candidate?
    is_white = (r >= 232) & (g >= 232) & (b >= 232)

    # Flood fill mask starting from the 4 image borders
    mask = np.zeros((h, w), dtype=bool)
    queue = deque()

    # Add border pixels that are white
    for x in range(w):
        if is_white[0, x]: queue.append((0, x)); mask[0, x] = True
        if is_white[h-1, x]: queue.append((h-1, x)); mask[h-1, x] = True
    for y in range(h):
        if is_white[y, 0]: queue.append((y, 0)); mask[y, 0] = True
        if is_white[y, w-1]: queue.append((y, w-1)); mask[y, w-1] = True

    # 4-connectivity flood fill
    while queue:
        cy, cx = queue.popleft()
        for dy, dx in [(-1,0), (1,0), (0,-1), (0,1)]:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w and not mask[ny, nx] and is_white[ny, nx]:
                mask[ny, nx] = True
                queue.append((ny, nx))

    # Calculate alpha based on mask and edge softness
    alpha = np.ones((h, w), dtype=np.uint8) * 255
    # Full background is 0
    alpha[mask] = 0

    # Soften edges: pixels adjacent to mask with brightness > 215 get smooth alpha
    from scipy.ndimage import binary_dilation
    dilated_1 = binary_dilation(mask, iterations=2)
    edge_zone = dilated_1 & (~mask)
    
    # For edge zone, calculate alpha based on distance from white
    edge_brightness = (r[edge_zone] + g[edge_zone] + b[edge_zone]) / 3.0
    # higher brightness = more transparent
    edge_alpha = np.clip((255 - edge_brightness) / (255 - 200) * 255, 0, 255).astype(np.uint8)
    alpha[edge_zone] = np.minimum(alpha[edge_zone], edge_alpha)

    arr[:, :, 3] = alpha
    result = Image.fromarray(arr)
    result.save(output_path, "PNG")
    print(f"Saved transparent PNG to {output_path}")

if __name__ == "__main__":
    src = r"C:\Users\jaisr\.gemini\antigravity\brain\0062664a-c9c4-4b7c-a59b-a2be7bb0c004\developer_clean_1793469789462.jpg"
    out = r"C:\MyWorks\zuniko\public\developer.png"
    remove_background(src, out)

