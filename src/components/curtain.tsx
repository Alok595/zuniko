import { Logo } from "./ui";

export function Curtain() {
  return (
    <div
      aria-hidden
      className="curtain pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-accent text-white"
    >
      <span className="block overflow-hidden">
        <Logo variant="white" className="curtain-word h-12 md:h-16" />
      </span>
    </div>
  );
}
