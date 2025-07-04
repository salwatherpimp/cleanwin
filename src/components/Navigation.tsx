import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const services = [
  { slug: "buero-reinigung", name: "Büro-Reinigung", icon: "🏢" },
  { slug: "wohnungsreinigung", name: "Wohnungsreinigung", icon: "🏠" },
  { slug: "fensterreinigung", name: "Fensterreinigung", icon: "🪟" },
  { slug: "teppichreinigung", name: "Teppichreinigung", icon: "🧽" },
  { slug: "polsterreinigung", name: "Polsterreinigung", icon: "🛋️" },
  { slug: "baureinigung", name: "Baureinigung", icon: "🏗️" },
  { slug: "praxisreinigung", name: "Praxisreinigung", icon: "🏥" },
  { slug: "hotelreinigung", name: "Hotelreinigung", icon: "🏨" },
  { slug: "ladenreinigung", name: "Ladenreinigung", icon: "🏪" },
  { slug: "industriereinigung", name: "Industriereinigung", icon: "🏭" },
  { slug: "treppenhausreinigung", name: "Treppenhausreinigung", icon: "🪜" },
  {
    slug: "wintergarten-reinigung",
    name: "Wintergarten-Reinigung",
    icon: "🌿",
  },
  { slug: "garage-reinigung", name: "Garage-Reinigung", icon: "🚗" },
  { slug: "keller-reinigung", name: "Keller-Reinigung", icon: "🏠" },
  { slug: "dachboden-reinigung", name: "Dachboden-Reinigung", icon: "🏠" },
  { slug: "balkon-reinigung", name: "Balkon-Reinigung", icon: "🌺" },
  { slug: "garten-reinigung", name: "Garten-Reinigung", icon: "🌱" },
  { slug: "pool-reinigung", name: "Pool-Reinigung", icon: "🏊" },
  { slug: "solar-reinigung", name: "Solar-Reinigung", icon: "☀️" },
  { slug: "graffiti-entfernung", name: "Graffiti-Entfernung", icon: "🎨" },
];

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [router.asPath]);

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
            <img
              src="https://cleanwin.ch/wp-content/uploads/2025/03/cropped-FINAL-FILE-CLEAN-WIN-NEW-VERSION.png"
              alt="CleanWin Logo"
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
              Leistungen
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
                  <Link
                    href="/services"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      textDecoration: "none",
                      color: "#E7027E",
                      fontWeight: "600",
                      fontSize: "16px",
                      borderBottom: "1px solid #E5E7EB",
                      marginBottom: "8px",
                    }}
                  >
                    📋 Alle Leistungen anzeigen
                  </Link>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
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
                          {service.icon}
                        </span>
                        <span style={{ fontSize: "13px" }}>{service.name}</span>
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
            <Link
              href="/services"
              style={{
                color: "#E7027E",
                fontWeight: "600",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              📋 Alle Leistungen
            </Link>

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
