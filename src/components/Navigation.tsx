import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const locations = [
  { slug: "winterthur", name: "Winterthur", icon: "📍" },
  { slug: "zurich", name: "Zürich", icon: "📍" },
  { slug: "basel", name: "Basel", icon: "📍" },
  { slug: "bern", name: "Bern", icon: "📍" },
  { slug: "lausanne", name: "Lausanne", icon: "📍" },
  { slug: "geneva", name: "Genf", icon: "📍" },
  { slug: "lucerne", name: "Luzern", icon: "📍" },
  { slug: "st-gallen", name: "St. Gallen", icon: "📍" },
  { slug: "lugano", name: "Lugano", icon: "📍" },
  { slug: "thun", name: "Thun", icon: "📍" },
  { slug: "aarau", name: "Aarau", icon: "📍" },
  { slug: "olten", name: "Olten", icon: "📍" },
  { slug: "uster", name: "Uster", icon: "📍" },
  { slug: "rapperswil", name: "Rapperswil-Jona", icon: "📍" },
  { slug: "zug", name: "Zug", icon: "📍" },
  { slug: "schaffhausen", name: "Schaffhausen", icon: "📍" },
  { slug: "chur", name: "Chur", icon: "📍" },
  { slug: "baden", name: "Baden", icon: "📍" },
  { slug: "dietikon", name: "Dietikon", icon: "📍" },
  { slug: "wetzikon", name: "Wetzikon", icon: "📍" },
];

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicking navigation links
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 10px 0px",
        left: "0px",
        paddingBottom: "16px",
        paddingTop: "16px",
        position: "fixed",
        right: "0px",
        top: "0px",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              height: "56px",
              maxWidth: "200px",
              position: "relative",
              width: "100%",
            }}
          >
            <Image
              src="https://cleanwin.ch/wp-content/uploads/2025/03/cropped-FINAL-FILE-CLEAN-WIN-NEW-VERSION.png"
              alt="CleanWin Logo"
              width={200}
              height={56}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontFamily: '"Work Sans", sans-serif',
          }}
          className="hidden md:flex"
        >
          {/* Services Dropdown */}
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgb(17, 24, 39)",
                fontWeight: "500",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                fontSize: "16px",
              }}
            >
              Standorte
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  marginLeft: "4px",
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  border: "1px solid #E5E7EB",
                  minWidth: "320px",
                  maxHeight: "400px",
                  overflowY: "auto",
                  zIndex: 1000,
                  marginTop: "8px",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/services/${location.slug}`}
                        onClick={handleLinkClick}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px 12px",
                          textDecoration: "none",
                          color: "#374151",
                          borderRadius: "6px",
                          transition: "all 0.2s ease",
                          fontSize: "14px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#F3F4F6";
                          e.currentTarget.style.color = "#E7027E";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#374151";
                        }}
                      >
                        <span style={{ marginRight: "8px", fontSize: "16px" }}>
                          {location.icon}
                        </span>
                        <span style={{ fontSize: "13px" }}>
                          {location.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/ueber-uns"
            style={{
              color: "rgb(17, 24, 39)",
              fontWeight: "500",
              textDecoration: "none",
              padding: "8px 0",
            }}
          >
            Über uns
          </Link>

          <Link
            href="/referenzen"
            style={{
              color: "rgb(17, 24, 39)",
              fontWeight: "500",
              textDecoration: "none",
              padding: "8px 0",
            }}
          >
            Referenzen
          </Link>

          <a
            href="tel:+41762288071"
            style={{
              backgroundColor: "rgb(6, 147, 166)",
              borderRadius: "8px",
              color: "rgb(255, 255, 255)",
              fontWeight: "600",
              paddingBottom: "8px",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "8px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0891B2";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(6, 147, 166)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Kontaktiere uns
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #E5E7EB",
            padding: "16px",
            fontFamily: '"Work Sans", sans-serif',
          }}
          className="md:hidden"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div style={{ marginBottom: "8px" }}>
              <span
                style={{
                  color: "#E7027E",
                  fontWeight: "600",
                  fontSize: "14px",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                📍 Unsere Standorte:
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4px",
                  paddingLeft: "8px",
                }}
              >
                {locations.slice(0, 8).map((location) => (
                  <Link
                    key={location.slug}
                    href={`/services/${location.slug}`}
                    style={{
                      color: "#374151",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "4px 0",
                    }}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/ueber-uns"
              style={{
                color: "rgb(17, 24, 39)",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              Über uns
            </Link>

            <Link
              href="/referenzen"
              style={{
                color: "rgb(17, 24, 39)",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              Referenzen
            </Link>

            <a
              href="tel:+41762288071"
              style={{
                backgroundColor: "rgb(6, 147, 166)",
                borderRadius: "8px",
                color: "rgb(255, 255, 255)",
                fontWeight: "600",
                padding: "12px 16px",
                textDecoration: "none",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Kontaktiere uns
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .md\\:flex {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
