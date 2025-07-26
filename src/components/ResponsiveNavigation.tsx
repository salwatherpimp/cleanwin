"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ResponsiveNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container') && !event.target.closest('.dropdown-button')) {
        setIsCtaDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronDownIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
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
          padding: '8px 16px',
          margin: '0 auto',
          width: '100%',
          maxWidth: '1152px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'hidden',
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
            {/* Services Dropdown */}
            <div style={{ position: 'relative' }} className="dropdown-container">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="dropdown-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  padding: '10px 16px',
                  borderRadius: '25px',
                  transition: 'background-color 0.2s ease, color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.color = '#0DA6A6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#374151';
                }}
              >
                <span>Dienstleistungen</span>
                <ChevronDownIcon size={14} />
              </button>

              {/* Services Dropdown */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                padding: '8px',
                marginTop: '8px',
                minWidth: '220px',
                zIndex: 100,
                opacity: isServicesDropdownOpen ? 1 : 0,
                visibility: isServicesDropdownOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                pointerEvents: isServicesDropdownOpen ? 'auto' : 'none',
              }}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      textDecoration: 'none',
                      color: '#374151',
                      fontWeight: '500',
                      fontSize: '14px',
                      borderRadius: '8px',
                      transition: 'background-color 0.2s ease, color 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f3f4f6';
                      e.currentTarget.style.color = '#0DA6A6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#374151';
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="https://cleanwin.vercel.app/ueber-uns" style={{
              textDecoration: 'none',
              color: '#374151',
              fontWeight: '500',
              fontSize: '14px',
              padding: '10px 16px',
              borderRadius: '25px',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6';
              e.currentTarget.style.color = '#0DA6A6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#374151';
            }}>
              Über uns
            </a>

            <a href="https://cleanwin.vercel.app/referenzen" style={{
              textDecoration: 'none',
              color: '#374151',
              fontWeight: '500',
              fontSize: '14px',
              padding: '10px 16px',
              borderRadius: '25px',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6';
              e.currentTarget.style.color = '#0DA6A6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#374151';
            }}>
              Referenzen
            </a>
          </div>

          {/* CTA Button */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}>
            <button
              onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#0DA6A6',
                color: 'white',
                border: 'none',
                padding: '8px 14px',
                borderRadius: '20px',
                fontWeight: '500',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(13, 166, 166, 0.3)',
                height: '36px',
                minHeight: '36px',
              }}
              className="cta-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0b8d8d';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(13, 166, 166, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0DA6A6';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(13, 166, 166, 0.3)';
              }}
            >
              <HandIcon />
              <span>Kontaktiere uns</span>
              <ChevronDownIcon size={14} />
            </button>

            {/* CTA Dropdown */}
            <div style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              padding: '8px',
              marginTop: '8px',
              minWidth: '220px',
              zIndex: 100,
              opacity: isCtaDropdownOpen ? 1 : 0,
              visibility: isCtaDropdownOpen ? 'visible' : 'hidden',
              transition: 'opacity 0.2s ease, visibility 0.2s ease',
              pointerEvents: isCtaDropdownOpen ? 'auto' : 'none',
            }}>
              <a href="/kontakt" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500',
                fontSize: '14px',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
                e.currentTarget.style.color = '#0DA6A6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#374151';
              }}>
                <HandIcon />
                <span>Kontaktanfrage senden</span>
              </a>
              <a href="tel:+41525512424" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500',
                fontSize: '14px',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
                e.currentTarget.style.color = '#0DA6A6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#374151';
              }}>
                <PhoneIcon />
                <span>+41 52 551 24 24</span>
              </a>
            </div>
          </div>

          {/* Hamburger Menu - Visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
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
              transition: 'background-color 0.2s ease',
            }}
            className="hamburger-menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
            }}
          >
            <div style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#374151',
              marginBottom: '3px',
              transition: 'transform 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}></div>
            <div style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#374151',
              marginBottom: '3px',
              transition: 'opacity 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1,
            }}></div>
            <div style={{
              width: '18px',
              height: '2px',
              backgroundColor: '#374151',
              transition: 'transform 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
            }}></div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div style={{
        position: 'fixed',
        top: '90px',
        left: '0',
        right: '0',
        margin: '0 auto',
        width: 'calc(100vw - 32px)',
        maxWidth: '400px',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.2s ease, visibility 0.2s ease',
        zIndex: 1000,
        padding: '16px',
      }}>
        <div style={{ marginBottom: '12px' }}>
          <h3 style={{
            fontWeight: '700',
            fontSize: '18px',
            color: '#1f2937',
            marginBottom: '12px',
            marginTop: '0',
          }}>Leistungen</h3>
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#6b7280',
                fontWeight: '400',
                fontSize: '16px',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                minHeight: '44px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
                e.currentTarget.style.color = '#0DA6A6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#6b7280';
              }}
            >
              {service.name}
            </a>
          ))}
        </div>

        <div style={{
          height: '1px',
          background: '#d1d5db',
          margin: '12px 0',
        }}></div>

        <div>
          <a
            href="https://cleanwin.vercel.app/ueber-uns"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 0',
              textDecoration: 'none',
              color: '#1f2937',
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '8px',
              transition: 'color 0.2s ease',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0DA6A6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1f2937';
            }}
          >
            Über uns
          </a>
          <a
            href="https://cleanwin.vercel.app/referenzen"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 0',
              textDecoration: 'none',
              color: '#1f2937',
              fontWeight: '700',
              fontSize: '18px',
              transition: 'color 0.2s ease',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0DA6A6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1f2937';
            }}
          >
            Referenzen
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-menu {
            display: flex !important;
          }
          nav {
            padding: 8px 12px !important;
            height: 56px !important;
            min-height: 56px !important;
          }
        }
        @media (min-width: 1024px) {
          .desktop-menu {
            display: flex !important;
          }
          .hamburger-menu {
            display: none !important;
          }
          nav {
            padding: 8px 24px !important;
          }
        }
        @media (max-width: 480px) {
          nav {
            padding: 6px 10px !important;
            max-width: calc(100vw - 24px) !important;
          }
          .cta-button {
            padding: 6px 12px !important;
            font-size: 12px !important;
            height: 32px !important;
            min-height: 32px !important;
            gap: 4px !important;
          }
          .hamburger-menu {
            width: 28px !important;
            height: 28px !important;
            padding: 2px !important;
          }
        }
      `}</style>
    </>
  );
}
