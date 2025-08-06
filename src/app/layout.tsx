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
            cursor: pointer;
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
            display: none;
          }

          .services-dropdown {
            left: 0;
            min-width: 200px;
          }

          .cta-dropdown {
            right: 0;
            min-width: 280px;
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
            display: none;
            padding: 20px;
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

        {/* Bulletproof navigation JavaScript */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              setTimeout(function() {
                console.log('Setting up navigation...');
                
                // Fix chevron SVG content
                const chevrons = document.querySelectorAll('.chevron');
                chevrons.forEach(function(chevron) {
                  chevron.innerHTML = '<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
                  chevron.setAttribute('viewBox', '0 0 12 12');
                  chevron.setAttribute('fill', 'none');
                });
                
                // Services dropdown handler (desktop only)
                const servicesBtn = document.querySelector('[data-dropdown="services"]');
                if (servicesBtn) {
                  servicesBtn.onclick = function(e) {
                    e.preventDefault();
                    console.log('Services clicked! Width:', window.innerWidth);
                    if (window.innerWidth > 1023) {
                      const dropdown = document.querySelector('.services-dropdown');
                      const ctaDropdown = document.querySelector('.cta-dropdown');
                      if (dropdown) {
                        const isOpen = dropdown.style.display === 'block';
                        dropdown.style.display = isOpen ? 'none' : 'block';
                        const chevron = servicesBtn.querySelector('.chevron');
                        if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                        console.log('Services dropdown:', isOpen ? 'closed' : 'opened');
                      }
                      if (ctaDropdown) {
                        ctaDropdown.style.display = 'none';
                        const ctaChevron = document.querySelector('[data-dropdown="cta"] .chevron');
                        if (ctaChevron) ctaChevron.style.transform = 'rotate(0deg)';
                      }
                    }
                  };
                }
                
                // CTA dropdown handler (both desktop and mobile)
                const ctaBtn = document.querySelector('[data-dropdown="cta"]');
                if (ctaBtn) {
                  ctaBtn.onclick = function(e) {
                    e.preventDefault();
                    console.log('CTA clicked!');
                    const dropdown = document.querySelector('.cta-dropdown');
                    const servicesDropdown = document.querySelector('.services-dropdown');
                    if (dropdown) {
                      const isOpen = dropdown.style.display === 'block';
                      dropdown.style.display = isOpen ? 'none' : 'block';
                      const chevron = ctaBtn.querySelector('.chevron');
                      if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                      console.log('CTA dropdown:', isOpen ? 'closed' : 'opened');
                    }
                    if (servicesDropdown && window.innerWidth > 1023) {
                      servicesDropdown.style.display = 'none';
                      const servicesChevron = document.querySelector('[data-dropdown="services"] .chevron');
                      if (servicesChevron) servicesChevron.style.transform = 'rotate(0deg)';
                    }
                  };
                }
                
                // Mobile hamburger menu
                const hamburger = document.querySelector('.hamburger');
                if (hamburger) {
                  hamburger.onclick = function(e) {
                    e.preventDefault();
                    console.log('Hamburger clicked!');
                    let mobileMenu = document.querySelector('.mobile-menu-container');
                    if (!mobileMenu) {
                      mobileMenu = document.createElement('div');
                      mobileMenu.className = 'mobile-menu-container';
                      mobileMenu.style.cssText = 'position: fixed; top: 80px; left: 16px; right: 16px; margin: 0 auto; width: auto; max-width: 400px; background: white; border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15); border: 1px solid rgba(0, 0, 0, 0.1); z-index: 9999; padding: 20px; display: none;';
                      mobileMenu.innerHTML = '<div style="margin-bottom: 12px;"><h3 style="font-weight: 700; font-size: 18px; color: #1f2937; margin-bottom: 12px; margin-top: 0;">Leistungen</h3><a href="https://cleanwin.vercel.app/leistungen/fensterreinigung" style="display: flex; padding: 12px 16px; text-decoration: none; color: #6b7280; font-size: 16px;">Fensterreinigung</a><a href="https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" style="display: flex; padding: 12px 16px; text-decoration: none; color: #6b7280; font-size: 16px;">Unterhaltsreinigung</a><a href="https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" style="display: flex; padding: 12px 16px; text-decoration: none; color: #6b7280; font-size: 16px;">Solarpanel reinigen</a><a href="https://cleanwin.vercel.app/leistungen/fassadenreinigung" style="display: flex; padding: 12px 16px; text-decoration: none; color: #6b7280; font-size: 16px;">Fassadenreinigung</a><a href="https://cleanwin.vercel.app/leistungen/umzugsreinigung" style="display: flex; padding: 12px 16px; text-decoration: none; color: #6b7280; font-size: 16px;">Umzugsreinigung</a><a href="https://cleanwin.vercel.app/leistungen/baureinigung" style="display: flex; padding: 12px 16px; text-decoration: none; color: #6b7280; font-size: 16px;">Baureinigung</a></div><div style="height: 1px; background: #d1d5db; margin: 12px 0;"></div><div><a href="https://cleanwin.vercel.app/ueber-uns" style="display: flex; padding: 12px 0; text-decoration: none; color: #1f2937; font-weight: 700; font-size: 18px; margin-bottom: 8px;">Über uns</a><a href="https://cleanwin.vercel.app/referenzen" style="display: flex; padding: 12px 0; text-decoration: none; color: #1f2937; font-weight: 700; font-size: 18px;">Referenzen</a></div>';
                      document.body.appendChild(mobileMenu);
                    }
                    const isOpen = mobileMenu.style.display === 'block';
                    mobileMenu.style.display = isOpen ? 'none' : 'block';
                    console.log('Mobile menu:', isOpen ? 'closed' : 'opened');
                    
                    // Animate hamburger lines
                    const lines = hamburger.querySelectorAll('.hamburger-line');
                    if (!isOpen) {
                      lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                      lines[1].style.opacity = '0';
                      lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                    } else {
                      lines[0].style.transform = 'none';
                      lines[1].style.opacity = '1';
                      lines[2].style.transform = 'none';
                    }
                  };
                }
                
                // Close dropdowns when clicking outside
                document.onclick = function(e) {
                  if (!e.target.closest('[data-dropdown]') && !e.target.closest('.services-dropdown') && !e.target.closest('.cta-dropdown') && !e.target.closest('.hamburger') && !e.target.closest('.mobile-menu-container')) {
                    const servicesDropdown = document.querySelector('.services-dropdown');
                    const ctaDropdown = document.querySelector('.cta-dropdown');
                    const mobileMenu = document.querySelector('.mobile-menu-container');
                    if (servicesDropdown) servicesDropdown.style.display = 'none';
                    if (ctaDropdown) ctaDropdown.style.display = 'none';
                    if (mobileMenu) mobileMenu.style.display = 'none';
                    
                    // Reset chevrons
                    const chevrons = document.querySelectorAll('.chevron');
                    chevrons.forEach(function(c) { c.style.transform = 'rotate(0deg)'; });
                    
                    // Reset hamburger
                    const lines = document.querySelectorAll('.hamburger-line');
                    lines.forEach(function(line, i) {
                      if (i === 0) line.style.transform = 'none';
                      if (i === 1) line.style.opacity = '1';
                      if (i === 2) line.style.transform = 'none';
                    });
                  }
                };
                
                console.log('Navigation setup complete!');
              }, 500);
            });
            
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
              <div className="nav-link dropdown-button" data-dropdown="services" style={{position: 'relative'}}>
                <span>Dienstleistungen</span>
                <svg className="chevron" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Services Dropdown */}
                <div className="services-dropdown" style={{display: 'none'}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                    <a href="https://cleanwin.vercel.app/leistungen/fensterreinigung" style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500'}}>Fensterreinigung</a>
                    <a href="https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500'}}>Unterhaltsreinigung</a>
                    <a href="https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500'}}>Solarpanel reinigen</a>
                    <a href="https://cleanwin.vercel.app/leistungen/fassadenreinigung" style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500'}}>Fassadenreinigung</a>
                    <a href="https://cleanwin.vercel.app/leistungen/umzugsreinigung" style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500'}}>Umzugsreinigung</a>
                    <a href="https://cleanwin.vercel.app/leistungen/baureinigung" style={{display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '8px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500'}}>Baureinigung</a>
                  </div>
                </div>
              </div>
              <a href="https://cleanwin.vercel.app/ueber-uns" className="nav-link">
                Über uns
              </a>
              <a href="https://cleanwin.vercel.app/referenzen" className="nav-link">
                Referenzen
              </a>
            </div>

            {/* CTA Button */}
            <div className="cta-button dropdown-button" data-dropdown="cta" style={{position: 'relative'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Kontaktiere uns</span>
              <svg className="chevron" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* CTA Dropdown */}
              <div className="cta-dropdown" style={{display: 'none'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <a href="tel:+41762951831" style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', border: '1px solid #e5e7eb', fontFamily: 'inherit'}}>
                    <div style={{width: '40px', height: '40px', background: '#0DA6A6', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: '0'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <div style={{fontWeight: '600', fontSize: '14px', marginBottom: '2px', fontFamily: 'inherit'}}>Jetzt anrufen</div>
                      <div style={{fontSize: '13px', color: '#6b7280', fontFamily: 'inherit'}}>+41 76 295 18 31</div>
                    </div>
                  </a>
                  <a href="/kontakt" style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', textDecoration: 'none', color: '#374151', transition: 'background-color 0.2s ease', border: '1px solid #e5e7eb', fontFamily: 'inherit'}}>
                    <div style={{width: '40px', height: '40px', background: '#0DA6A6', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: '0'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <div style={{fontWeight: '600', fontSize: '14px', marginBottom: '2px', fontFamily: 'inherit'}}>Kontakt Formular</div>
                      <div style={{fontSize: '13px', color: '#6b7280', fontFamily: 'inherit'}}>Unverbindlich anfragen</div>
                    </div>
                  </a>
                </div>
              </div>
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
