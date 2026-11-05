import type { Metadata, Viewport } from "next";
import { site, whatsappUrl } from "@/content/site";
import { MotionProvider } from "@/components/motion-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | Digital Solutions. Designed to Scale.`,
  description: site.description,
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: `${site.name} | Digital Solutions. Designed to Scale.`,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Hanken+Grotesk:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500&family=Covered+By+Your+Grace&display=swap"
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <MotionProvider>
          <SmoothScroll />
          {children}
        </MotionProvider>

        {/* Mobile Sticky Action Bar */}
        <div className="mbar" aria-label="Quick contact actions">
          <a href={`tel:${site.phoneRaw}`}>Call Direct</a>
          <a
            className="pri"
            href={whatsappUrl("Hi Zuniko, I would like to consult on an upcoming software project.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
