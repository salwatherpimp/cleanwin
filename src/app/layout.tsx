import "../styles/globals.css";
import "../styles/components.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <title>CleanWin - Professional Cleaning Services</title>
        <meta name="description" content="Professional cleaning services in Winterthur with over 10 years of experience" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Critical domain preconnections for performance - Max 4 as recommended */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />

        {/* HERO IMAGE EXCLUSIVE PRIORITY - No competing resources during LCP */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          imageSrcSet="https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif 480w, https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif 1280w"
          imageSizes="(max-width: 768px) 480px, 1280px"
          fetchPriority="high"
          type="image/avif"
        />

        {/* Font preconnects deferred for LCP - Hero uses system fonts only */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Defer font loading until after LCP paint
            requestIdleCallback(function() {
              var preconnect1 = document.createElement('link');
              preconnect1.rel = 'preconnect';
              preconnect1.href = 'https://fonts.googleapis.com';
              document.head.appendChild(preconnect1);

              var preconnect2 = document.createElement('link');
              preconnect2.rel = 'preconnect';
              preconnect2.href = 'https://fonts.gstatic.com';
              preconnect2.crossOrigin = 'anonymous';
              document.head.appendChild(preconnect2);

              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
              document.head.appendChild(link);
            }, { timeout: 1000 });
          `
        }} />

        {/* Module preloads removed to give hero image exclusive priority during LCP */}



        {/* Critical CSS preload - only for existing assets */}

        {/* All JavaScript deferred for LCP optimization - Hero uses preloaded image only */}

        <style>{`
          /* Critical CSS for LCP optimization - Hero section only */

          /* HERO SECTION CRITICAL CSS */
          [data-lcp] {
            position: relative;
            width: 100vw;
            height: 64vh;
            min-height: 476px;
            overflow: hidden;
            contain: layout style paint;
            isolation: isolate;
          }

          @media (max-width: 768px) {
            [data-lcp] {
              min-height: 520px !important;
              height: 520px !important;
            }
            [data-hero-content] {
              margin-top: 85px !important;
              padding: 20px 16px 40px 16px !important;
            }
            [data-hero-headline] {
              font-size: 28px !important;
              line-height: 34px !important;
            }
            [data-hero-description] {
              font-size: 15px !important;
              line-height: 23px !important;
            }
            [data-hero-rating] {
              padding: 8px 14px !important;
              margin-bottom: 24px !important;
            }
            [data-hero-cta] {
              padding: 14px 28px !important;
              min-height: 48px !important;
            }
          }

          @media (min-width: 769px) {
            [data-lcp] {
              height: 580px !important;
              min-height: 580px !important;
            }
            [data-hero-headline] {
              font-size: 48px;
              line-height: 54px;
            }
            [data-hero-description] {
              font-size: 18px;
              line-height: 28px;
            }
          }

          @media (min-width: 1200px) {
            [data-lcp] {
              height: 640px !important;
              min-height: 640px !important;
            }
          }

          /* Reset and layout */
          *, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { line-height: 1.5; font-family: ui-sans-serif, system-ui, sans-serif; -webkit-text-size-adjust: 100%; }
          body { margin: 0; background: #ffffff; color: #171717; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 'Inter'; -webkit-font-smoothing: antialiased; }

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

          /* Hero section styles moved to CSS modules */

          /* Mobile responsive fixes */
          @media (max-width: 768px) {
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
