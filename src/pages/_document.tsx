import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Critical CSS inline styles */}
        <style>{`
          body { font-family: system-ui, -apple-system, sans-serif; }
          .hero-section {
            min-height: 480px;
            height: 550px;
            margin-top: -80px;
            padding-top: 80px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .hero-section { height: 480px; }
          }
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
