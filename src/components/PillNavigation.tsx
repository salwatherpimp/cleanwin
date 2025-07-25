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
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      contain: "layout style",
      containIntrinsicSize: "1152px 56px",
    }}>
      {/* Main pill navigation */}
      <nav style={{
        background: "white",
        borderRadius: "50px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        height: "56px",
        minHeight: "56px",
        padding: "8px 24px",
        margin: "0 auto",
        width: "100%",
        maxWidth: "1152px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        contain: "layout style",
        containIntrinsicSize: "1152px 56px",
      }}>
        {/* Desktop Layout */}
        <div className="pill-nav-desktop">
          {/* Logo */}
          <a href="https://cleanwin.vercel.app/" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "transform 0.2s ease",
            flexShrink: 0,
          }}>
            <Image
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
              alt="CleanWin Logo"
              width={160}
              height={45}
              priority
            />
          </a>

          {/* Navigation Items */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginLeft: "24px",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "1.4",
                  color: "#374151",
                  padding: "10px 16px",
                  borderRadius: "25px",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                  margin: "0",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.color = "#0DA6A6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "#374151";
                }}
              >
                <span>Dienstleistungen</span>
                                <ChevronDownIcon size={14} />
              </button>
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  padding: "8px",
                  marginTop: "8px",
                  minWidth: "220px",
                  zIndex: 100,
                  opacity: isServicesDropdownOpen ? 1 : 0,
                  visibility: isServicesDropdownOpen ? "visible" : "hidden",
                  transition: "opacity 0.2s ease, visibility 0.2s ease",
                  pointerEvents: isServicesDropdownOpen ? "auto" : "none",
                  contain: "layout style",
                  containIntrinsicSize: "220px 250px",
                }}
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "#374151",
                      fontWeight: "500",
                      fontSize: "14px",
                      borderRadius: "8px",
                      transition: "background-color 0.2s ease, color 0.2s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f3f4f6";
                      e.currentTarget.style.color = "#0DA6A6";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#374151";
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="https://cleanwin.vercel.app/ueber-uns" style={{
              textDecoration: "none",
              color: "#374151",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "1.4",
              padding: "10px 16px",
              borderRadius: "25px",
              transition: "background-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              margin: "0",
              verticalAlign: "middle",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f3f4f6";
              e.currentTarget.style.color = "#0DA6A6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#374151";
            }}>
              Über uns
            </a>

            <a href="https://cleanwin.vercel.app/referenzen" style={{
              textDecoration: "none",
              color: "#374151",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "1.4",
              padding: "10px 16px",
              borderRadius: "25px",
              transition: "background-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              margin: "0",
              verticalAlign: "middle",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f3f4f6";
              e.currentTarget.style.color = "#0DA6A6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#374151";
            }}>
              Referenzen
            </a>
          </div>

          {/* CTA Button with Dropdown */}
          <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}>
            <button
              onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#0DA6A6",
                color: "white",
                border: "none",
                padding: "10px 24px",
                borderRadius: "25px",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "1.4",
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 2px 8px rgba(13, 166, 166, 0.3)",
                whiteSpace: "nowrap",
                width: "auto",
                height: "auto",
                minHeight: "48px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0b8d8d";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(13, 166, 166, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0DA6A6";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(13, 166, 166, 0.3)";
              }}
            >
                            <HandIcon />
              <span>Kontaktiere uns</span>
                              <ChevronDownIcon size={14} />
            </button>
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "8px",
                marginTop: "8px",
                minWidth: "220px",
                zIndex: 100,
                opacity: isCtaDropdownOpen ? 1 : 0,
                visibility: isCtaDropdownOpen ? "visible" : "hidden",
                transition: "opacity 0.2s ease, visibility 0.2s ease",
                pointerEvents: isCtaDropdownOpen ? "auto" : "none",
                contain: "layout style",
                containIntrinsicSize: "220px 120px",
              }}
            >
              <a href="/kontakt" style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                textDecoration: "none",
                color: "#374151",
                fontWeight: "500",
                fontSize: "14px",
                borderRadius: "8px",
                transition: "background-color 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
                e.currentTarget.style.color = "#0DA6A6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#374151";
              }}>
                <HandIcon />
                <span>Kontaktanfrage senden</span>
              </a>
              <a href="tel:+41525512424" style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                textDecoration: "none",
                color: "#374151",
                fontWeight: "500",
                fontSize: "14px",
                borderRadius: "8px",
                transition: "background-color 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
                e.currentTarget.style.color = "#0DA6A6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#374151";
              }}>
                <PhoneIcon />
                <span>+41 52 551 24 24</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div data-nav="mobile" style={{
          display: "none",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "8px",
          height: "56px",
          minHeight: "56px",
          gap: "8px",
          width: "100%",
          boxSizing: "border-box",
          contain: "layout style",
          containIntrinsicSize: "100% 56px",
        }}>
          {/* Logo */}
          <a href="https://cleanwin.vercel.app/" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}>
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
            style={{
              position: "relative",
              height: "56px",
              minHeight: "56px",
              maxHeight: "56px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              contain: "layout style",
              containIntrinsicSize: "180px 56px",
            }}
          >
            <button
              onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: "#0DA6A6",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "18px",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                whiteSpace: "nowrap",
                minHeight: "36px",
                height: "36px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0b8d8d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0DA6A6";
              }}
            >
                            <HandIcon />
              <span>Kontaktiere uns</span>
                              <ChevronDownIcon size={14} />
            </button>
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "8px",
                marginTop: "8px",
                minWidth: "200px",
                zIndex: 100,
                opacity: isCtaDropdownOpen ? 1 : 0,
                visibility: isCtaDropdownOpen ? "visible" : "hidden",
                transition: "opacity 0.2s ease, visibility 0.2s ease",
                pointerEvents: isCtaDropdownOpen ? "auto" : "none",
                contain: "layout style",
                containIntrinsicSize: "200px 120px",
              }}
            >
              <a
                href="/kontakt"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  textDecoration: "none",
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "14px",
                  borderRadius: "8px",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.color = "#0DA6A6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#374151";
                }}
              >
                <HandIcon />
                <span>Kontaktanfrage senden</span>
              </a>
              <a
                href="tel:+41525512424"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  textDecoration: "none",
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "14px",
                  borderRadius: "8px",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.color = "#0DA6A6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#374151";
                }}
              >
                <PhoneIcon />
                <span>+41 52 551 24 24</span>
              </a>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "28px",
              height: "28px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              flexShrink: 0,
              borderRadius: "14px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f3f4f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
            }}
          >
            <span style={{
              width: "16px",
              height: "2px",
              background: "#374151",
              margin: "1px 0",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transformOrigin: "center",
              transform: isMobileMenuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}></span>
            <span style={{
              width: "16px",
              height: "2px",
              background: "#374151",
              margin: "1px 0",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transformOrigin: "center",
              opacity: isMobileMenuOpen ? 0 : 1,
            }}></span>
            <span style={{
              width: "16px",
              height: "2px",
              background: "#374151",
              margin: "1px 0",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transformOrigin: "center",
              transform: isMobileMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div style={{
        position: "fixed",
        top: "90px",
        left: "0",
        right: "0",
        margin: "0 auto",
        width: "calc(100vw - 32px)",
        maxWidth: "400px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? "visible" : "hidden",
        transition: "opacity 0.2s ease, visibility 0.2s ease",
        contain: "layout style",
        containIntrinsicSize: "400px 350px",
        zIndex: 1000,
      }}>
        <div style={{
          padding: "16px",
        }}>
          
          <div style={{
            marginBottom: "12px",
          }}>
            <h3 style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "#1f2937",
              marginBottom: "12px",
              marginTop: "0",
              textTransform: "none",
              letterSpacing: "0",
              paddingLeft: "0",
            }}>Leistungen</h3>
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 16px",
                  textDecoration: "none",
                  color: "#6b7280",
                  fontWeight: "400",
                  fontSize: "16px",
                  borderRadius: "0",
                  marginBottom: "0",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.color = "#0DA6A6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6b7280";
                }}
              >
                {service.name}
              </a>
            ))}
          </div>

          <div style={{
            height: "1px",
            background: "#d1d5db",
            margin: "12px 0",
            borderTop: "1px solid #d1d5db",
          }}></div>

          <div style={{
            marginBottom: "0",
          }}>
            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 0",
                textDecoration: "none",
                color: "#1f2937",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "0",
                marginBottom: "8px",
                transition: "color 0.2s ease",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0DA6A6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1f2937";
              }}
            >
              Über uns
            </a>
            <a
              href="https://cleanwin.vercel.app/referenzen"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 0",
                textDecoration: "none",
                color: "#1f2937",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "0",
                marginBottom: "0",
                transition: "color 0.2s ease",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0DA6A6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1f2937";
              }}
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
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: calc(100vw - 32px);
          margin: 0 auto;
        }

        .pill-nav {
          background: white;
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: 56px !important;
          min-height: 56px !important;
          padding: 8px 24px !important;
          margin: 0 auto;
          max-width: 1200px;
          box-sizing: border-box !important;
          display: flex;
          align-items: center;
        }

        .pill-nav-desktop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          width: 100%;
        }

                        .pill-nav-mobile {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding-inline: 16px;
          height: 56px !important;
          min-height: 56px !important;
          gap: 8px;
          box-sizing: border-box !important;
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
          font-size: 14px;
          line-height: 1.4;
          padding: 10px 16px;
          border-radius: 25px;
          transition: background-color 0.2s ease, color 0.2s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          margin: 0;
          vertical-align: middle;
          box-sizing: border-box;
        }

                .pill-nav-link:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-services-button:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-dropdown-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .pill-nav-services-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          color: #374151;
          padding: 10px 16px;
          border-radius: 25px;
          transition: background-color 0.2s ease, color 0.2s ease;
          white-space: nowrap;
          margin: 0;
          vertical-align: middle;
          box-sizing: border-box;
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
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          pointer-events: none;
          contain: layout style;
          contain-intrinsic-size: 220px 250px;
        }

        .pill-nav-services-dropdown.open {
          opacity: 1;
          visibility: visible;
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
          transition: background-color 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }

        .pill-nav-services-dropdown-item:hover {
          background: #f3f4f6;
          color: #0DA6A6;
        }

        .pill-nav-cta-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .pill-nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0DA6A6;
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 25px;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.4;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 8px rgba(13, 166, 166, 0.3);
          white-space: nowrap;
        }

        .pill-nav-cta:hover {
          background: #0b8d8d;
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
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          pointer-events: none;
          contain: layout style;
          contain-intrinsic-size: 220px 120px;
        }

        .pill-nav-cta-dropdown.open {
          opacity: 1;
          visibility: visible;
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
          transition: background-color 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }

        .pill-nav-cta-dropdown-item:hover {
          background: #f3f4f6;
          color: #0DA6A6;
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
          transition: transform 0.3s ease, opacity 0.3s ease;
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
          left: 0;
          right: 0;
          margin: 0 auto;
          width: calc(100vw - 32px);
          max-width: 400px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          contain: layout style;
          contain-intrinsic-size: 400px 350px;
        }

        .pill-nav-mobile-menu.open {
          opacity: 1;
          visibility: visible;
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
          transition: background-color 0.2s ease, color 0.2s ease;
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
          transition: color 0.2s ease;
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

          .pill-nav-wrapper {
            margin: 0 16px;
            max-width: calc(100vw - 32px);
          }

          .pill-nav {
            height: 56px !important;
            min-height: 56px !important;
            padding: 0 16px !important;
            box-sizing: border-box !important;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .pill-nav-wrapper {
            top: 12px;
            margin: 0 16px;
            max-width: calc(100vw - 32px);
          }

          .pill-nav {
            height: 56px !important;
            min-height: 56px !important;
            padding: 0 12px !important;
            box-sizing: border-box !important;
            margin: 0 auto;
          }

          .pill-nav-cta-mobile {
            padding: 8px 14px;
            font-size: 13px;
            min-height: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
