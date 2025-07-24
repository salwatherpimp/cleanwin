import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

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
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Preload critical hero background image */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dwlk9of7h/image/upload/q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          fetchPriority="high"
        />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="data:font/woff2;base64,"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>{`
          /* Critical above-the-fold CSS */
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

          /* Critical Hero Section Styles */
          .hero-mobile-wrapper {
            height: 75vh;
            min-height: 75vh;
            overflow: hidden;
            position: relative;
            contain: layout style;
            contain-intrinsic-size: 100vw 720px;
          }

          .hero-mobile {
            position: relative;
            height: 100%;
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding-top: 100px;
            box-sizing: border-box;
          }

          .hero-content-mobile {
            position: relative;
            z-index: 10;
            max-width: 1152px;
            margin: 0 auto;
            padding: 0 16px 32px 16px;
            text-align: center;
            color: white;
            contain: layout style;
            contain-intrinsic-size: 1152px 420px;
          }

          .hero-headline {
            font-size: 32px;
            font-weight: 800;
            line-height: 38px;
            margin-bottom: 16px;
            margin-top: 0;
            color: white;
            text-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
            min-height: 76px;
            contain: layout style;
            contain-intrinsic-size: 100% 76px;
          }

          /* Critical: Override styled-jsx with maximum specificity */
          div.hero-mobile div img[alt="CleanWin Hero Background"].jsx-a529616e5809607e,
          img[alt="CleanWin Hero Background"].jsx-a529616e5809607e,
          img[alt="CleanWin Hero Background"] {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: 60% 50% !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            position: static !important;
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
            .nav-desktop { display: none !important; }
            .nav-mobile { display: flex !important; }

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
            .nav-desktop { display: flex !important; }
            .nav-mobile { display: none !important; }
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
