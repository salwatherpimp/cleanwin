import "../styles/globals.css";
import "../styles/components.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CleanWin - Professional Cleaning Services",
    template: "%s | CleanWin"
  },
  description: "Professional cleaning services in Winterthur with over 10 years of experience",
  robots: "index, follow",
  charset: "utf-8"
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

          /* Mobile menu container */
          .mobile-menu-container {
            position: fixed;
            top: 80px;
            left: 16px;
            right: 16px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.1);
            z-index: 99999;
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            margin: 0 auto;
            max-width: 400px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            display: none;
            padding: 20px;
          }

          /* Dropdown containers */
          .services-dropdown,
          .cta-dropdown {
            position: absolute;
            top: 100%;
            background: white;
            border-radius: 16px;
            box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.08);
            padding: 16px;
            z-index: 1000;
            margin-top: 8px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.2s ease;
            pointer-events: none;
          }

          .services-dropdown {
            left: 0;
            min-width: 200px;
          }

          .cta-dropdown {
            right: 0;
            min-width: 280px;
          }

          .services-dropdown.show,
          .cta-dropdown.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
          }

          /* Dropdown buttons with chevrons */
          .dropdown-button {
            display: flex;
            align-items: center;
            gap: 4px;
            position: relative;
            cursor: pointer;
            user-select: none;
          }

          .chevron {
            transition: transform 0.2s ease;
            width: 12px;
            height: 12px;
          }

          .dropdown-button.open .chevron {
            transform: rotate(180deg);
          }

          /* Mobile responsive navigation */
          @media (max-width: 1023px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
            .cta-dropdown {
              right: 0 !important;
              left: auto !important;
              min-width: 200px !important;
              max-width: calc(100vw - 32px) !important;
              margin-top: 8px !important;
            }
            .services-dropdown {
              display: none !important;
            }
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

        {/* Inline navigation JavaScript to ensure it works */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              'use strict';

              let isServicesOpen = false;
              let isCtaOpen = false;

              const services = [
                { name: "Fensterreinigung", href: "https://cleanwin.vercel.app/leistungen/fensterreinigung" },
                { name: "Unterhaltsreinigung", href: "https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" },
                { name: "Solarpanel reinigen", href: "https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" },
                { name: "Fassadenreinigung", href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung" },
                { name: "Umzugsreinigung", href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung" },
                { name: "Baureinigung", href: "https://cleanwin.vercel.app/leistungen/baureinigung" }
              ];

              function createServicesDropdown() {
                const servicesBtn = document.querySelector('[data-dropdown="services"]');
                if (!servicesBtn) return;

                let dropdown = servicesBtn.querySelector('.services-dropdown');
                if (!dropdown) {
                  dropdown = document.createElement('div');
                  dropdown.className = 'services-dropdown';
                  dropdown.style.cssText = 'position: absolute; top: 100%; left: 0; background: white; border-radius: 16px; box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15); border: 1px solid rgba(0, 0, 0, 0.08); padding: 16px; min-width: 200px; z-index: 1000; margin-top: 8px; display: none;';

                  dropdown.innerHTML = services.map(service =>
                    '<a href="' + service.href + '" style="display: flex; align-items: center; padding: 8px 12px; border-radius: 8px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; font-family: inherit; font-size: 14px; font-weight: 500;" onmouseover="this.style.background=\\'#f3f4f6\\'; this.style.color=\\'#0DA6A6\\';" onmouseout="this.style.background=\\'transparent\\'; this.style.color=\\'#374151\\';">' + service.name + '</a>'
                  ).join('');

                  servicesBtn.style.position = 'relative';
                  servicesBtn.appendChild(dropdown);
                }
                return dropdown;
              }

              function createCtaDropdown() {
                const ctaBtn = document.querySelector('[data-dropdown="cta"]');
                if (!ctaBtn) return;

                let dropdown = ctaBtn.querySelector('.cta-dropdown');
                if (!dropdown) {
                  dropdown = document.createElement('div');
                  dropdown.className = 'cta-dropdown';
                  dropdown.style.cssText = 'position: absolute; top: 100%; right: 0; background: white; border-radius: 16px; box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15); border: 1px solid rgba(0, 0, 0, 0.08); padding: 16px; min-width: 280px; z-index: 1000; margin-top: 8px; display: none;';

                  dropdown.innerHTML = '<div style="display: flex; flex-direction: column; gap: 12px;"><a href="tel:+41762951831" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; border: 1px solid #e5e7eb; font-family: inherit;" onmouseover="this.style.background=\\'#f9fafb\\';" onmouseout="this.style.background=\\'transparent\\';"><div style="width: 40px; height: 40px; background: #0DA6A6; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div style="font-weight: 600; font-size: 14px; margin-bottom: 2px; font-family: inherit;">Jetzt anrufen</div><div style="font-size: 13px; color: #6b7280; font-family: inherit;">+41 76 295 18 31</div></div></a><a href="/kontakt" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; border: 1px solid #e5e7eb; font-family: inherit;" onmouseover="this.style.background=\\'#f9fafb\\';" onmouseout="this.style.background=\\'transparent\\';"><div style="width: 40px; height: 40px; background: #0DA6A6; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div style="font-weight: 600; font-size: 14px; margin-bottom: 2px; font-family: inherit;">Kontakt Formular</div><div style="font-size: 13px; color: #6b7280; font-family: inherit;">Unverbindlich anfragen</div></div></a></div>';

                  ctaBtn.style.position = 'relative';
                  ctaBtn.appendChild(dropdown);
                }
                return dropdown;
              }

              function toggleServices() {
                if (window.innerWidth <= 1023) return;
                isServicesOpen = !isServicesOpen;
                isCtaOpen = false;

                const servicesDropdown = createServicesDropdown();
                const ctaDropdown = document.querySelector('.cta-dropdown');

                if (servicesDropdown) {
                  servicesDropdown.style.display = isServicesOpen ? 'block' : 'none';
                }
                if (ctaDropdown) {
                  ctaDropdown.style.display = 'none';
                }

                updateChevrons();
              }

              function toggleCta() {
                isCtaOpen = !isCtaOpen;
                isServicesOpen = false;

                const ctaDropdown = createCtaDropdown();
                const servicesDropdown = document.querySelector('.services-dropdown');

                if (ctaDropdown) {
                  ctaDropdown.style.display = isCtaOpen ? 'block' : 'none';
                }
                if (servicesDropdown && window.innerWidth > 1023) {
                  servicesDropdown.style.display = 'none';
                }

                updateChevrons();
              }

              function updateChevrons() {
                const servicesBtn = document.querySelector('[data-dropdown="services"]');
                const ctaBtn = document.querySelector('[data-dropdown="cta"]');

                if (servicesBtn) {
                  const chevron = servicesBtn.querySelector('.chevron');
                  if (chevron) {
                    chevron.style.transform = isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)';
                  }
                }

                if (ctaBtn) {
                  const chevron = ctaBtn.querySelector('.chevron');
                  if (chevron) {
                    chevron.style.transform = isCtaOpen ? 'rotate(180deg)' : 'rotate(0deg)';
                  }
                }
              }

              function closeAll() {
                isServicesOpen = false;
                isCtaOpen = false;
                const servicesDropdown = document.querySelector('.services-dropdown');
                const ctaDropdown = document.querySelector('.cta-dropdown');
                if (servicesDropdown) servicesDropdown.style.display = 'none';
                if (ctaDropdown) ctaDropdown.style.display = 'none';
                updateChevrons();
              }

              function init() {
                const servicesBtn = document.querySelector('[data-dropdown="services"]');
                const ctaBtn = document.querySelector('[data-dropdown="cta"]');

                if (servicesBtn) {
                  servicesBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleServices();
                  });
                }

                if (ctaBtn) {
                  ctaBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleCta();
                  });
                }

                document.addEventListener('click', function(e) {
                  if (!e.target.closest('[data-dropdown]') && !e.target.closest('.services-dropdown') && !e.target.closest('.cta-dropdown')) {
                    closeAll();
                  }
                });

                console.log('Navigation dropdowns initialized');
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
              } else {
                init();
              }
            })();

            // Defer fonts
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
              <div className="nav-link dropdown-button" data-dropdown="services">
                <span>Dienstleistungen</span>
                <svg className="chevron" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <a href="https://cleanwin.vercel.app/ueber-uns" className="nav-link">
                Über uns
              </a>
              <a href="https://cleanwin.vercel.app/referenzen" className="nav-link">
                Referenzen
              </a>
            </div>

            {/* CTA Button */}
            <div className="cta-button dropdown-button" data-dropdown="cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Kontaktiere uns</span>
              <svg className="chevron" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

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
