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
        <link rel="modulepreload" href="/_next/static/chunks/pages/_app.js" />
        <link rel="modulepreload" href="/_next/static/chunks/pages/_document.js" />

        {/* Preload critical fonts with high priority */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" as="style" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" /></noscript>

        {/* Critical CSS preload */}
        <link rel="preload" href="/_next/static/css/app.css" as="style" />
        <link rel="preload" href="/styles/hero-critical.css" as="style" />

        {/* Critical image decode optimization + Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                // Register Service Worker for hero caching
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(function(registration) {
                      // Send preload message to SW
                      if (registration.active) {
                        registration.active.postMessage({type: 'PRELOAD_HERO'});
                      }
                    }).catch(function() {});
                  });
                }

                // Critical image decode optimization
                var heroImg = new Image();
                heroImg.decoding = 'async';
                heroImg.fetchPriority = 'high';
                heroImg.loading = 'eager';
                if (window.innerWidth <= 768) {
                  heroImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDk0ODgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNzU5ODUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+';
                } else {
                  heroImg.src = 'https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif';
                }
                if (heroImg.decode) heroImg.decode().catch(function(){});
              })();
            `
          }}
        />

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

          /* Mobile hero styles moved to hero-critical.css */

          /* Critical mobile navigation visibility */
          @media (max-width: 1023px) {
            [data-nav="desktop"] { display: none !important; }
            [data-nav="mobile"] { display: flex !important; }

            .nav-stabilizer-wrapper {
              left: 16px !important;
              right: 16px !important;
              width: calc(100vw - 32px) !important;
            }

            /* Mobile hero content styles moved to hero-critical.css */
          }

          /* Desktop hero styles moved to hero-critical.css */

          @media (min-width: 1024px) {
            [data-nav="desktop"] { display: flex !important; }
            [data-nav="mobile"] { display: none !important; }
          }

          /* Hero section dimensions moved to hero-critical.css */

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
