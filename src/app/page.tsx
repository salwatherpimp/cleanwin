"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PillNavigation from "../components/PillNavigation";

export default function CleanWinPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

    useEffect(() => {
    // Carousel navigation functionality
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');

    if (!carouselTrack || !prevButton || !nextButton) return;

    // Get viewport-based cards per view
    const getCardsPerView = () => {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const getCardWidth = () => {
      const firstCard = carouselTrack.children[0] as HTMLElement;
      if (!firstCard) return 0;
      const computedStyle = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(computedStyle.marginRight) || 0;
      return firstCard.offsetWidth + marginRight + 24; // 24px is the gap
    };

    const goToPrev = () => {
      const cardWidth = getCardWidth();
      const cardsPerView = getCardsPerView();
      const scrollAmount = cardWidth * cardsPerView;
      carouselTrack.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    };

    const goToNext = () => {
      const cardWidth = getCardWidth();
      const cardsPerView = getCardsPerView();
      const scrollAmount = cardWidth * cardsPerView;
      carouselTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

        // Event listeners
    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);

    // Cleanup
    return () => {
      prevButton.removeEventListener('click', goToPrev);
      nextButton.removeEventListener('click', goToNext);
    };
  }, []);


  

  

  

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      
      

            {/* Pill Navigation */}
      <PillNavigation />

      {/* Hero Section */}
      <section
        className="hero-mobile"
                style={{
          position: "relative",
          height: "552px",
          minHeight: "483px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
                    paddingTop: "80px",
        }}
      >
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_600,c_fill,f_auto,q_auto/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          alt="CleanWin Hero Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "60% 50%",
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />

        {/* Content */}
        <div
          className="hero-content-mobile"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "80px 16px 24px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            className="hero-title-mobile"
            style={{
              fontSize: "40px",
              fontWeight: "800",
              lineHeight: "48px",
              marginBottom: "16px",
              color: "white",
              textShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
            }}
          >
            Ihr Reinigungsservice in Winterthur für Präzision, Sauberkeit &
            Begeisterung
          </h1>

          <p
            className="hero-subtitle-mobile"
            style={{
              fontSize: "20px",
              lineHeight: "32px",
              marginBottom: "24px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "768px",
              color: "rgba(255, 255, 255, 0.95)",
            }}
          >
            Mit mehr als 10 Jahren Erfahrung gestaltet CleanWin saubere Räume,
            Fassaden und mehr.
          </p>

          {/* Reviews Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "8px",
              padding: "8px 16px",
              marginBottom: "32px",
              color: "white",
            }}
          >
            {/* Google Icon */}
            <svg
              style={{
                width: "32px",
                height: "32px",
                marginRight: "8px",
              }}
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285f4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34a853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#fbbc05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#ea4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex" }}>
                {/* 4 filled stars */}
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#fbbf24",
                      fill: "#fbbf24",
                    }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}

                {/* Half star */}
                <div style={{ position: "relative" }}>
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#e5e7eb",
                      fill: "#e5e7eb",
                    }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <svg
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "#fbbf24",
                        fill: "#fbbf24",
                      }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontSize: "11px",
                  lineHeight: "13.2px",
                  opacity: "0.8",
                }}
              >
                4.7 aus +110 Bewertungen
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                backgroundColor: "white",
                color: "#374151",
                padding: "16px 32px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 25px -5px",
                transition: "all 0.3s",
              }}
            >
              Jetzt unverbindlich kontaktieren
            </a>
          </div>
        </div>
      </section>

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
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "24px",
                  marginTop: "23.24px",
                }}
              >
                Regionaler Reinigungsbetrieb für Privat, Gewerbe & Industrie
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "28px",
                  marginBottom: "24px",
                  marginTop: "16px",
                }}
              >
                CleanWin ist Ihr vertrauensvoller Partner für professionelle
                Reinigungsdienstleistungen in der Region Winterthur. Seit über
                10 Jahren bieten wir umfassende Lösungen für Fensterreinigung,
                Büroreinigung, Fassadenreinigung und Spezialreinigungen. Unser
                erfahrenes Team arbeitet mit modernsten Techniken und
                umweltfreundlichen Produkten, um höchste Qualität und
                Kundenzufriedenheit zu gewährleisten.
              </p>
              <a
                href="#services"
                style={{
                  display: "inline-block",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "12px 32px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
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
      <section
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "32px",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            +500 Firmen &amp; Haushalte reinigen mit Cleanwin
          </p>
                              <div
            className="grid-mobile-logos"
            style={{
              display: "flex",
              overflow: "hidden",
              gap: "32px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
                        <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/10_j4jopj.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/8_y8yfiu.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/9_a5yzm6.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />

            {/* Duplicate all logos for seamless looping */}
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/10_j4jopj.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/8_y8yfiu.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
            <div
              className="logo-container-mobile"
              style={{
                width: "120px",
                height: "60px",
                backgroundImage:
                  'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/9_a5yzm6.png")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                opacity: "0.7",
                transition: "opacity 0.3s",
              }}
            />
          </div>
        </div>
            </section>

      {/* Services Section */}
      <section
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
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "24px",
                marginTop: "23.24px",
                textAlign: "center",
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
      <section
        style={{
          backgroundColor: "#f9fafb",
          padding: "20px 0",
          position: "relative",
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
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "24px",
                marginTop: "23.24px",
                textAlign: "center",
              }}
            >
              Dafür steht Cleanwin
            </h2>
          </div>
                    <div
            className="cleanwin-values-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginTop: "24px",
              width: "100%",
            }}
          >
                                    {/* Regional & Personal Card */}
                        <div
              className="cleanwin-value-card"
              onClick={() => handleCardClick(0)}
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
                minHeight: "98px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
                            {/* Desktop Header (Original Layout) */}
              <div
                className="desktop-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                                <h3
                  style={{
                    color: "#111827",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    flexGrow: 1,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Regional & persönlich
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                </div>
              </div>

              {/* Mobile Header (Accordion Layout) */}
              <div
                className="mobile-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexGrow: 1,
                  }}
                >
                  <div
                    className="mobile-card-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#F3F4F6",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#40d5ac",
                        stroke: "#40d5ac",
                        strokeWidth: "2px",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none",
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9,22 9,12 15,12 15,22" />
                    </svg>
                  </div>
                                    <h3
                    style={{
                      color: "#111827",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "600",
                      margin: 0,
                      whiteSpace: "normal",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    Regional & persönlich
                  </h3>
                </div>
                <div
                  className="mobile-toggle-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#6b7280",
                      stroke: "#6b7280",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                      transition: "transform 0.2s ease",
                      transform: expandedCard === 0 ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <p
                className={`mobile-card-content ${expandedCard === 0 ? 'expanded' : ''}`}
                style={{
                  color: "#4b5563",
                  fontSize: "13px",
                  lineHeight: "16px",
                  marginTop: "0px",
                  flex: "1",
                }}
              >
                Wir sind in Winterthur zuhause. Persönlich, nah und immer für
                Sie erreichbar.
              </p>
            </div>

                                    {/* Safe & Insured Card */}
                        <div
              className="cleanwin-value-card"
              onClick={() => handleCardClick(1)}
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
                minHeight: "98px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
                            {/* Desktop Header (Original Layout) */}
              <div
                className="desktop-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                                <h3
                  style={{
                    color: "#111827",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    flexGrow: 1,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Sicher & versichert
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
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
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* Mobile Header (Accordion Layout) */}
              <div
                className="mobile-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexGrow: 1,
                  }}
                >
                  <div
                    className="mobile-card-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#F3F4F6",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
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
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                                    <h3
                    style={{
                      color: "#111827",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "600",
                      margin: 0,
                      whiteSpace: "normal",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    Sicher & versichert
                  </h3>
                </div>
                <div
                  className="mobile-toggle-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#6b7280",
                      stroke: "#6b7280",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                      transition: "transform 0.2s ease",
                      transform: expandedCard === 1 ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <p
                className={`mobile-card-content ${expandedCard === 1 ? 'expanded' : ''}`}
                style={{
                  color: "#4b5563",
                  fontSize: "13px",
                  lineHeight: "16px",
                  marginTop: "0px",
                  flex: "1",
                }}
              >
                Volle Versicherung und geschultes Team - damit Sie sorgenfrei
                entspannen können.
              </p>
            </div>

                                    {/* Sustainable & Gentle Card */}
                        <div
              className="cleanwin-value-card"
              onClick={() => handleCardClick(2)}
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
                minHeight: "98px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
                            {/* Desktop Header (Original Layout) */}
              <div
                className="desktop-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                                <h3
                  style={{
                    color: "#111827",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    flexGrow: 1,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Nachhaltig & schonend
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1s-3 3-3 8c0 2 1 4 3 4s3-2 3-4c0-5-3-8-3-8z" />
                    <path d="M12 17v6" />
                    <path d="M9 20h6" />
                  </svg>
                </div>
              </div>

              {/* Mobile Header (Accordion Layout) */}
              <div
                className="mobile-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexGrow: 1,
                  }}
                >
                  <div
                    className="mobile-card-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#F3F4F6",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#40d5ac",
                        stroke: "#40d5ac",
                        strokeWidth: "2px",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none",
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 1s-3 3-3 8c0 2 1 4 3 4s3-2 3-4c0-5-3-8-3-8z" />
                      <path d="M12 17v6" />
                      <path d="M9 20h6" />
                    </svg>
                  </div>
                                    <h3
                    style={{
                      color: "#111827",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "600",
                      margin: 0,
                      whiteSpace: "normal",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    Nachhaltig & schonend
                  </h3>
                </div>
                <div
                  className="mobile-toggle-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#6b7280",
                      stroke: "#6b7280",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                      transition: "transform 0.2s ease",
                      transform: expandedCard === 2 ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <p
                className={`mobile-card-content ${expandedCard === 2 ? 'expanded' : ''}`}
                style={{
                  color: "#4b5563",
                  fontSize: "13px",
                  lineHeight: "16px",
                  marginTop: "0px",
                  flex: "1",
                }}
              >
                Umweltfreundliche Reinigungs-methode durch Umkehrosmose-Technik.
                Gut für Sie und die Natur.
              </p>
            </div>

                                    {/* Flexible & Reliable Card */}
                        <div
              className="cleanwin-value-card"
              onClick={() => handleCardClick(3)}
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
                minHeight: "98px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
                            {/* Desktop Header (Original Layout) */}
              <div
                className="desktop-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                                <h3
                  style={{
                    color: "#111827",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    flexGrow: 1,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Flexibel & zuverlässig
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* Mobile Header (Accordion Layout) */}
              <div
                className="mobile-card-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  height: "44px",
                  minHeight: "44px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexGrow: 1,
                  }}
                >
                  <div
                    className="mobile-card-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#F3F4F6",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#40d5ac",
                        stroke: "#40d5ac",
                        strokeWidth: "2px",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none",
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </div>
                                    <h3
                    style={{
                      color: "#111827",
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "600",
                      margin: 0,
                      whiteSpace: "normal",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    Flexibel & zuverlässig
                  </h3>
                </div>
                <div
                  className="mobile-toggle-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#6b7280",
                      stroke: "#6b7280",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                      transition: "transform 0.2s ease",
                      transform: expandedCard === 3 ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <p
                className={`mobile-card-content ${expandedCard === 3 ? 'expanded' : ''}`}
                style={{
                  color: "#4b5563",
                  fontSize: "13px",
                  lineHeight: "16px",
                  marginTop: "0px",
                  flex: "1",
                }}
              >
                Von früh bis spät - wir richten uns stet nach Ihrem Alltag.
                Immer pünktlich.
              </p>
            </div>
          </div>
        </div>
            </section>

            {/* Customer Reviews Carousel Section */}
            <section
        style={{
          backgroundColor: "#ffffff",
          padding: "24px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          {/* Section Title */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "24px",
                marginTop: "23.24px",
                textAlign: "center",
              }}
            >
              Das sagen unsere Kunden
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Überzeugen Sie sich von der Qualität unserer Arbeit anhand echter Kundenbewertungen
            </p>
          </div>

                    {/* Carousel Container with Navigation */}
          <div style={{ position: "relative" }}>
            {/* Carousel Track */}
                        <div
              id="carousel-track"
              className="carousel-track"
              style={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                gap: "24px",
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
                            {/* Review Card 1 - Jeanine Ganz */}
              <div
                className="review-card"
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #f3f4f6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Avatar and Rating Section */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Avatar */}
                  <img
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/jganz_vjllm7.avif"
                    alt="Jeanine Ganz"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#10a0a4",
                      borderRadius: "50%",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    JG
                  </div>

                  {/* Rating Section - Stacked vertically */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {/* 5 Stars */}
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          style={{
                            width: "16px",
                            height: "16px",
                            color: "#fbbf24",
                            fill: "#fbbf24",
                          }}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Google Bewertung
                    </span>
                  </div>
                </div>

                {/* Review Text with Line Clamping */}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "#374151",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontStyle: "italic",
                  }}
                >
                  "Sehr freundlicher, unkomplizierter und qualitativ einwandfreier Service. Die Endreinigung der Wohnung wurde ohne Beanstandung abgenommen..."
                </div>

                {/* Author Name */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#111827",
                    marginTop: "8px",
                  }}
                >
                  Jeanine Ganz
                </div>
              </div>

                            {/* Review Card 2 - Albert Radamonti */}
              <div
                className="review-card"
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #f3f4f6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Avatar and Rating Section */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Avatar */}
                  <img
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/albert_1_sionfn.avif"
                    alt="Albert Radamonti"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#10a0a4",
                      borderRadius: "50%",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    AR
                  </div>

                  {/* Rating Section - Stacked vertically */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {/* 5 Stars */}
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          style={{
                            width: "16px",
                            height: "16px",
                            color: "#fbbf24",
                            fill: "#fbbf24",
                          }}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Google Bewertung
                    </span>
                  </div>
                </div>

                {/* Review Text with Line Clamping */}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "#374151",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontStyle: "italic",
                  }}
                >
                  "Super Service und einwandfreie Erledigung. Preis-Leistung ist top! Einfache Abwicklung, günstiger Preis und saubere Arbeit mit..."
                </div>

                {/* Author Name */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#111827",
                    marginTop: "8px",
                  }}
                >
                  Albert Radamonti
                </div>
              </div>

                            {/* Review Card 3 - Gerussi Renato */}
              <div
                className="review-card"
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #f3f4f6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Avatar and Rating Section */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Avatar */}
                  <img
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/renato_zhinmm.avif"
                    alt="Gerussi Renato"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#10a0a4",
                      borderRadius: "50%",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    GR
                  </div>

                  {/* Rating Section - Stacked vertically */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {/* 5 Stars */}
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          style={{
                            width: "16px",
                            height: "16px",
                            color: "#fbbf24",
                            fill: "#fbbf24",
                          }}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Google Bewertung
                    </span>
                  </div>
                </div>

                {/* Review Text with Line Clamping */}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "#374151",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontStyle: "italic",
                  }}
                >
                  "Die Endreinigung war perfekt, inklusive Wohnungsabgabe. Herr Polli arbeitet nicht nur effektiv, er ist auch ausgesprochen sympathisch. Der Preis..."
                </div>

                {/* Author Name */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#111827",
                    marginTop: "8px",
                  }}
                >
                  Gerussi Renato
                </div>
              </div>

                            {/* Review Card 4 - Roter Kater */}
              <div
                className="review-card"
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #f3f4f6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Avatar and Rating Section */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Avatar */}
                  <img
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/rkater_1_tkyxzs.avif"
                    alt="Roter Kater"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#10a0a4",
                      borderRadius: "50%",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    RK
                  </div>

                  {/* Rating Section - Stacked vertically */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {/* 5 Stars */}
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          style={{
                            width: "16px",
                            height: "16px",
                            color: "#fbbf24",
                            fill: "#fbbf24",
                          }}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Google Bewertung
                    </span>
                  </div>
                </div>

                {/* Review Text with Line Clamping */}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "#374151",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontStyle: "italic",
                  }}
                >
                  "Reinigt einmal in der Woche unser pop-up. Super Service und freundliches Personal."
                </div>

                {/* Author Name */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#111827",
                    marginTop: "8px",
                  }}
                >
                  Roter Kater
                </div>
              </div>

                            {/* Review Card 5 - Nikola C */}
              <div
                className="review-card"
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #f3f4f6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Avatar and Rating Section */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Avatar */}
                  <img
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/nikolac_1_t1tzdu.avif"
                    alt="Nikola C"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#10a0a4",
                      borderRadius: "50%",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    NC
                  </div>

                  {/* Rating Section - Stacked vertically */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {/* 5 Stars */}
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          style={{
                            width: "16px",
                            height: "16px",
                            color: "#fbbf24",
                            fill: "#fbbf24",
                          }}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Google Bewertung
                    </span>
                  </div>
                </div>

                {/* Review Text with Line Clamping */}
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    color: "#374151",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontStyle: "italic",
                  }}
                >
                  "TOP ZUFRIEDENHEIT. Wir waren mit der Endreinigung sehr zufrieden - unsere erste offizielle Wohnungsübergabe und alles verlief dank der super Reinigung bestens..."
                </div>

                {/* Author Name */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#111827",
                    marginTop: "8px",
                  }}
                >
                  Nikola C
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                marginTop: "40px",
              }}
            >
              <button
                id="carousel-prev"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#10a0a4";
                  e.target.style.backgroundColor = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.backgroundColor = "white";
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#6b7280",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                id="carousel-next"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#10a0a4";
                  e.target.style.backgroundColor = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.backgroundColor = "white";
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#6b7280",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        style={{
          padding: "96px 0",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundImage:
              'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_600,c_fill,f_auto,q_auto/v1752099054/dobiinter_close-up_of_a_rooftop_solar_panel_being_cleaned_wit_97f39d77-a81d-432b-ad05-4fc38a9dafcc_1_uqh2ui.avif")',
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />

        {/* Content */}
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 16px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: "768px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "32px",
                marginTop: "23.24px",
                color: "white",
                textShadow: "rgba(0, 0, 0, 0.5) 2px 2px 4px",
              }}
            >
              Cleanwin - persönlich, zuverlässig, hochwertig
            </h2>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                backgroundColor: "#10a0a4",
                color: "white",
                padding: "16px 32px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Jetzt unverbindlich kontaktieren
            </a>
          </div>
        </div>
      </section>

            {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Company Info */}
            <div className="footer-column">
              <h3 className="footer-company-name">CleanWin GmbH</h3>
              <div className="footer-address">
                <div>Rychenbergstrasse 223</div>
                <div>8404 Winterthur</div>
                <div>Schweiz</div>
              </div>

              <div className="footer-contact">
                <a href="tel:+41762288071" className="footer-phone">
                  <svg className="footer-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +41 76 228 80 71
                </a>
                <a href="mailto:info@cleanwin.ch" className="footer-email">
                  info@cleanwin.ch
                </a>
              </div>

              {/* Social Icons */}
              <div className="footer-social">
                <a href="https://www.instagram.com/cleanwin.ch/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/reinigungwinterthur/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="footer-column">
              <h4 className="footer-heading">Leistungen</h4>
              <div className="footer-links">
                <a href="https://cleanwin.vercel.app/leistungen/fensterreinigung" className="footer-link">Fensterreinigung</a>
                <a href="https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" className="footer-link">Unterhaltsreinigung</a>
                <a href="https://cleanwin.vercel.app/leistungen/fassadenreinigung" className="footer-link">Fassadenreinigung</a>
                <a href="https://cleanwin.vercel.app/leistungen/umzugsreinigung" className="footer-link">Umzugsreinigung</a>
                <a href="https://cleanwin.vercel.app/leistungen/baureinigung" className="footer-link">Baureinigung</a>
                <a href="https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" className="footer-link">Solarpanel reinigen</a>
              </div>
            </div>

            {/* Column 3: Main Links */}
            <div className="footer-column">
              <div className="footer-links footer-main-links">
                <a href="https://cleanwin.vercel.app/ueber-uns" className="footer-link">Über uns</a>
                <a href="https://cleanwin.vercel.app/referenzen" className="footer-link">Referenzen</a>
              </div>
            </div>

            {/* Column 4: Service Areas */}
            <div className="footer-column">
              <h4 className="footer-heading">Unsere Servicegebiete</h4>
              <div className="footer-links">
                <span className="footer-text">Fensterreinigung Region Winterthur</span>
                <span className="footer-text">Unterhaltsreinigung Region Winterthur</span>
                <span className="footer-text">Fassadenreinigung Region Winterthur</span>
                <span className="footer-text">Umzugsreinigung Region Winterthur</span>
                <span className="footer-text">Baureinigung Region Winterthur</span>
                <span className="footer-text">Solarpanel Reinigen Region Winterthur</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 CleanWin. Alle Rechte vorbehalten.
              <br />
              Gemacht mit ♥️ in Winterthur
            </div>
            <a href="https://cleanwin.vercel.app/datenschutz" className="footer-link">
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Responsive Styles */}
            <style jsx>{`
        /* Services hover effects */
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        /* Services responsive grid */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

                                @media (max-width: 767px) {
                    .hero-mobile {
            height: 557px !important;
            min-height: 487px !important;
          }
          .hero-content-mobile {
            padding: 60px 16px 24px !important;
          }
          .hero-title-mobile {
            font-size: 28px !important;
            line-height: 36px !important;
          }
          .hero-subtitle-mobile {
            font-size: 16px !important;
            line-height: 24px !important;
          }
          .logo-mobile {
            width: 160px !important;
            height: 45px !important;
          }
          .grid-mobile-1 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .grid-mobile-2 {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
                    .grid-mobile-3 {
            display: flex !important;
            overflow: hidden !important;
            gap: 24px !important;
            width: 100% !important;
          }

          .grid-mobile-3 > div {
            min-width: 280px !important;
            flex-shrink: 0 !important;
                                                animation: usp-mobile-scroll 18s linear infinite !important;
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

          /* Services mobile layout */
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

                    .services-section h2 {
            font-size: 28px !important;
          }
        }

                        /* Review Carousel with Navigation */
                .carousel-track {
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .carousel-track::-webkit-scrollbar {
          display: none;
        }

        .review-card {
          scroll-snap-align: start;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        /* Mobile: show 1 card at a time */
        @media (max-width: 767px) {
          .review-card {
            width: 90% !important;
            min-width: 90% !important;
            max-width: 350px !important;
          }
        }

        /* Tablet: show 2 cards */
        @media (min-width: 768px) and (max-width: 1023px) {
          .review-card {
            width: 48% !important;
            min-width: 48% !important;
            max-width: 400px !important;
          }
        }

        /* Desktop: show 3 cards */
        @media (min-width: 1024px) {
          .review-card {
            width: 32% !important;
            min-width: 32% !important;
            max-width: 380px !important;
          }
        }

                        /* USP Mobile Auto-Scroll Animation */
        @keyframes usp-mobile-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 24px)); }
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

        /* Navigation Button Hover Effects */
        #carousel-prev:hover,
        #carousel-next:hover {
          border-color: #10a0a4 !important;
          background-color: #f8fafc !important;
        }

        #carousel-prev:hover svg,
        #carousel-next:hover svg {
                    color: #10a0a4 !important;
        }

                /* Mobile Accordion Styles for Cleanwin Values Section */
        @media (max-width: 767px) {
                    .cleanwin-values-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
          }

                                        .cleanwin-value-card {
            height: auto !important;
            min-height: 42px !important;
            padding: 12px !important;
            transition: all 0.3s ease !important;
            overflow: hidden !important;
          }

          .cleanwin-value-card .mobile-card-icon {
            display: flex !important;
          }

          .cleanwin-value-card .mobile-toggle-icon {
            display: flex !important;
          }

          .cleanwin-value-card .desktop-card-header {
            display: none !important;
          }

                    .cleanwin-value-card .mobile-card-header {
            display: flex !important;
            align-items: center !important;
            min-height: 36px !important;
            margin-bottom: 0 !important;
          }

          .mobile-card-content {
            display: none !important;
            margin-top: 12px !important;
            padding-top: 12px !important;
            border-top: 1px solid #e5e7eb !important;
          }

          .mobile-card-content.expanded {
            display: block !important;
            animation: slideDown 0.3s ease !important;
          }
        }

                @media (min-width: 768px) {
          .cleanwin-value-card .mobile-card-icon {
            display: none !important;
          }

          .cleanwin-value-card .mobile-toggle-icon {
            display: none !important;
          }

          .cleanwin-value-card .desktop-card-header {
            display: flex !important;
          }

          .cleanwin-value-card .mobile-card-header {
            display: none !important;
          }

          .cleanwin-value-card {
            cursor: default !important;
            overflow: visible !important;
            height: auto !important;
            min-height: 98px !important;
          }

          .mobile-card-content {
            display: block !important;
          }
        }

                @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }

        /* Footer Styles */
        .footer-section {
          background-color: #0A0F1C;
          color: #EAEAEA;
          padding: 48px 0 32px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-bottom: 32px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-company-name {
          font-size: 16px;
          font-weight: 600;
          color: #EAEAEA;
          margin: 0 0 16px 0;
          line-height: 1.4;
        }

        .footer-heading {
          font-size: 14px;
          font-weight: 600;
          color: #EAEAEA;
          margin: 0 0 12px 0;
          line-height: 1.4;
        }

        .footer-address {
          margin-bottom: 16px;
        }

        .footer-address div {
          font-size: 14px;
          color: #EAEAEA;
          line-height: 1.5;
          margin-bottom: 2px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .footer-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #EAEAEA;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-phone:hover {
          color: #ffffff;
        }

        .footer-phone-icon {
          width: 14px;
          height: 14px;
          stroke-width: 2;
        }

        .footer-email {
          color: #EAEAEA;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-email:hover {
          color: #ffffff;
        }

        .footer-social {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          color: #EAEAEA;
          transition: color 0.2s ease;
        }

        .footer-social-link:hover {
          color: #ffffff;
        }

        .footer-social-icon {
          width: 20px;
          height: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-main-links {
          margin-top: 28px;
        }

        .footer-link {
          color: #EAEAEA;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.5;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-text {
          color: #EAEAEA;
          font-size: 14px;
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid #374151;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copyright {
          font-size: 14px;
          color: #EAEAEA;
          line-height: 1.5;
        }

        /* Tablet Layout (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .footer-social {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        /* Mobile Layout (< 768px) */
        @media (max-width: 767px) {
          .footer-section {
            padding: 32px 0 24px;
          }

          .footer-container {
            padding: 0 16px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .footer-social {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .footer-main-links {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
}
