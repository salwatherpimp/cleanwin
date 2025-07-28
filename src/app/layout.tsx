import type { Metadata, Viewport } from "next";
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

        {/* Preload critical fonts with high priority */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" as="style" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" /></noscript>

        {/* Critical CSS preload - only for existing assets */}

        {/* Critical image decode optimization + Service Worker + Error handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                // Global error handler for dev overlay fetch errors
                window.addEventListener('error', function(event) {
                  if (event.message && event.message.includes('Failed to fetch')) {
                    event.preventDefault();
                    return false;
                  }
                });

                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && event.reason.message && event.reason.message.includes('Failed to fetch')) {
                    event.preventDefault();
                    return false;
                  }
                });

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
          /* CRITICAL INLINE CSS - Above-the-fold optimization <14KB */
          *,::before,::after{box-sizing:border-box;border:0 solid #e5e7eb}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif;scroll-behavior:smooth;width:100%;height:100%}body{margin:0;line-height:inherit;background:#ffffff;color:#171717;font-family:Arial,Helvetica,sans-serif;font-display:swap}

          /* Critical navigation */
          nav{contain:layout style;font-display:swap}
          .nav-stabilizer-wrapper{contain:layout style;contain-intrinsic-size:100vw 56px;box-sizing:border-box}

          /* Critical hero - LCP optimized */
          .hero-lcp-container{position:relative;width:100vw;height:64vh;min-height:476px;max-height:64vh;overflow:hidden;contain:layout style paint;content-visibility:auto;contain-intrinsic-size:100vw 476px;transform:translateZ(0);will-change:transform}
          .hero-picture{position:absolute;inset:0;width:100%;height:100%;display:block;contain:layout style;aspect-ratio:16/9}
          .hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%;display:block;image-rendering:-webkit-optimize-contrast;transform:translateZ(0);will-change:auto;contain:layout style}
          .hero-overlay{position:absolute;inset:0;background-color:rgba(0,0,0,0.4);transform:translateZ(0);will-change:auto;backface-visibility:hidden;isolation:isolate}
          .hero-content-optimized{position:relative;z-index:10;height:100%;display:flex;align-items:center;justify-content:center;padding:100px 16px 32px 16px;text-align:center;color:white;contain:layout style;transform:translateZ(0)}
          .hero-content-wrapper{max-width:1152px;width:100%;contain:layout style;transform:translateZ(0);will-change:auto;backface-visibility:hidden}
          .hero-headline-optimized{font-size:32px;font-weight:800;line-height:38px;margin:0 0 16px 0;color:white;text-shadow:rgba(0,0,0,0.1) 0px 4px 6px;min-height:76px;contain:layout style;will-change:auto}
          .hero-description-optimized{font-size:16px;line-height:24px;margin:0 auto 24px auto;max-width:768px;color:rgba(255,255,255,0.95);contain:layout style;min-height:48px}
          .hero-cta-section{text-align:center;margin-bottom:32px;margin-top:16px;contain:layout style}
          .hero-rating-badge{display:inline-flex;align-items:center;background-color:rgba(255,255,255,0.2);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,0.3);border-radius:8px;padding:8px 16px;color:white;margin-bottom:32px;contain:layout style;transform:translateZ(0)}
          .hero-cta-optimized{display:inline-block;background-color:white;color:#374151;padding:16px 32px;border-radius:9999px;font-size:14px;font-weight:600;text-decoration:none;transition:all 0.2s ease;box-shadow:0 2px 8px rgba(0,0,0,0.1);contain:layout style;transform:translateZ(0);will-change:transform,background-color,color,box-shadow}

          /* Critical responsive */
          @media (max-width:768px){.hero-content-optimized{margin-top:60px!important;padding-top:10px!important;padding-bottom:40px!important}.hero-lcp-container{min-height:520px!important;max-height:none!important;contain-intrinsic-size:100vw 520px}}
          @media (min-width:768px){.hero-headline-optimized{font-size:48px!important;line-height:54px!important;min-height:108px!important}.hero-description-optimized{font-size:18px!important;line-height:28px!important;min-height:64px!important}.hero-lcp-container{height:612px!important;min-height:612px!important;contain-intrinsic-size:100vw 612px}}
          @media (max-width:1023px){[data-nav="desktop"]{display:none!important}[data-nav="mobile"]{display:flex!important}.nav-stabilizer-wrapper{left:16px!important;right:16px!important;width:calc(100vw - 32px)!important}}
          @media (min-width:1024px){[data-nav="desktop"]{display:flex!important}[data-nav="mobile"]{display:none!important}}

          /* Critical layout stability - CLS prevention */
          .carousel-track{contain:layout style;contain-intrinsic-size:1440px 280px}
          .review-card{contain:layout style;contain-intrinsic-size:360px 280px;min-height:280px!important;max-width:360px!important;width:100%!important;box-sizing:border-box!important}
          .mobile-card-content{contain:layout style;min-height:24px}
          .cleanwin-value-card{contain:layout style;contain-intrinsic-size:100% 98px}

          /* Critical grids responsive */
          @media (max-width:767px){.grid-mobile-1{grid-template-columns:1fr!important;gap:16px!important}.grid-mobile-2{grid-template-columns:1fr!important;gap:32px!important}.grid-mobile-3{display:flex!important;overflow:hidden!important;gap:24px!important;width:100%!important}.services-grid{grid-template-columns:1fr!important;gap:20px!important}}
          @media (max-width:1200px){.services-grid{grid-template-columns:repeat(2,1fr)!important}}

          /* Performance optimizations */
          *{transform-style:preserve-3d}
          .hero-lcp-container *{backface-visibility:hidden;perspective:1000px}
          img,picture,video{max-width:100%;height:auto;display:block}
          button,a{contain:layout style;font-display:swap}
          /* Duplicate styles removed - optimized above */
        `}</style>

        {/* Deferred CSS loading removed - critical CSS is inlined above */}

      </head>
      <body style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>{children}</body>
    </html>
  );
}
