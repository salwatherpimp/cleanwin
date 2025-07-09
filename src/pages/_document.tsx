import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Critical CSS inline styles */}
        <style>{`
          body {
            font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 0;
          }
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
            width: 100vw;
            left: 50%;
            margin-left: -50vw;
          }
          .hero-section img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            object-fit: cover;
            object-position: 60% 30%;
          }
          @media (max-width: 767px) {
            .hero-section {
              height: 480px;
            }
            .hero-section img {
              object-position: 50% 20%;
            }
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
