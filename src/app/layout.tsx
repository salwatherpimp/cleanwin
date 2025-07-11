import type { Metadata } from "next";
import "../styles/globals.css";
import { builder } from "@builder.io/react";

// Initialize Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const metadata: Metadata = {
  title: {
    default: "Your Website",
    template: "%s | Your Website",
  },
  description: "Professional website built with Builder.io Fusion",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Your Website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
