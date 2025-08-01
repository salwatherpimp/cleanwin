// Interactive Navigation Enhancement - Loads ONLY after LCP
"use client";

import { useState, useEffect } from "react";

// TypeScript declaration for HMR tracking
declare global {
  interface Window {
    __navigationEnhanced?: boolean;
  }
}

export default function NavigationInteractive() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);
  // Services dropdown state removed as it's not used in this implementation
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and add resize listener
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as Element | null;
      if (!clickedElement) return;

      const isInsideNav = clickedElement.closest('nav') ||
                          clickedElement.closest('.mobile-menu-container');

      if (!isInsideNav) {
        setIsCtaDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Services array moved inside useEffect to avoid dependency issues

  // Icon components removed to eliminate unused variable warnings

  // Find and enhance existing static navigation
  useEffect(() => {
    const services = [
      { name: "Fensterreinigung", href: "https://cleanwin.vercel.app/leistungen/fensterreinigung" },
      { name: "Unterhaltsreinigung", href: "https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" },
      { name: "Solarpanel reinigen", href: "https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" },
      { name: "Fassadenreinigung", href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung" },
      { name: "Umzugsreinigung", href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung" },
      { name: "Baureinigung", href: "https://cleanwin.vercel.app/leistungen/baureinigung" },
    ];

    const navWrapper = document.querySelector('.nav-wrapper');
    const nav = document.querySelector('.nav-pill');
    const hamburger = document.querySelector('.hamburger');
    const ctaButton = document.querySelector('.cta-button');

    if (!navWrapper || !nav || !hamburger) return;

    // Enhance hamburger with click functionality
    const handleHamburgerClick = (e: Event) => {
      e.stopPropagation();
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Enhanced CTA button with dropdown functionality
    const handleCtaClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      setIsCtaDropdownOpen(!isCtaDropdownOpen);
    };

    hamburger.addEventListener('click', handleHamburgerClick);

    // Add mobile menu container if it doesn't exist
    let mobileMenuContainer = document.querySelector('.mobile-menu-container');
    if (!mobileMenuContainer && isMobile) {
      mobileMenuContainer = document.createElement('div');
      mobileMenuContainer.className = 'mobile-menu-container';
      mobileMenuContainer.innerHTML = `
        <div style="margin-bottom: 12px;">
          <h3 style="font-weight: 700; font-size: 18px; color: #1f2937; margin-bottom: 12px; margin-top: 0;">Leistungen</h3>
          ${services.map(service => `
            <a href="${service.href}" style="display: flex; align-items: center; padding: 12px 16px; text-decoration: none; color: #6b7280; font-weight: 400; font-size: 16px; transition: background-color 0.2s ease, color 0.2s ease; min-height: 44px;">
              ${service.name}
            </a>
          `).join('')}
        </div>
        <div style="height: 1px; background: #d1d5db; margin: 12px 0;"></div>
        <div>
          <a href="https://cleanwin.vercel.app/ueber-uns" style="display: flex; align-items: center; padding: 12px 0; text-decoration: none; color: #1f2937; font-weight: 700; font-size: 18px; margin-bottom: 8px; transition: color 0.2s ease; min-height: 44px;">
            Über uns
          </a>
          <a href="https://cleanwin.vercel.app/referenzen" style="display: flex; align-items: center; padding: 12px 0; text-decoration: none; color: #1f2937; font-weight: 700; font-size: 18px; transition: color 0.2s ease; min-height: 44px;">
            Referenzen
          </a>
        </div>
      `;
      document.body.appendChild(mobileMenuContainer);
    }

    if (ctaButton && !isMobile) {
      // Add dropdown functionality to desktop CTA
      ctaButton.addEventListener('click', handleCtaClick);

      // Add dropdown container if it doesn't exist
      let ctaDropdown = document.querySelector('.cta-dropdown');
      if (!ctaDropdown) {
        ctaDropdown = document.createElement('div');
        ctaDropdown.className = 'cta-dropdown';
        ctaDropdown.style.cssText = `
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 16px;
          min-width: 280px;
          z-index: 1000;
          margin-top: 8px;
          display: ${isCtaDropdownOpen ? 'block' : 'none'};
        `;
        ctaDropdown.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <a href="tel:+41762951831" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; border: 1px solid #e5e7eb;">
              <div style="width: 40px; height: 40px; background: #0DA6A6; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style="font-weight: 600; font-size: 14px; margin-bottom: 2px;">Jetzt anrufen</div>
                <div style="font-size: 13px; color: #6b7280;">+41 76 295 18 31</div>
              </div>
            </a>
            <a href="/kontakt" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; border: 1px solid #e5e7eb;">
              <div style="width: 40px; height: 40px; background: #0DA6A6; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style="font-weight: 600; font-size: 14px; margin-bottom: 2px;">Kontakt Formular</div>
                <div style="font-size: 13px; color: #6b7280;">Unverbindlich anfragen</div>
              </div>
            </a>
          </div>
        `;
        ctaButton.parentElement?.appendChild(ctaDropdown);
      }
    }

    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      if (ctaButton && !isMobile) {
        ctaButton.removeEventListener('click', handleCtaClick);
      }
    };
  }, [isMobileMenuOpen, isCtaDropdownOpen, isMobile]);

  // Update mobile menu visibility
  useEffect(() => {
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    if (mobileMenuContainer) {
      (mobileMenuContainer as HTMLElement).style.display = isMobileMenuOpen ? 'block' : 'none';
      (mobileMenuContainer as HTMLElement).style.opacity = isMobileMenuOpen ? '1' : '0';
      (mobileMenuContainer as HTMLElement).style.visibility = isMobileMenuOpen ? 'visible' : 'hidden';
      (mobileMenuContainer as HTMLElement).style.transform = isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)';
    }
  }, [isMobileMenuOpen]);

  // Update CTA dropdown visibility
  useEffect(() => {
    const ctaDropdown = document.querySelector('.cta-dropdown');
    if (ctaDropdown) {
      (ctaDropdown as HTMLElement).style.display = isCtaDropdownOpen ? 'block' : 'none';
    }
  }, [isCtaDropdownOpen]);

  // Update hamburger animation
  useEffect(() => {
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    if (hamburgerLines.length >= 3) {
      const line1 = hamburgerLines[0] as HTMLElement;
      const line2 = hamburgerLines[1] as HTMLElement;
      const line3 = hamburgerLines[2] as HTMLElement;

      if (isMobileMenuOpen) {
        line1.style.transform = 'rotate(45deg) translate(5px, 5px)';
        line2.style.opacity = '0';
        line3.style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        line1.style.transform = 'none';
        line2.style.opacity = '1';
        line3.style.transform = 'none';
      }
    }
  }, [isMobileMenuOpen]);

  // This component doesn't render anything - it only enhances existing HTML
  return null;
}

// Auto-initialize when DOM is ready (HMR-safe)
if (typeof window !== 'undefined' && !window.__navigationEnhanced) {
  window.__navigationEnhanced = true;

  const initializeNavigation = () => {
    import('react').then(React => {
      import('react-dom/client').then(ReactDOM => {
        // Check if container already exists to prevent duplicates
        let container = document.querySelector('#navigation-enhancement-container');
        if (!container) {
          container = document.createElement('div');
          container.id = 'navigation-enhancement-container';
          container.style.display = 'none';
          document.body.appendChild(container);
        }

        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(NavigationInteractive));
      });
    });
  };

  // Initialize when DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Delay to ensure static navigation is rendered
    setTimeout(initializeNavigation, 100);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initializeNavigation, 100);
    });
  }
}

// HMR cleanup
if (typeof module !== 'undefined' && module.hot) {
  module.hot.dispose(() => {
    if (typeof window !== 'undefined') {
      window.__navigationEnhanced = false;
      const container = document.querySelector('#navigation-enhancement-container');
      if (container) {
        container.remove();
      }
    }
  });
}

export { NavigationInteractive };
