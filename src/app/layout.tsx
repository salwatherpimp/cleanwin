import "../styles/globals.css";
import "../styles/components.css";

export const metadata = {
  title: "CleanWin - Professional Cleaning Services",
  description:
    "Professional cleaning services in Winterthur with over 10 years of experience",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
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

        {/* Optimized font loading - async to avoid blocking */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          media="print"
          onLoad="this.media='all'; this.onload=null;"
        />

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



        {/* Critical CSS preload - only for existing assets */}

        {/* Critical image decode optimization + Service Worker + Error handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                // Minimal error handler - only for specific dev overlay issues
                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && event.reason.message &&
                      event.reason.message.includes('__nextjs_original-stack-frame')) {
                    event.preventDefault();
                  }
                });

                // Simplified Service Worker registration (disabled for debugging)
                // if ('serviceWorker' in navigator) {
                //   window.addEventListener('load', function() {
                //     navigator.serviceWorker.register('/sw.js').catch(function() {});
                //   });
                // }

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
          /* Reset and layout */
          *, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { line-height: 1.5; font-family: ui-sans-serif, system-ui, sans-serif; -webkit-text-size-adjust: 100%; }
          body { margin: 0; background: #ffffff; color: #171717; font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; -webkit-font-smoothing: antialiased; }

          /* Navigation and mobile menu */
          nav { position: relative; z-index: 1000; }

          /* Mobile navigation fixes */
          @media (max-width: 1023px) {
            [data-nav="desktop"] { display: none !important; }
            [data-nav="mobile"] { display: flex !important; }

            /* Mobile menu container */
            .mobile-menu-container {
              position: fixed !important;
              top: 80px !important;
              left: 16px !important;
              right: 16px !important;
              background: white !important;
              border-radius: 20px !important;
              box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15) !important;
              border: 1px solid rgba(0, 0, 0, 0.1) !important;
              z-index: 99999 !important;
              max-height: calc(100vh - 120px) !important;
              overflow-y: auto !important;
              margin: 0 auto !important;
              max-width: 400px !important;
            }

            /* Ensure mobile menu is visible when open */
            .mobile-menu-container.menu-open {
              opacity: 1 !important;
              visibility: visible !important;
              transform: translateY(0) !important;
              display: block !important;
            }

            /* Mobile navigation pill */
            nav {
              margin: 0 auto !important;
              max-width: calc(100vw - 32px) !important;
              z-index: 1000 !important;
              position: relative !important;
            }

            /* Mobile navigation wrapper */
            div[style*="position: fixed"][style*="top: 16px"] {
              z-index: 1000 !important;
            }
          }

          @media (min-width: 1024px) {
            [data-nav="desktop"] { display: flex !important; }
            [data-nav="mobile"] { display: none !important; }
          }

          /* Hero section */
          .hero-lcp-container {
            position: relative;
            width: 100vw;
            height: 64vh;
            min-height: 476px;
            overflow: hidden;
          }
          .hero-picture {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
          }
          .hero-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 60% 50%;
            display: block;
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0,0,0,0.4);
          }
          .hero-content-optimized {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 100px 16px 32px 16px;
            text-align: center;
            color: white;
          }
          .hero-content-wrapper {
            max-width: 1152px;
            width: 100%;
          }
          .hero-headline-optimized {
            font-size: 32px;
            font-weight: 800;
            line-height: 38px;
            margin: 0 0 16px 0;
            color: white;
            text-shadow: rgba(0,0,0,0.1) 0px 4px 6px;
          }
          .hero-description-optimized {
            font-size: 16px;
            line-height: 24px;
            margin: 0 auto 24px auto;
            max-width: 768px;
            color: rgba(255,255,255,0.95);
          }
          .hero-cta-section {
            text-align: center;
            margin-bottom: 32px;
            margin-top: 16px;
          }
          .hero-rating-badge {
            display: inline-flex;
            align-items: center;
            background-color: rgba(255,255,255,0.2);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            padding: 8px 16px;
            color: white;
            margin-bottom: 32px;
          }
          .hero-cta-optimized {
            display: inline-block;
            background-color: white;
            color: #374151;
            padding: 16px 32px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          /* Mobile responsive fixes */
          @media (max-width: 768px) {
            .hero-content-optimized {
              margin-top: 85px !important;
              padding: 20px 16px 40px 16px !important;
            }
            .hero-lcp-container {
              min-height: 600px !important;
              height: auto !important;
            }
            .hero-headline-optimized {
              font-size: 28px !important;
              line-height: 34px !important;
              margin-bottom: 16px !important;
            }
            .hero-description-optimized {
              font-size: 15px !important;
              line-height: 23px !important;
              margin-bottom: 24px !important;
            }
            .hero-rating-badge {
              padding: 8px 14px !important;
              margin-bottom: 24px !important;
              font-size: 13px !important;
            }
            .hero-cta-optimized {
              padding: 14px 28px !important;
              font-size: 14px !important;
              min-height: 48px !important;
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
              cursor: pointer !important;
              -webkit-tap-highlight-color: transparent !important;
            }

            /* Fix mobile sections spacing */
            section {
              padding: 32px 16px !important;
            }

            /* Ensure images don't disappear on scroll */
            img {
              will-change: auto !important;
              transform: none !important;
            }
          }

          @media (min-width: 769px) {
            .hero-headline-optimized {
              font-size: 48px;
              line-height: 54px;
            }
            .hero-description-optimized {
              font-size: 18px;
              line-height: 28px;
            }
            .hero-lcp-container {
              height: 612px;
              min-height: 612px;
            }
          }

          /* Grid and layout fixes */
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
              overflow-x: auto !important;
              overflow-y: hidden !important;
              gap: 16px !important;
              width: 100% !important;
              scroll-snap-type: x mandatory !important;
              -webkit-overflow-scrolling: touch !important;
              padding: 0 16px !important;
              justify-content: flex-start !important;
            }

          }

          @media (max-width: 767px) {
            .services-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1200px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Images and media */
          img, picture, video {
            max-width: 100%;
            height: auto;
            display: block;
          }

          /* Cards and reviews */
          .review-card {
            min-height: 280px !important;
            box-sizing: border-box !important;
            flex-shrink: 0 !important;
          }

          /* USP Cards - Hide duplicates properly */
          @media (min-width: 768px) {
            .usp-duplicate {
              display: none !important;
            }
          }

          @media (max-width: 767px) {
            .usp-card:not(.usp-duplicate) {
              display: none !important;
            }
            .usp-duplicate {
              display: flex !important;
            }
          }

          /* Touch improvements for mobile */
          @media (max-width: 768px) {
            button, a {
              min-height: 44px !important;
              min-width: 44px !important;
            }

            /* Ensure touch targets are large enough */
            .hero-cta-optimized {
              min-height: 48px !important;
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
            }

            /* Fix mobile navigation */
            nav {
              padding: 8px 12px !important;
              height: 56px !important;
              min-height: 56px !important;
            }

            /* Wider navigation on mobile */
            .mobile-menu-container {
              left: 12px !important;
              right: 12px !important;
              max-width: calc(100vw - 24px) !important;
            }
          }

          /* Fix for scrollable content */
          @media (max-width: 768px) {
            .grid-mobile-3 > * {
              scroll-snap-align: start !important;
              flex-shrink: 0 !important;
              min-width: 280px !important;
            }
          }

          /* Better mobile scrolling for USP section */
          @media (max-width: 767px) {
            .grid-mobile-3 {
              -webkit-overflow-scrolling: touch !important;
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
            }

            .grid-mobile-3::-webkit-scrollbar {
              display: none !important;
            }

            /* Fix USP cards width */
            .grid-mobile-3 .usp-card {
              min-width: 280px !important;
              max-width: 280px !important;
              flex-shrink: 0 !important;
            }
          }
        `}</style>

        {/* Deferred CSS loading removed - critical CSS is inlined above */}

      </head>
      <body style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>{children}</body>
    </html>
  );
}
