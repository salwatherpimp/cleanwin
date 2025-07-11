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
    // Enable hydration detection in both dev and prod
    if (typeof window !== "undefined") {
      // Enhanced hydration error detection
      const originalError = console.error;
      const originalWarn = console.warn;

      console.error = (...args) => {
        if (typeof args[0] === "string") {
          if (
            args[0].includes("Hydration failed") ||
            args[0].includes("Text content does not match") ||
            args[0].includes("Warning: Text content did not match") ||
            args[0].includes("Hydration") ||
            args[0].includes("hydration")
          ) {
            console.group("🔥 HYDRATION ERROR DETECTED");
            console.error("Error:", args[0]);
            console.error("Full args:", args);
            console.trace("Stack trace");
            console.groupEnd();
          }
        }
        originalError.apply(console, args);
      };

      console.warn = (...args) => {
        if (
          typeof args[0] === "string" &&
          args[0].includes("Warning: Text content did not match")
        ) {
          console.group("⚠️ HYDRATION WARNING");
          console.warn("Warning:", args[0]);
          console.trace("Stack trace");
          console.groupEnd();
        }
        originalWarn.apply(console, args);
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
