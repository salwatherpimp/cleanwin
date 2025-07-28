import type { Metadata, Viewport } from "next";
import "../styles/hero-critical.css";
import "../styles/globals.css";
import "../styles/components.css";

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
        {/* Critical domain preconnections for performance - Max 4 as recommended */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />

        {/* CRITICAL: Preload hero images with performance hints */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          fetchPriority="high"
          type="image/avif"
          media="(max-width: 767px)"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          fetchPriority="high"
          type="image/avif"
          media="(min-width: 768px)"
          crossOrigin="anonymous"
        />

        {/* Performance hint: Preload critical resources */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />

        <style>{`
          /* Critical above-the-fold CSS - Inlined to prevent render blocking */
          :root {
            --background: #ffffff;
            --foreground: #171717;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --background: #0a0a0a;
              --foreground: #ededed;
            }
          }

          /* Critical: Tailwind base reset - Inlined */
          *, ::before, ::after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb;
          }

          html, body {
            margin: 0;
            padding: 0;
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: ui-sans-serif, system-ui, sans-serif;
          }

          /* Critical navigation responsive behavior - Inlined */
          @media (max-width: 1023px) {
            [data-nav="desktop"] { display: none !important; }
            [data-nav="mobile"] { display: flex !important; }
          }

          @media (min-width: 1024px) {
            [data-nav="desktop"] { display: flex !important; }
            [data-nav="mobile"] { display: none !important; }
          }

          /* Critical: Carousel and layout stability - Inlined to prevent CLS */
          .carousel-track {
            contain: layout style;
            contain-intrinsic-size: 1440px 280px;
          }

          .review-card {
            contain: layout style;
            contain-intrinsic-size: 360px 280px;
            min-height: 280px !important;
            max-width: 360px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          /* Critical: Mobile navigation spacing - Prevent H1 overlap */
          @media (max-width: 768px) {
            .hero-content,
            div[style*="position:relative"][style*="z-index:10"] {
              margin-top: 60px !important;
              padding-top: 10px !important;
              padding-bottom: 40px !important;
            }

            .hero-section,
            section[style*="64vh"] {
              min-height: 520px !important;
              max-height: none !important;
            }
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            scroll-behavior: smooth;
            width: 100%;
            height: 100%;
          }

          body {
            background: var(--background);
            color: var(--foreground);
            font-family: Arial, Helvetica, sans-serif;
            font-display: swap;
          }

          /* Hero styles moved to hero-critical.css for better performance */
          }
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 100vh;
          }

          /* Critical navigation and hero CLS prevention */
          .nav-stabilizer-wrapper {
            contain: layout style;
            contain-intrinsic-size: 100vw 56px;
            box-sizing: border-box;
          }

          nav {
            contain: layout style;
            font-display: swap;
          }

          button, a {
            contain: layout style;
            font-display: swap;
          }

          .hero-mobile-wrapper {
            contain: layout style;
            contain-intrinsic-size: 100vw 75vh;
          }

          .hero-content-mobile {
            contain: layout style;
            contain-intrinsic-size: 100% 400px;
          }

          /* Critical mobile navigation visibility */
          @media (max-width: 1023px) {
            [data-nav="desktop"] { display: none !important; }
            [data-nav="mobile"] { display: flex !important; }

            .nav-stabilizer-wrapper {
              left: 16px !important;
              right: 16px !important;
              width: calc(100vw - 32px) !important;
            }

            .hero-mobile {
              padding-top: 100px !important;
            }

            .hero-content-mobile h1 {
              font-size: 32px !important;
              line-height: 38px !important;
              min-height: 76px !important;
            }

            .hero-content-mobile p {
              font-size: 16px !important;
              line-height: 24px !important;
              min-height: 48px !important;
            }
          }

          @media (min-width: 768px) {
            .hero-mobile-wrapper {
              height: 80vh;
              min-height: 80vh;
              contain-intrinsic-size: 100vw 80vh;
            }

            .hero-content-mobile h1 {
              font-size: 40px !important;
              line-height: 48px !important;
              min-height: 96px !important;
              margin-bottom: 12px !important;
            }

            .hero-content-mobile p {
              font-size: 20px !important;
              line-height: 32px !important;
              min-height: 64px !important;
              margin-top: 0 !important;
              margin-bottom: 24px !important;
            }

            .hero-content-mobile {
              padding-bottom: 0 !important;
            }
          }

          @media (min-width: 1024px) {
            [data-nav="desktop"] { display: flex !important; }
            [data-nav="mobile"] { display: none !important; }
          }

          /* Critical hero section dimensions */
          section.hero-mobile, .hero-mobile {
            height: 75vh !important;
            min-height: 75vh !important;
            max-height: 75vh !important;
            box-sizing: border-box !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          @media (min-width: 768px) {
            section.hero-mobile, .hero-mobile {
              height: 80vh !important;
              min-height: 80vh !important;
              max-height: 80vh !important;
              box-sizing: border-box !important;
            }
          }

          /* Critical mobile grid layouts */
          @media (max-width: 767px) {
            .grid-mobile-1 {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .grid-mobile-2 {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .grid-mobile-3 {
              display: flex !important;
              overflow: hidden !important;
              gap: 24px !important;
              width: 100% !important;
            }
          }

          /* Critical services grid responsive */
          @media (max-width: 1200px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 767px) {
            .services-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }

          /* Critical carousel and card layout containment */
          .carousel-track {
            contain: layout style;
            contain-intrinsic-size: 1440px 280px;
          }

          .review-card {
            contain: layout style;
            contain-intrinsic-size: 360px 280px;
            min-height: 280px !important;
            max-width: 360px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .mobile-card-content {
            contain: layout style;
            min-height: 24px;
          }

          .mobile-card-content.expanded {
            contain: none;
          }

          .cleanwin-value-card {
            contain: layout style;
            contain-intrinsic-size: 100% 98px;
          }
        `}</style>


      </head>
      <body style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>{children}</body>
    </html>
  );
}
