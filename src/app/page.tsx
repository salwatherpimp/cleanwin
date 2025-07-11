export default function CleanWinPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header Navigation */}
      <header
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "64px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2563eb",
                  margin: 0,
                }}
              >
                CleanWin
              </h1>
            </div>
            <nav
              style={{
                display: "flex",
                gap: "32px",
              }}
            >
              <a
                href="#services"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Dienstleistungen
              </a>
              <a
                href="#about"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Über uns
              </a>
              <a
                href="#contact"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Kontakt
              </a>
            </nav>
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "8px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
            >
              Offerte anfordern
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "550px",
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_600,c_fill,f_auto,q_auto/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          alt="CleanWin Hero Background"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
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
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "64px 16px 24px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
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
          padding: "16px 0",
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
                  backgroundColor: "rgba(16, 160, 164, 0.1)",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#10a0a4",
                    stroke: "#10a0a4",
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
                    marginBottom: "2px",
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
                  backgroundColor: "rgba(16, 160, 164, 0.1)",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#10a0a4",
                    stroke: "#10a0a4",
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
                    marginBottom: "2px",
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
                  backgroundColor: "rgba(16, 160, 164, 0.1)",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#10a0a4",
                    stroke: "#10a0a4",
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
                    marginBottom: "2px",
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
            >
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FFirmenwagen_vor_Geba%25CC%2588ude_zz0m0s.avif&w=750&q=75"
                  alt="Cleaning Service"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
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
                <img
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FGlasreinigung_aussen_Flaach_ec1fre.avif&w=750&q=75"
                  alt="Office Cleaning"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
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
                <img
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752005906%2Fhomepage-herosection_fsxqwc.avif&w=750&q=75"
                  alt="Professional Cleaning"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
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
                <img
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FFassadenreinigung_Sichtbeton_vm1lsq.avif&w=750&q=75"
                  alt="Home Cleaning"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
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
          padding: "48px 0",
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
            Über 500 Firmen & Haushalte die mit Cleanwin reinigen
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "32px",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ padding: "80px 0", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Unsere Dienstleistungen
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "#4b5563",
                maxWidth: "768px",
                margin: "0 auto",
              }}
            >
              Von Fensterreinigung bis zur Bauendreinigung – wir bieten
              professionelle Reinigungslösungen für jeden Bedarf.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Service Cards */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span style={{ fontSize: "32px", color: "#2563eb" }}>🪟</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "16px",
                }}
              >
                Fensterreinigung
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Kristallklare Fenster mit professionellen Reinigungstechniken.
                Sowohl für Privathaushalte als auch Gewerbeobjekte.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#dcfce7",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span style={{ fontSize: "32px", color: "#16a34a" }}>🏢</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "16px",
                }}
              >
                Büroreinigung
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Hygienische und gründliche Reinigung für Ihren Arbeitsplatz.
                Regelmäßige oder einmalige Reinigungsdienste.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span style={{ fontSize: "32px", color: "#9333ea" }}>🏠</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "16px",
                }}
              >
                Fassadenreinigung
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Schonende Reinigungsverfahren für alle Fassadentypen. Erhaltung
                und Pflege Ihrer Gebäudehülle.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#fed7aa",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span style={{ fontSize: "32px", color: "#ea580c" }}>📦</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "16px",
                }}
              >
                Auszugsreinigung
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Umfassende Endreinigung für einen stressfreien Umzug.
                Garantierte Abnahme durch den Vermieter.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#fecaca",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span style={{ fontSize: "32px", color: "#dc2626" }}>🔨</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "16px",
                }}
              >
                Bauendreinigung
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Detaillierte Reinigung nach Renovierungen oder Neubauten.
                Entfernung von Baustaub und Materialresten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ padding: "80px 0", backgroundColor: "#2563eb" }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "24px",
                }}
              >
                Bereit für professionelle Reinigung?
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  color: "#bfdbfe",
                  marginBottom: "32px",
                  lineHeight: "1.6",
                }}
              >
                Kontaktieren Sie uns heute für eine kostenlose Offerte. Über 500
                Unternehmen und Haushalte vertrauen bereits auf unsere Dienste.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#bfdbfe",
                  }}
                >
                  <span style={{ marginRight: "12px" }}>📞</span>
                  <span>+41 52 XXX XX XX</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#bfdbfe",
                  }}
                >
                  <span style={{ marginRight: "12px" }}>✉️</span>
                  <span>info@cleanwin.ch</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#bfdbfe",
                  }}
                >
                  <span style={{ marginRight: "12px" }}>📍</span>
                  <span>Winterthur, Schweiz</span>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "24px",
                }}
              >
                Kostenlose Offerte anfordern
              </h3>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <input
                  type="text"
                  placeholder="Ihr Name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
                <input
                  type="email"
                  placeholder="E-Mail Adresse"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
                <textarea
                  placeholder="Beschreiben Sie Ihren Reinigungsbedarf..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    padding: "12px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Offerte anfordern
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "#ffffff",
          padding: "48px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                CleanWin
              </h3>
              <p
                style={{
                  color: "#9ca3af",
                  marginBottom: "16px",
                  lineHeight: "1.6",
                }}
              >
                Professionelle Reinigungsdienste in Winterthur mit über 10
                Jahren Erfahrung.
              </p>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Kontakt
              </h4>
              <div
                style={{
                  color: "#9ca3af",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div>CleanWin GmbH</div>
                <div>Winterthur, Schweiz</div>
                <div>info@cleanwin.ch</div>
                <div>+41 52 XXX XX XX</div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #374151",
              marginTop: "32px",
              paddingTop: "32px",
              textAlign: "center",
              color: "#9ca3af",
            }}
          >
            <p style={{ margin: 0 }}>
              &copy; 2024 CleanWin. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
