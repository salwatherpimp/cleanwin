import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Critical CSS inline styles */}
        <style>{`
          body { font-family: system-ui, -apple-system, sans-serif; }
          .hero-section { min-height: 480px; }
        `}</style>

        {/* Fonts are now optimized via next/font/google */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
