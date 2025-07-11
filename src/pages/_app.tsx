import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={inter.variable}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <Component {...pageProps} />
    </div>
  );
}
