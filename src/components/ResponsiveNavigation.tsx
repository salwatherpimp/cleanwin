"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResponsiveNavigation() {
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

  const HandIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronDownIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div style={{
      position: 'fixed',
      top: '16px',
      left: '0',
      right: '0',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 'calc(100vw - 32px)',
      margin: '0 auto',
      padding: '0 16px',
    }}>
      <nav style={{
        background: 'white',
        borderRadius: '50px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        height: '56px',
        minHeight: '56px',
        padding: '8px 24px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '1152px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        
        {/* Logo */}
        <a href="https://cleanwin.vercel.app/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <Image
            src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
            alt="CleanWin Logo"
            width={110}
            height={30}
            priority
            style={{ width: 'auto', height: '30px' }}
          />
        </a>

        {/* Desktop Menu - Hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          marginLeft: '24px',
        }} className="desktop-menu">
          <button>Dienstleistungen</button>
          <a href="/ueber-uns">Über uns</a>
          <a href="/referenzen">Referenzen</a>
        </div>

        {/* CTA Button */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#0DA6A6',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '24px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            height: '40px',
          }}>
            <HandIcon />
            <span>Kontaktiere uns</span>
            <ChevronDownIcon size={14} />
          </button>
        </div>

        {/* Hamburger Menu - Visible on mobile */}
        <button style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          flexShrink: 0,
          borderRadius: '16px',
        }} className="hamburger-menu">
          <div style={{
            width: '18px',
            height: '2px',
            backgroundColor: '#374151',
            marginBottom: '3px',
          }}></div>
          <div style={{
            width: '18px',
            height: '2px',
            backgroundColor: '#374151',
            marginBottom: '3px',
          }}></div>
          <div style={{
            width: '18px',
            height: '2px',
            backgroundColor: '#374151',
          }}></div>
        </button>

        <style jsx>{`
          @media (max-width: 1023px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger-menu {
              display: flex !important;
            }
          }
          @media (min-width: 1024px) {
            .desktop-menu {
              display: flex !important;
            }
            .hamburger-menu {
              display: none !important;
            }
          }
        `}</style>
      </nav>
    </div>
  );
}
