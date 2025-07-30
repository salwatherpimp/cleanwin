// Interactive Navigation Enhancement - Pure JavaScript for browser loading
(function() {
  'use strict';

  let isMobileMenuOpen = false;
  let isCtaDropdownOpen = false;
  let isMobile = false;

  // Detect mobile
  function checkMobile() {
    isMobile = window.innerWidth <= 1023;
  }

  // Services data
  const services = [
    { name: "Fensterreinigung", href: "https://cleanwin.vercel.app/leistungen/fensterreinigung" },
    { name: "Unterhaltsreinigung", href: "https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" },
    { name: "Solarpanel reinigen", href: "https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" },
    { name: "Fassadenreinigung", href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung" },
    { name: "Umzugsreinigung", href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung" },
    { name: "Baureinigung", href: "https://cleanwin.vercel.app/leistungen/baureinigung" },
  ];

  // Handle hamburger click
  function handleHamburgerClick(e) {
    e.stopPropagation();
    isMobileMenuOpen = !isMobileMenuOpen;
    updateMobileMenu();
    updateHamburgerAnimation();
  }

  // Handle CTA button click
  function handleCtaClick(e) {
    if (!isMobile) {
      e.preventDefault();
      e.stopPropagation();
      isCtaDropdownOpen = !isCtaDropdownOpen;
      updateCtaDropdown();
    }
  }

  // Handle outside clicks
  function handleClickOutside(event) {
    const clickedElement = event.target;
    if (!clickedElement) return;

    const isInsideNav = clickedElement.closest('nav') ||
                        clickedElement.closest('.mobile-menu-container') ||
                        clickedElement.closest('.cta-dropdown');

    if (!isInsideNav) {
      isMobileMenuOpen = false;
      isCtaDropdownOpen = false;
      updateMobileMenu();
      updateCtaDropdown();
      updateHamburgerAnimation();
    }
  }

  // Update mobile menu visibility
  function updateMobileMenu() {
    let mobileMenuContainer = document.querySelector('.mobile-menu-container');
    
    if (isMobileMenuOpen && !mobileMenuContainer) {
      // Create mobile menu
      mobileMenuContainer = document.createElement('div');
      mobileMenuContainer.className = 'mobile-menu-container';
      mobileMenuContainer.style.cssText = `
        position: fixed;
        top: 80px;
        left: 16px;
        right: 16px;
        margin: 0 auto;
        width: auto;
        max-width: 400px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 9999;
        padding: 20px;
        transition: all 0.3s ease;
      `;
      
      mobileMenuContainer.innerHTML = `
        <div style="margin-bottom: 12px;">
          <h3 style="font-weight: 700; font-size: 18px; color: #1f2937; margin-bottom: 12px; margin-top: 0; font-family: inherit;">Leistungen</h3>
          ${services.map(service => `
            <a href="${service.href}" onclick="closeMobileMenu()" style="display: flex; align-items: center; padding: 12px 16px; text-decoration: none; color: #6b7280; font-weight: 400; font-size: 16px; transition: background-color 0.2s ease, color 0.2s ease; min-height: 44px; font-family: inherit;" onmouseover="this.style.background='#f3f4f6'; this.style.color='#0DA6A6';" onmouseout="this.style.background='transparent'; this.style.color='#6b7280';">
              ${service.name}
            </a>
          `).join('')}
        </div>
        <div style="height: 1px; background: #d1d5db; margin: 12px 0;"></div>
        <div>
          <a href="https://cleanwin.vercel.app/ueber-uns" onclick="closeMobileMenu()" style="display: flex; align-items: center; padding: 12px 0; text-decoration: none; color: #1f2937; font-weight: 700; font-size: 18px; margin-bottom: 8px; transition: color 0.2s ease; min-height: 44px; font-family: inherit;" onmouseover="this.style.color='#0DA6A6';" onmouseout="this.style.color='#1f2937';">
            Über uns
          </a>
          <a href="https://cleanwin.vercel.app/referenzen" onclick="closeMobileMenu()" style="display: flex; align-items: center; padding: 12px 0; text-decoration: none; color: #1f2937; font-weight: 700; font-size: 18px; transition: color 0.2s ease; min-height: 44px; font-family: inherit;" onmouseover="this.style.color='#0DA6A6';" onmouseout="this.style.color='#1f2937';">
            Referenzen
          </a>
        </div>
      `;
      
      document.body.appendChild(mobileMenuContainer);
    }

    if (mobileMenuContainer) {
      mobileMenuContainer.style.display = isMobileMenuOpen ? 'block' : 'none';
      mobileMenuContainer.style.opacity = isMobileMenuOpen ? '1' : '0';
      mobileMenuContainer.style.visibility = isMobileMenuOpen ? 'visible' : 'hidden';
      mobileMenuContainer.style.transform = isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)';
    }
  }

  // Update CTA dropdown
  function updateCtaDropdown() {
    const ctaButton = document.querySelector('.cta-button');
    if (!ctaButton || isMobile) return;

    let ctaDropdown = document.querySelector('.cta-dropdown');
    
    if (isCtaDropdownOpen && !ctaDropdown) {
      // Create CTA dropdown
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
      `;
      
      ctaDropdown.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <a href="tel:+41762951831" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; border: 1px solid #e5e7eb; font-family: inherit;" onmouseover="this.style.background='#f9fafb';" onmouseout="this.style.background='transparent';">
            <div style="width: 40px; height: 40px; background: #0DA6A6; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div style="font-weight: 600; font-size: 14px; margin-bottom: 2px; font-family: inherit;">Jetzt anrufen</div>
              <div style="font-size: 13px; color: #6b7280; font-family: inherit;">+41 76 295 18 31</div>
            </div>
          </a>
          <a href="/kontakt" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; text-decoration: none; color: #374151; transition: background-color 0.2s ease; border: 1px solid #e5e7eb; font-family: inherit;" onmouseover="this.style.background='#f9fafb';" onmouseout="this.style.background='transparent';">
            <div style="width: 40px; height: 40px; background: #0DA6A6; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div style="font-weight: 600; font-size: 14px; margin-bottom: 2px; font-family: inherit;">Kontakt Formular</div>
              <div style="font-size: 13px; color: #6b7280; font-family: inherit;">Unverbindlich anfragen</div>
            </div>
          </a>
        </div>
      `;
      
      // Position relative to CTA button
      ctaButton.parentElement.style.position = 'relative';
      ctaButton.parentElement.appendChild(ctaDropdown);
    }

    if (ctaDropdown) {
      ctaDropdown.style.display = isCtaDropdownOpen ? 'block' : 'none';
    }
  }

  // Update hamburger animation
  function updateHamburgerAnimation() {
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    if (hamburgerLines.length >= 3) {
      const line1 = hamburgerLines[0];
      const line2 = hamburgerLines[1];
      const line3 = hamburgerLines[2];

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
  }

  // Global function to close mobile menu
  window.closeMobileMenu = function() {
    isMobileMenuOpen = false;
    updateMobileMenu();
    updateHamburgerAnimation();
  };

  // Initialize when DOM is ready
  function initialize() {
    checkMobile();

    // Add event listeners
    const hamburger = document.querySelector('.hamburger');
    const ctaButton = document.querySelector('.cta-button');

    if (hamburger) {
      hamburger.addEventListener('click', handleHamburgerClick);
    }

    if (ctaButton) {
      ctaButton.addEventListener('click', handleCtaClick);
    }

    // Handle outside clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Handle resize
    window.addEventListener('resize', function() {
      checkMobile();
      if (!isMobile) {
        isMobileMenuOpen = false;
        updateMobileMenu();
        updateHamburgerAnimation();
      }
    });

    console.log('Navigation interactive features loaded');
  }

  // Initialize immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

})();
