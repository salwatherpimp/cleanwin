"use client";

import { useState } from "react";
import Image from "next/image";

export default function PillNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const services = [
    { name: "Fensterreinigung", href: "https://cleanwin.vercel.app/leistungen/fensterreinigung" },
    { name: "Unterhaltsreinigung", href: "https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" },
    { name: "Solarpanel reinigen", href: "https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" },
    { name: "Fassadenreinigung", href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung" },
    { name: "Umzugsreinigung", href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung" },
    { name: "Baureinigung", href: "https://cleanwin.vercel.app/leistungen/baureinigung" },
  ];

  // Hand SVG icon
  const HandIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

    // Phone SVG icon
  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

    // ChevronDown SVG icon
  const ChevronDownIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="pill-nav-wrapper">
      {/* Main pill navigation */}
      <nav className="pill-nav">
        {/* Desktop Layout */}
        <div className="pill-nav-desktop">
          {/* Logo */}
          <a href="https://cleanwin.vercel.app/" className="pill-nav-logo">
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
              alt="CleanWin Logo"
              width={160}
              height={45}
              priority
            />
          </a>

          {/* Navigation Items */}
          <div className="pill-nav-items">
                        <div className="pill-nav-dropdown-container">
              <button
                className="pill-nav-link pill-nav-services-button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                <span>Dienstleistungen</span>
                                <ChevronDownIcon size={14} />
              </button>
              <div
                className="pill-nav-services-dropdown"
                style={{
                  opacity: isServicesDropdownOpen ? 1 : 0,
                  visibility: isServicesDropdownOpen ? 'visible' : 'hidden',
                  transform: isServicesDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                }}
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="pill-nav-services-dropdown-item"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="https://cleanwin.vercel.app/ueber-uns" className="pill-nav-link">
              Über uns
            </a>
            
            <a href="https://cleanwin.vercel.app/referenzen" className="pill-nav-link">
              Referenzen
            </a>
          </div>

          {/* CTA Button with Dropdown */}
          <div className="pill-nav-cta-container">
            <button 
              className="pill-nav-cta"
              onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
            >
                            <HandIcon />
              <span>Kontaktiere uns</span>
                              <ChevronDownIcon size={14} />
            </button>
            <div
              className="pill-nav-cta-dropdown"
              style={{
                opacity: isCtaDropdownOpen ? 1 : 0,
                visibility: isCtaDropdownOpen ? 'visible' : 'hidden',
                transform: isCtaDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
              }}
            >
              <a href="#contact" className="pill-nav-cta-dropdown-item">
                <HandIcon />
                <span>Kontaktanfrage senden</span>
              </a>
              <a href="tel:+41525512424" className="pill-nav-cta-dropdown-item">
                <PhoneIcon />
                <span>+41 52 551 24 24</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="pill-nav-mobile">
          {/* Logo */}
          <a href="https://cleanwin.vercel.app/" className="pill-nav-logo-mobile">
                        <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
              alt="CleanWin Logo"
              width={110}
              height={30}
              priority
            />
          </a>

          {/* CTA Button Mobile */}
          <div
            className="pill-nav-cta-container-mobile relative"
            style={{
              height: "40px",
              minHeight: "40px",
            }}
          >
                        <button
              className="pill-nav-cta-mobile"
              onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
            >
                            <HandIcon />
              <span>Kontaktiere uns</span>
                              <ChevronDownIcon size={14} />
            </button>
            <div
              className={`pill-nav-cta-dropdown-mobile ${isCtaDropdownOpen ? 'open' : ''}`}
            >
              <a href="#contact" className="pill-nav-cta-dropdown-item">
                <HandIcon />
                <span>Kontaktanfrage senden</span>
              </a>
              <a href="tel:+41525512424" className="pill-nav-cta-dropdown-item">
                <PhoneIcon />
                <span>+41 52 551 24 24</span>
              </a>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button 
            className="pill-nav-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`pill-nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="pill-nav-mobile-menu-content">
          
          <div className="pill-nav-mobile-menu-services">
            <h3 className="pill-nav-mobile-menu-section-title">Leistungen</h3>
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="pill-nav-mobile-menu-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service.name}
              </a>
            ))}
          </div>

          <div className="pill-nav-mobile-menu-separator"></div>

                    <div className="pill-nav-mobile-menu-nav">
            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              className="pill-nav-mobile-menu-top-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="https://cleanwin.vercel.app/referenzen"
              className="pill-nav-mobile-menu-top-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referenzen
            </a>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        .pill-nav-wrapper {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: 100%;
          max-width: calc(100vw - 32px);
        }

        .pill-nav {
          background: white;
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 24px;
          margin: 0 auto;
          max-width: 1200px;
        }

        .pill-nav-desktop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

                        .pill-nav-mobile {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding-inline: 16px;
          min-height: 56px;
          gap: 8px;
        }

        .pill-nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .pill-nav-logo:hover {
          transform: scale(1.02);
        }

        .pill-nav-logo-mobile {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .pill-nav-items {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-left: 24px;
        }

        .pill-nav-link {
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 15px;
          padding: 8px 16px;
          border-radius: 25px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

                .pill-nav-link:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-dropdown-container {
          position: relative;
        }

        .pill-nav-services-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .pill-nav-services-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px;
          margin-top: 8px;
          min-width: 220px;
          z-index: 100;
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        .pill-nav-services-dropdown[style*="opacity: 1"] {
          pointer-events: auto;
        }

        .pill-nav-services-dropdown-item {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .pill-nav-services-dropdown-item:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-cta-container {
          position: relative;
        }

        .pill-nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0DA6A6;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(13, 166, 166, 0.3);
          white-space: nowrap;
        }

        .pill-nav-cta:hover {
          background: #0b8d8d;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(13, 166, 166, 0.4);
        }

        .pill-nav-cta-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px;
          margin-top: 8px;
          min-width: 220px;
          z-index: 100;
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        .pill-nav-cta-dropdown[style*="opacity: 1"] {
          pointer-events: auto;
        }

        .pill-nav-cta-dropdown-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .pill-nav-cta-dropdown-item:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-cta-container-mobile {
          position: relative;
          min-height: 40px;
          display: flex;
          align-items: center;
        }

                                                .pill-nav-cta-mobile {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #0DA6A6;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          min-height: 40px !important;
          height: 40px !important;
        }

        .pill-nav-cta-mobile:hover {
          background: #0b8d8d;
        }

        .pill-nav-cta-dropdown-mobile {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px;
          margin-top: 8px;
          min-width: 200px;
          z-index: 100;
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        .pill-nav-cta-dropdown-mobile[style*="opacity: 1"] {
          pointer-events: auto;
        }

                        .pill-nav-hamburger {
          display: flex;
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

        .pill-nav-hamburger:hover {
          background: #f3f4f6;
        }

                .hamburger-line {
          width: 20px;
          height: 2px;
          background: #374151;
          margin: 1.5px 0;
          transition: all 0.3s ease;
          transform-origin: center;
        }

                .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(4px, 4px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .pill-nav-mobile-menu {
          position: fixed;
          top: 90px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100vw - 32px);
          max-width: 400px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-20px);
          transition: all 0.3s ease;
        }

        .pill-nav-mobile-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

                                .pill-nav-mobile-menu-content {
          padding: 16px;
        }

        

                .pill-nav-mobile-menu-nav {
          margin-bottom: 0;
        }

                                .pill-nav-mobile-menu-section-title {
          font-weight: 700;
          font-size: 18px;
          color: #1f2937;
          margin-bottom: 12px;
          margin-top: 0;
          text-transform: none;
          letter-spacing: 0;
          padding-left: 0;
        }

                .pill-nav-mobile-menu-services {
          margin-bottom: 12px;
        }

        

                                .pill-nav-mobile-menu-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          text-decoration: none;
          color: #6b7280;
          font-weight: 400;
          font-size: 16px;
          border-radius: 0;
          margin-bottom: 0;
          transition: all 0.2s ease;
          min-height: 44px;
        }

                .pill-nav-mobile-menu-item:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-mobile-menu-top-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          text-decoration: none;
          color: #1f2937;
          font-weight: 700;
          font-size: 18px;
          border-radius: 0;
          margin-bottom: 8px;
          transition: all 0.2s ease;
          min-height: 44px;
        }

        .pill-nav-mobile-menu-top-item:hover {
          color: #0DA6A6;
        }

        .pill-nav-mobile-menu-top-item:last-child {
          margin-bottom: 0;
        }

        .pill-nav-mobile-menu-separator {
          height: 1px;
          background: #d1d5db;
          margin: 12px 0;
          border-top: 1px solid #d1d5db;
        }

        @media (max-width: 1023px) {
          .pill-nav-desktop {
            display: none;
          }

                    .pill-nav-mobile {
            display: flex;
          }

          .pill-nav {
            padding: 0;
          }
        }

        @media (max-width: 480px) {
          .pill-nav-wrapper {
            top: 12px;
            max-width: calc(100vw - 16px);
          }

                    .pill-nav {
            padding: 0;
          }

                    .pill-nav-cta-mobile {
            padding: 8px 14px;
            font-size: 13px;
            min-height: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
