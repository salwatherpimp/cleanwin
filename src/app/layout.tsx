import type { Metadata, Viewport } from "next";
// Import CSS with critical styles inlined above to minimize render blocking
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

          /* Critical: Complete CSS inlining to prevent external CSS blocking */
          .usp-card {
            display: flex !important;
            align-items: center !important;
            background-color: white !important;
            border: 1px solid rgba(16, 160, 164, 0.1) !important;
            border-radius: 12px !important;
            padding: 16px !important;
            gap: 12px !important;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 0px !important;
            transition: all 0.3s !important;
          }

          /* Logo animation keyframes - inlined for performance */
          @keyframes scroll-logos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Complete mobile responsive grid */
          @media (max-width: 767px) {
            .grid-mobile-1 {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .grid-mobile-2 {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            div[style*="animation"][style*="scroll-logos"] {
              gap: 24px !important;
              animation-duration: 40s !important;
            }
            .logo-container-mobile {
              width: 80px !important;
              height: 40px !important;
            }
          }

          /* Critical: Button and interaction styles */
          button, a, input {
            font-display: swap !important;
            contain: layout style !important;
          }

          /* Critical: Image optimization */
          img {
            contain: layout style !important;
            font-display: swap !important;
          }

          /* Critical: CLS prevention for components */
          .carousel-track {
            contain: layout style !important;
            contain-intrinsic-size: 1440px 280px !important;
          }

          .mobile-card-content {
            contain: layout style !important;
            min-height: 24px !important;
          }

          .mobile-card-content.expanded {
            contain: none !important;
          }

          .cleanwin-value-card {
            contain: layout style !important;
            contain-intrinsic-size: 100% 98px !important;
          }

          /* Critical: Remove any remaining styled-jsx */
          [class*="jsx-"] {
            all: unset !important;
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

          /* Critical: Global hero headline styles */
          .hero-headline {
            font-size: 32px;
            font-weight: 800;
            line-height: 38px;
            margin-bottom: 16px;
            margin-top: 0;
            color: white;
            text-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
            min-height: 76px;
          }

          /* Hero responsive adjustments - Desktop only */
          @media (min-width: 768px) {
            .hero-headline {
              font-size: 48px !important;
              line-height: 54px !important;
              min-height: 108px !important;
            }

            section[data-lcp] p {
              font-size: 18px !important;
              line-height: 28px !important;
            }

            section[data-lcp] {
              height: 612px !important;
              min-height: 612px !important;
            }
          }

          /* Hero mobile adjustments */
          @media (max-width: 767px) {
            section[data-lcp] {
              height: 64vh !important;
              min-height: 476px !important;
              max-height: 64vh !important;
            }
          }
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
