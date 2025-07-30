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

        {/* Complete navigation and layout CSS - NO JavaScript dependencies */}
        <style>{`
          /* Reset and base styles */
          *, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { line-height: 1.5; font-family: ui-sans-serif, system-ui, sans-serif; -webkit-text-size-adjust: 100%; }
          body { margin: 0; background: #ffffff; color: #171717; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; -webkit-font-smoothing: antialiased; }

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

          /* STATIC NAVIGATION - PURE HTML/CSS */
          .nav-wrapper {
            position: fixed;
            top: 16px;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: calc(100vw - 20px);
            margin: 0 auto;
            padding: 0 10px;
          }

          .nav-pill {
            background: white;
            border-radius: 50px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            height: 56px;
            min-height: 56px;
            padding: 8px 16px;
            margin: 0 auto;
            width: 100%;
            max-width: 1200px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: visible;
          }

          .nav-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            flex-shrink: 0;
          }

          .nav-logo img {
            width: auto;
            height: 30px;
            max-width: 110px;
          }

          .desktop-menu {
            display: flex;
            align-items: center;
            gap: 32px;
            margin-left: 32px;
          }

          .nav-link {
            text-decoration: none;
            color: #374151;
            font-weight: 500;
            font-size: 14px;
            padding: 10px 16px;
            border-radius: 25px;
            transition: background-color 0.2s ease, color 0.2s ease;
            white-space: nowrap;
            font-family: inherit;
          }

          .nav-link:hover {
            background: #f3f4f6;
            color: #0DA6A6;
          }

          .cta-button {
            display: flex;
            align-items: center;
            gap: 6px;
            background: #0DA6A6;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 13px;
            text-decoration: none;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(13, 166, 166, 0.3);
            height: 36px;
            min-height: 36px;
            font-family: inherit;
            transition: background-color 0.2s ease;
          }

          .cta-button:hover {
            background: #0b8d8d;
            box-shadow: 0 4px 16px rgba(13, 166, 166, 0.4);
          }

          .hamburger {
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            flex-shrink: 0;
            border-radius: 16px;
            transition: background-color 0.2s ease;
          }

          .hamburger:hover {
            background: #f3f4f6;
          }

          .hamburger-line {
            width: 18px;
            height: 2px;
            background-color: #374151;
            margin-bottom: 3px;
            transition: transform 0.3s ease;
          }

          .hamburger-line:last-child {
            margin-bottom: 0;
          }

          /* Mobile responsive navigation */
          @media (max-width: 1023px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
            .nav-pill {
              padding: 8px 16px !important;
              height: 56px !important;
              min-height: 56px !important;
            }
            .nav-logo {
              margin-right: 6px !important;
            }
            .cta-button {
              padding: 8px 14px !important;
              font-size: 13px !important;
              height: 36px !important;
              min-height: 36px !important;
              gap: 6px !important;
              margin: 0 6px 0 auto !important;
            }
          }

          @media (min-width: 1024px) {
            .desktop-menu {
              display: flex !important;
            }
            .hamburger {
              display: none !important;
            }
            .nav-pill {
              padding: 8px 24px !important;
              height: 60px !important;
              min-height: 60px !important;
            }
            .nav-logo img {
              height: 42px !important;
              width: auto !important;
            }
          }

          /* Layout and grid fixes */
          .grid-mobile-1 { grid-template-columns: 1fr; gap: 16px; }
          .grid-mobile-2 { grid-template-columns: 1fr; gap: 32px; }
          .grid-mobile-3 { 
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            gap: 16px;
            width: 100%;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 0 16px;
            justify-content: flex-start;
          }

          @media (min-width: 768px) {
            .grid-mobile-2 { grid-template-columns: 1fr 1fr; }
            .grid-mobile-3 { grid-template-columns: repeat(3, 1fr); }
          }

          .services-grid { 
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          @media (max-width: 767px) {
            .services-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
            .grid-mobile-3 { 
              display: flex !important;
              overflow-x: auto !important;
              grid-template-columns: none !important;
            }
            .grid-mobile-3 > * {
              scroll-snap-align: start !important;
              flex-shrink: 0 !important;
              min-width: 280px !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1200px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
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

          /* USP Cards visibility */
          @media (min-width: 768px) {
            .usp-duplicate { display: none !important; }
          }

          @media (max-width: 767px) {
            .usp-card:not(.usp-duplicate) { display: none !important; }
            .usp-duplicate { display: flex !important; }
          }

          /* Touch improvements for mobile */
          @media (max-width: 768px) {
            button, a { min-height: 44px !important; min-width: 44px !important; }
            section { padding: 32px 16px !important; }
          }
        `}</style>

        {/* Load interactive navigation AFTER page load - NO JavaScript during LCP */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // CRITICAL: No JavaScript execution during HTML parse/LCP
            window.addEventListener('load', function() {
              // Only load interactive navigation AFTER LCP completes
              setTimeout(function() {
                import('./navigation-interactive.js').catch(function() {
                  // Fallback for development
                  var script = document.createElement('script');
                  script.src = '/navigation-interactive.js';
                  script.async = true;
                  document.head.appendChild(script);
                });
              }, 100);
            });
            
            // Defer all non-critical resources
            requestIdleCallback(function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
              document.head.appendChild(link);
            }, { timeout: 2000 });
          `
        }} />

      </head>
      <body>
        {/* STATIC NAVIGATION - Pure HTML/CSS, zero JavaScript during LCP */}
        <div className="nav-wrapper">
          <nav className="nav-pill">
            {/* Logo */}
            <a href="https://cleanwin.vercel.app/" className="nav-logo">
              <img
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
                alt="CleanWin Logo"
                width={110}
                height={30}
                decoding="async"
              />
            </a>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              <a href="https://cleanwin.vercel.app/leistungen/fensterreinigung" className="nav-link">
                Dienstleistungen
              </a>
              <a href="https://cleanwin.vercel.app/ueber-uns" className="nav-link">
                Über uns
              </a>
              <a href="https://cleanwin.vercel.app/referenzen" className="nav-link">
                Referenzen
              </a>
            </div>

            {/* CTA Button */}
            <a href="/kontakt" className="cta-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Kontaktiere uns</span>
            </a>

            {/* Mobile Hamburger */}
            <button className="hamburger" type="button" aria-label="Navigation menu">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </button>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
