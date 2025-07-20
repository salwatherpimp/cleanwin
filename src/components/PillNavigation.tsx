"use client";

import { useState } from "react";
import Image from "next/image";

export default function PillNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Fensterreinigung", href: "https://cleanwin.vercel.app/leistungen/fensterreinigung" },
    { name: "Büroreinigung", href: "https://cleanwin.vercel.app/leistungen/bueroreinigung" },
    { name: "Fassadenreinigung", href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung" },
    { name: "Umzugsreinigung", href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung" },
    { name: "Baureinigung", href: "https://cleanwin.vercel.app/leistungen/baureinigung" },
    { name: "Weitere Dienstleistungen", href: "https://cleanwin.vercel.app/leistungen/weitere-dienstleistungen" },
  ];

  return (
    <div className="pill-nav-wrapper">
      {/* Main pill navigation */}
      <nav className="pill-nav">
        {/* Desktop Layout */}
        <div className="pill-nav-desktop">
          {/* Logo */}
          <a href="https://cleanwin.vercel.app/" className="pill-nav-logo">
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752003683/cleanwin-logo_ysvfv0.png"
              alt="CleanWin Logo"
              width={120}
              height={34}
              priority
            />
          </a>

          {/* Navigation Items */}
          <div className="pill-nav-items">
            <div className="pill-nav-dropdown">
              <button className="pill-nav-link pill-nav-services">
                <span>🔗</span>
                <span>Leistungen</span>
                <span className="pill-nav-chevron">▼</span>
              </button>
              <div className="pill-nav-dropdown-menu">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="pill-nav-dropdown-item"
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

          {/* CTA Button */}
          <a href="#contact" className="pill-nav-cta">
            <span>🤝</span>
            <span>Kontaktiere uns</span>
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="pill-nav-mobile">
          {/* Logo */}
          <a href="https://cleanwin.vercel.app/" className="pill-nav-logo-mobile">
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752003683/cleanwin-logo_ysvfv0.png"
              alt="CleanWin Logo"
              width={100}
              height={28}
              priority
            />
          </a>

          {/* CTA Button Mobile */}
          <a href="#contact" className="pill-nav-cta-mobile">
            <span>🤝</span>
            <span>Kontakt</span>
          </a>

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
          <div className="pill-nav-mobile-menu-header">
            <span className="pill-nav-mobile-menu-title">Navigation</span>
            <button 
              className="pill-nav-mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          
          <div className="pill-nav-mobile-menu-services">
            <h3 className="pill-nav-mobile-menu-section-title">Dienstleistungen</h3>
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

          <div className="pill-nav-mobile-menu-pages">
            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              className="pill-nav-mobile-menu-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="https://cleanwin.vercel.app/referenzen"
              className="pill-nav-mobile-menu-item"
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
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          margin: 0 auto;
          max-width: 1200px;
        }

        .pill-nav-desktop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .pill-nav-mobile {
          display: none;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .pill-nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .pill-nav-logo:hover {
          transform: scale(1.05);
        }

        .pill-nav-items {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .pill-nav-dropdown {
          position: relative;
        }

        .pill-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 25px;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          background: none;
        }

        .pill-nav-link:hover {
          background: #f3f4f6;
          color: #10a0a4;
        }

        .pill-nav-services {
          font-weight: 500;
        }

        .pill-nav-chevron {
          font-size: 10px;
          transition: transform 0.2s ease;
        }

        .pill-nav-dropdown:hover .pill-nav-chevron {
          transform: rotate(180deg);
        }

        .pill-nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 8px;
          margin-top: 8px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease;
        }

        .pill-nav-dropdown:hover .pill-nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .pill-nav-dropdown-item {
          display: block;
          padding: 10px 14px;
          text-decoration: none;
          color: #374151;
          font-weight: 400;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .pill-nav-dropdown-item:hover {
          background: #f3f4f6;
          color: #10a0a4;
        }

        .pill-nav-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #84cc16;
          color: #1f2937;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(132, 204, 22, 0.3);
        }

        .pill-nav-cta:hover {
          background: #65a30d;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(132, 204, 22, 0.4);
        }

        .pill-nav-logo-mobile {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .pill-nav-cta-mobile {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #84cc16;
          color: #1f2937;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 12px;
          transition: all 0.2s ease;
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
        }

        .hamburger-line {
          width: 20px;
          height: 2px;
          background: #374151;
          margin: 2px 0;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .pill-nav-mobile-menu {
          position: fixed;
          top: 80px;
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
          padding: 20px;
        }

        .pill-nav-mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e5e7eb;
        }

        .pill-nav-mobile-menu-title {
          font-weight: 600;
          font-size: 16px;
          color: #1f2937;
        }

        .pill-nav-mobile-menu-close {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: #f3f4f6;
          color: #6b7280;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pill-nav-mobile-menu-close:hover {
          background: #e5e7eb;
          color: #374151;
        }

        .pill-nav-mobile-menu-section-title {
          font-weight: 600;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pill-nav-mobile-menu-services {
          margin-bottom: 16px;
        }

        .pill-nav-mobile-menu-item {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 14px;
          border-radius: 12px;
          margin-bottom: 4px;
          transition: all 0.2s ease;
          min-height: 44px;
          display: flex;
          align-items: center;
        }

        .pill-nav-mobile-menu-item:hover {
          background: #f3f4f6;
          color: #10a0a4;
        }

        .pill-nav-mobile-menu-separator {
          height: 1px;
          background: #e5e7eb;
          margin: 16px 0;
        }

        .pill-nav-mobile-menu-pages .pill-nav-mobile-menu-item {
          font-weight: 500;
        }

        @media (max-width: 1023px) {
          .pill-nav-desktop {
            display: none;
          }

          .pill-nav-mobile {
            display: flex;
          }

          .pill-nav {
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .pill-nav-wrapper {
            top: 12px;
            max-width: calc(100vw - 16px);
          }

          .pill-nav {
            padding: 6px 10px;
          }

          .pill-nav-cta-mobile span:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
