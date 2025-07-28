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
          /* Basic reset and layout */
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html { line-height: 1.5; font-family: ui-sans-serif, system-ui, sans-serif; }
          body { margin: 0; background: #ffffff; color: #171717; font-family: Arial, Helvetica, sans-serif; }

          /* Basic navigation */
          nav { position: relative; }

          /* Basic hero styles */
          .hero-lcp-container { position: relative; width: 100vw; height: 64vh; min-height: 476px; overflow: hidden; }
          .hero-picture { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
          .hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 60% 50%; display: block; }
          .hero-overlay { position: absolute; inset: 0; background-color: rgba(0,0,0,0.4); }
          .hero-content-optimized { position: relative; z-index: 10; height: 100%; display: flex; align-items: center; justify-content: center; padding: 100px 16px 32px 16px; text-align: center; color: white; }
          .hero-content-wrapper { max-width: 1152px; width: 100%; }
          .hero-headline-optimized { font-size: 32px; font-weight: 800; line-height: 38px; margin: 0 0 16px 0; color: white; text-shadow: rgba(0,0,0,0.1) 0px 4px 6px; }
          .hero-description-optimized { font-size: 16px; line-height: 24px; margin: 0 auto 24px auto; max-width: 768px; color: rgba(255,255,255,0.95); }
          .hero-cta-section { text-align: center; margin-bottom: 32px; margin-top: 16px; }
          .hero-rating-badge { display: inline-flex; align-items: center; background-color: rgba(255,255,255,0.2); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 8px 16px; color: white; margin-bottom: 32px; }
          .hero-cta-optimized { display: inline-block; background-color: white; color: #374151; padding: 16px 32px; border-radius: 9999px; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.2s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

          /* Basic responsive */
          @media (max-width: 768px) {
            .hero-content-optimized { margin-top: 60px; padding-top: 10px; padding-bottom: 40px; }
            .hero-lcp-container { min-height: 520px; }
          }
          @media (min-width: 768px) {
            .hero-headline-optimized { font-size: 48px; line-height: 54px; }
            .hero-description-optimized { font-size: 18px; line-height: 28px; }
            .hero-lcp-container { height: 612px; min-height: 612px; }
          }
          @media (max-width: 1023px) {
            [data-nav="desktop"] { display: none; }
            [data-nav="mobile"] { display: flex; }
          }
          @media (min-width: 1024px) {
            [data-nav="desktop"] { display: flex; }
            [data-nav="mobile"] { display: none; }
          }

          /* Images */
          img, picture, video { max-width: 100%; height: auto; display: block; }
          .review-card { min-height: 280px; }
        `}</style>

        {/* Deferred CSS loading removed - critical CSS is inlined above */}

      </head>
      <body style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>{children}</body>
    </html>
  );
}
