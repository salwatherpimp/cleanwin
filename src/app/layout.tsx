import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { builder } from "@builder.io/react";

// Initialize Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Optimize fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Your Website",
    template: "%s | Your Website",
  },
  description: "Professional website built with Builder.io Fusion",
  keywords: ["website", "business", "service"], // Add your keywords
  authors: [{ name: "Your Company" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Your Website",
    images: ["/og-image.jpg"], // Add your OG image
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle", // Add your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
