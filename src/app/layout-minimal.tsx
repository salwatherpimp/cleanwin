import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "CleanWin - Professional Cleaning Services",
  description: "Professional cleaning services in Winterthur with over 10 years of experience",
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
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; line-height: 1.5; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
