import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CleanWin - Professional Cleaning Services",
  description:
    "Professional cleaning services in Winterthur with over 10 years of experience",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="data:font/woff2;base64,"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>{`
          /* Critical font-display: swap for Arial fallback */
          body, * {
            font-family: Arial, Helvetica, sans-serif;
            font-display: swap;
          }
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
