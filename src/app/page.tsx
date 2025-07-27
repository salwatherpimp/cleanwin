"use client";

import Image from "next/image";
import ResponsiveNavigation from "../components/ResponsiveNavigation";
import PureHeroSection from "../components/PureHeroSection";
import CustomerReviews from "../components/CustomerReviews";
import InteractiveValueCards from "../components/InteractiveValueCards";
import ClientLogos from "../components/ClientLogos";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function CleanWinPage() {
  return (
    <div className="main-page-container">
      {/* Responsive Navigation */}
      <ResponsiveNavigation />

      {/* Hero Section - Pure HTML, No styled-jsx, Responsive Images */}
      <PureHeroSection />

      {/* Benefits Section */}
      <section
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          padding: "24px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            className="grid-mobile-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* Pricing Card */}
            <div
className="usp-card"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Reinigung ab CHF 199.-
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Transparente Preise
                </div>
              </div>
            </div>

            {/* Consultation Card */}
            <div
className="usp-card"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Kostenlose Fachberatung
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Unverbindlich & persönlich
                </div>
              </div>
            </div>

            {/* Legitimacy Card */}
            <div
className="usp-card"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  100% keine Schwarzarbeit
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Seriös & versichert
                </div>
              </div>
            </div>

            {/* Duplicate cards for seamless loop (mobile only) */}
            {/* Duplicate Pricing Card */}
            <div
className="usp-card usp-duplicate"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Reinigung ab CHF 199.-
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Transparente Preise
                </div>
              </div>
            </div>

            {/* Duplicate Consultation Card */}
            <div
className="usp-card usp-duplicate"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Kostenlose Fachberatung
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Unverbindlich & persönlich
                </div>
              </div>
            </div>

            {/* Duplicate Legitimacy Card */}
            <div
className="usp-card usp-duplicate"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  100% keine Schwarzarbeit
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Seriös & versichert
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundColor: "#f9fafb",
          padding: "24px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            className="grid-mobile-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Text Content */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 28px)",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "clamp(16px, 3vw, 24px)",
                  marginTop: "clamp(16px, 3vw, 23.24px)",
                  lineHeight: "1.2",
                }}
              >
                Über 10 Jahre Reinigungserfahrung in Winterthur und Umgebung
              </h2>
              <p
                style={{
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  color: "#6b7280",
                  lineHeight: "clamp(22px, 4vw, 28px)",
                  marginBottom: "clamp(16px, 3vw, 24px)",
                  marginTop: "clamp(12px, 2vw, 16px)",
                }}
              >
                Seit über zehn Jahren steht Cleanwin für gründliche, faire und nachhaltige Reinigungsdienstleistungen im Grossraum Winterthur. Ob Fensterreinigung, Fassadenpflege oder Umzugsreinigung - wir bringen Erfahrung, Sorgfalt und Menschlichkeit zusammen. Unsere kostenlose Vor-Ort-Beratung bietet Ihnen maximale Transparenz. Dahinter steht ein geschultes, fair entlöhntes Team, das sich mit Engagement und Fachwissen für beste Ergebnisse einsetzt.
              </p>
              <a
                href="#services"
                className="about-cta-button"
                style={{
                  display: "inline-block",
                  backgroundColor: "#0DA6A6",
                  color: "white",
                  padding: "12px 32px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(13, 166, 166, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                Leistungen Entdecken
              </a>
            </div>

            {/* Image Gallery */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                width: "100%",
              }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FFirmenwagen_vor_Geba%25CC%2588ude_zz0m0s.avif&w=750&q=75"
                  alt="Cleaning Service"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FGlasreinigung_aussen_Flaach_ec1fre.avif&w=750&q=75"
                  alt="Office Cleaning"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752005906%2Fhomepage-herosection_fsxqwc.avif&w=750&q=75"
                  alt="Professional Cleaning"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FFassadenreinigung_Sichtbeton_vm1lsq.avif&w=750&q=75"
                  alt="Home Cleaning"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Services Section */}
      <section
        id="services"
        style={{
          backgroundColor: "#ffffff",
          padding: "24px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Section Title */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 28px)",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "clamp(16px, 3vw, 24px)",
                marginTop: "clamp(16px, 3vw, 23.24px)",
                textAlign: "center",
                lineHeight: "1.2",
              }}
            >
              Unsere Leistungen
            </h2>
          </div>

          {/* Services Grid */}
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              maxWidth: "100%",
            }}
          >
            {/* Fensterreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/fensterreinigung"
className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "168px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_Close-up_of_a_hand_cleaning_a_glass_window_with_a_s_9d456c2b-edad-45fb-ad0d-a857626340ec_3_q2fskk.avif"
                  alt="Fensterreinigung"
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 199.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Fensterreinigung
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Unterhaltsreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/unterhaltsreinigung"
className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "168px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_a_professional_cleaning_person_wiping_an_office_des_ae82c6ac-ddf5-48e9-93d5-9ee8d062167c_3_xzzqja.avif"
                  alt="Unterhaltsreinigung"
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 199.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Unterhaltsreinigung
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Fassadenreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/fassadenreinigung"
className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "168px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_Man_cleaning_an_industrial_building_facade_using_a__d7268cb3-350e-4883-b1a3-b28fe5ab29bd_0_gfir2j.avif"
                  alt="Fassadenreinigung"
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 699.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Fassadenreinigung
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Umzugsreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/umzugsreinigung"
className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "168px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_A_stack_of_cardboard_moving_boxes_with_blankets_and_aca55475-72f5-47ce-bd35-23f8455eeeb3_1_xumd8v.avif"
                  alt="Umzugsreinigung"
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 499.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Umzugsreinigung
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Baureinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/baureinigung"
className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "168px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_A_construction_worker_in_work_boots_and_jeans_clean_8a86ab98-84bb-4372-a0bf-a47a89c60230_1_lnfpsa.avif"
                  alt="Baureinigung"
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 499.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Baureinigung
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Solarpanel reinigen */}
            <a
              href="https://cleanwin.vercel.app/leistungen/solarpanel-reinigen"
className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "168px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_A_close-up_of_a_person_cleaning_a_solar_panel_under_0b5462d2-2c74-452a-bf63-cf91c008a0dc_1_alcwld.avif"
                  alt="Solarpanel reinigen"
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 399.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Solarpanel reinigen
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

      </section>
      
      {/* Why Choose CleanWin Section */}
      <InteractiveValueCards />

      {/* Customer Reviews Carousel Section */}
      <CustomerReviews />

      {/* Call-to-Action Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Non-critical styles loaded after initial render */}
      <style jsx>{`
        /* Services hover effects */
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        /* Non-critical mobile specific styles */
        @media (max-width: 767px) {
          .grid-mobile-3 .usp-card {
            min-width: 280px !important;
            flex-shrink: 0 !important;
            animation: usp-mobile-scroll 32s linear infinite !important;
          }

          .grid-mobile-logos {
            display: flex !important;
            overflow: hidden !important;
            gap: 32px !important;
            width: 100% !important;
          }

          .grid-mobile-logos > div {
            flex-shrink: 0 !important;
            animation: scroll-logos 50s linear infinite !important;
          }

          .logo-container-mobile {
            width: 80px !important;
            height: 40px !important;
          }
        }

        /* Hide duplicate USP cards on desktop */
        @media (min-width: 768px) {
          .usp-duplicate {
            display: none !important;
          }
        }

        /* USP Mobile Auto-Scroll Animation - Seamless Loop */
        @keyframes usp-mobile-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-912px)); }
        }

        /* Logo Scroll Animation */
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-1368px); }
        }

        /* Apply logo animation to all viewports */
        .grid-mobile-logos > div {
          flex-shrink: 0 !important;
          animation: scroll-logos 50s linear infinite !important;
        }

        /* Chevron rotation for details */
        details[open] .chevron-icon {
          transform: rotate(180deg);
        }

        /* Footer hover effects */
        footer a:hover {
          color: #ffffff !important;
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-responsive-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .footer-empty-column {
            display: none;
          }
        }

        /* Mobile Layout */
        @media (max-width: 767px) {
          .footer-responsive-grid {
            grid-template-columns: 1fr !important;
          }

          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .footer-empty-column {
            display: none;
          }

          .footer-bottom-responsive {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 8px !important;
          }

          .footer-social {
            gap: 16px !important;
            flex-direction: row !important;
            display: flex !important;
          }

          /* Prevent mobile text overflow */
          .footer-main-grid > div {
            word-wrap: break-word;
            overflow-wrap: break-word;
            max-width: 100%;
          }

          /* Ensure service areas text doesn't overflow */
          .footer-main-grid h4 {
            font-size: 16px !important;
            line-height: 1.3 !important;
          }

          .footer-main-grid span {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }
        }

        /* CTA Button Hover Effects */
        .hero-cta-button:hover {
          background: #f3f4f6 !important;
          color: #0DA6A6 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 16px rgba(13, 166, 166, 0.4) !important;
        }

        .about-cta-button:hover {
          background: #0b8d8d !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 16px rgba(13, 166, 166, 0.4) !important;
        }

        .final-cta-button:hover {
          background: #0b8d8d !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 16px rgba(13, 166, 166, 0.4) !important;
        }

        /* Desktop Hero Section Spacing Optimization */
        @media (min-width: 1024px) {
          .nav-wrapper {
            padding: 0 32px;
          }
        }
      `}</style>
    </div>
  );
}
