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
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Listen for hydration errors
      const originalError = console.error;
      console.error = (...args) => {
        if (
          typeof args[0] === "string" &&
          (args[0].includes("Hydration failed") ||
            args[0].includes("Text content does not match") ||
            args[0].includes("Warning: Text content did not match"))
        ) {
          console.warn("🔥 HYDRATION ERROR DETECTED:", ...args);
          console.trace("Hydration error stack trace");
        }
        originalError.apply(console, args);
      };
    }
  }, []);

  return (
    <div
      className={inter.variable}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <Component {...pageProps} />
    </div>
  );
}
