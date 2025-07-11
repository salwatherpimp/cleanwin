export default function CleanWinPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header Navigation */}
      <header
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: 50,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "16px",
          }}
        >
          <a
            href="https://cleanwin.vercel.app/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "rgb(0, 0, 238)",
              textDecoration: "underline solid rgb(0, 0, 238)",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          >
            <img
              src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fv1752003683%2Fcleanwin-logo_ysvfv0.avif&w=640&q=75"
              alt="CleanWin Logo"
              width={200}
              height={56}
              style={{
                width: "200px",
                height: "56px",
                aspectRatio: "auto 200 / 56",
                overflowClipMargin: "content-box",
                overflowX: "clip",
                overflowY: "clip",
              }}
            />
          </a>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* Services Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                <span>Leistungen</span>
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transition: "transform 0.2s",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              style={{
                color: "white",
                fontWeight: "500",
                padding: "8px 0",
                textDecoration: "none",
                textShadow: "rgba(0, 0, 0, 0.3) 0px 1px 3px",
                transition: "color 0.2s",
              }}
            >
              Über uns
            </a>

            <a
              href="https://cleanwin.vercel.app/referenzen"
              style={{
                color: "white",
                fontWeight: "500",
                padding: "8px 0",
                textDecoration: "none",
                textShadow: "rgba(0, 0, 0, 0.3) 0px 1px 3px",
                transition: "color 0.2s",
              }}
            >
              Referenzen
            </a>

            <a
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#10a0a4",
                color: "white",
                padding: "12px 16px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              <svg
                style={{
                  width: "16px",
                  height: "16px",
                  color: "white",
                  stroke: "white",
                  strokeWidth: "2px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
              </svg>
              <span>Kontaktiere uns</span>
            </a>
          </nav>

          {/* Mobile Menu Button (hidden on desktop) */}
          <button
            style={{
              display: "none",
              padding: "8px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              style={{
                width: "24px",
                height: "24px",
                color: "white",
                stroke: "white",
                fill: "none",
              }}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
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

      {/* Why Choose CleanWin Section */}
      <section
        style={{
          background:
            "linear-gradient(to right bottom, rgb(237, 221, 229), rgb(247, 242, 245))",
          padding: "24px 0",
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
              Warum Cleanwin wählen?
            </h2>
          </div>
          <div
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
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    color: "#111827",
                    fontWeight: "600",
                    flexGrow: 1,
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
                    backgroundColor: "rgba(231, 2, 126, 0.1)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#10a0a4",
                      stroke: "#10a0a4",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
              </div>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "22.75px",
                }}
              >
                Wir sind in Winterthur zuhause. Persönlich, nah und immer für
                Sie erreichbar.
              </p>
            </div>

            {/* Safe & Insured Card */}
            <div
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    color: "#111827",
                    fontWeight: "600",
                    flexGrow: 1,
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
                    backgroundColor: "rgba(231, 2, 126, 0.1)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#10a0a4",
                      stroke: "#10a0a4",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "22.75px",
                }}
              >
                Volle Versicherung und geschultes Team - damit Sie sorgenfrei
                entspannen können.
              </p>
            </div>

            {/* Sustainable & Gentle Card */}
            <div
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    color: "#111827",
                    fontWeight: "600",
                    flexGrow: 1,
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
                    backgroundColor: "rgba(231, 2, 126, 0.1)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#10a0a4",
                      stroke: "#10a0a4",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "22.75px",
                }}
              >
                Umweltfreundliche Reinigungs-methode durch Umkehrosmose-Technik.
                Gut für Sie und die Natur.
              </p>
            </div>

            {/* Flexible & Reliable Card */}
            <div
              style={{
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    color: "#111827",
                    fontWeight: "600",
                    flexGrow: 1,
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
                    backgroundColor: "rgba(231, 2, 126, 0.1)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#10a0a4",
                      stroke: "#10a0a4",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "22.75px",
                }}
              >
                Von früh bis spät - wir richten uns stet nach Ihrem Alltag.
                Immer pünktlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          backgroundColor: "#f9fafb",
          padding: "20px 0",
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
              Unsere Leistungen
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {/* Fensterreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/fensterreinigung"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                color: "rgb(0, 0, 238)",
                cursor: "pointer",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-malen_gdvdci.avif"
                  alt="Fensterreinigung"
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                    display: "inline",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px",
                    marginTop: "0px",
                  }}
                >
                  Fensterreinigung
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#4b5563",
                    marginBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  Kristallklare Fenster mit professioneller Reinigungstechnik.
                </p>
              </div>
            </a>

            {/* Büroreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/bueroreinigung"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                color: "rgb(0, 0, 238)",
                cursor: "pointer",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1750015382/altbauwohnung-meilen_lrttoc.avif"
                  alt="Büroreinigung"
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                    display: "inline",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px",
                    marginTop: "0px",
                  }}
                >
                  Büroreinigung
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#4b5563",
                    marginBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  Hygienische und gründliche Büroreinigung für Ihr Unternehmen.
                </p>
              </div>
            </a>

            {/* Fassadenreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/fassadenreinigung"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                color: "rgb(0, 0, 238)",
                cursor: "pointer",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1749930415/verputz-malerarbeiten-duebendorf-1_zxk4wi.avif"
                  alt="Fassadenreinigung"
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                    display: "inline",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px",
                    marginTop: "0px",
                  }}
                >
                  Fassadenreinigung
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#4b5563",
                    marginBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  Schonende Fassadenreinigung für alle Oberflächentypen.
                </p>
              </div>
            </a>

            {/* Umzugsreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/umzugsreinigung"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                color: "rgb(0, 0, 238)",
                cursor: "pointer",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-tapezieren_jvtgyo.avif"
                  alt="Umzugsreinigung"
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                    display: "inline",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px",
                    marginTop: "0px",
                  }}
                >
                  Umzugsreinigung
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#4b5563",
                    marginBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  Professionelle Endreinigung für Ihren stressfreien Umzug.
                </p>
              </div>
            </a>

            {/* Baureinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/baureinigung"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                color: "rgb(0, 0, 238)",
                cursor: "pointer",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-spritzen_ij8jsj.avif"
                  alt="Baureinigung"
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                    display: "inline",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px",
                    marginTop: "0px",
                  }}
                >
                  Baureinigung
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#4b5563",
                    marginBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  Gründliche Baureinigung nach Renovierung und Neubau.
                </p>
              </div>
            </a>

            {/* Weitere Dienstleistungen */}
            <a
              href="https://cleanwin.vercel.app/leistungen/weitere-dienstleistungen"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
                color: "rgb(0, 0, 238)",
                cursor: "pointer",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-weitereLeistungen_cyduu7.avif"
                  alt="Weitere Dienstleistungen"
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                    display: "inline",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "8px",
                    marginTop: "0px",
                  }}
                >
                  Weitere Dienstleistungen
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#4b5563",
                    marginBottom: "0px",
                    marginTop: "0px",
                  }}
                >
                  Erfahren Sie mehr über unsere Zusatzleistungen und
                  Spezialdienste.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section
        style={{
          background:
            "linear-gradient(to right bottom, rgb(237, 221, 229), rgb(247, 242, 245))",
          padding: "64px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "36px",
                marginBottom: "24px",
                color: "#111827",
                textAlign: "center",
              }}
            >
              Das sagen unsere Kunden
            </h2>
            <p
              style={{
                color: "#111827",
                marginBottom: "40px",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "768px",
                textAlign: "center",
              }}
            >
              Überzeugen Sie sich von der Qualität unserer Arbeit und senden sie
              uns noch heute eine unverbindliche Kontaktanfrage.
            </p>

            {/* Google Reviews Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "48px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                  padding: "8px 16px",
                  transition: "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  style={{
                    height: "20px",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                />
                <span
                  style={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    marginLeft: "8px",
                  }}
                >
                  Google Bewertungen
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#facc15",
                        fill: "#facc15",
                        marginLeft: i > 0 ? "4px" : "0px",
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>
                <span
                  style={{
                    color: "#4b5563",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    marginLeft: "8px",
                  }}
                >
                  (5/5)
                </span>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div style={{ position: "relative" }}>
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  marginLeft: "-16px",
                }}
              >
                {/* Testimonial 1 */}
                <div
                  style={{
                    flexBasis: "33.3333%",
                    flexShrink: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <div
                    style={{
                      backdropFilter: "blur(4px)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                      cursor: "pointer",
                      height: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div style={{ padding: "32px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <svg
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "#d60475",
                            flexShrink: 0,
                            marginTop: "4px",
                            stroke: "#d60475",
                            strokeWidth: "2px",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                          }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        </svg>
                        <div
                          style={{
                            flexGrow: 1,
                            marginLeft: "4px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "16px",
                            }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  color: "#facc15",
                                  fill: "#facc15",
                                  marginLeft: i > 0 ? "4px" : "0px",
                                }}
                                viewBox="0 0 24 24"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                              </svg>
                            ))}
                          </div>
                          <p
                            style={{
                              color: "#374151",
                              lineHeight: "26px",
                              marginBottom: "24px",
                              overflow: "hidden",
                            }}
                          >
                            Ein engagiertes team,flexibel, zuverlässig,
                            kreativ.Ich bin sehr zufrieden mit der sorgfältigen
                            Ausführung und werde farbexpress immer wieder gern
                            für mein Haus engagieren.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                color: "#111827",
                                fontWeight: "600",
                              }}
                            >
                              Ursula Wirtz
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div
                  style={{
                    flexBasis: "33.3333%",
                    flexShrink: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <div
                    style={{
                      backdropFilter: "blur(4px)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                      cursor: "pointer",
                      height: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div style={{ padding: "32px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <svg
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "#d60475",
                            flexShrink: 0,
                            marginTop: "4px",
                            stroke: "#d60475",
                            strokeWidth: "2px",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                          }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        </svg>
                        <div
                          style={{
                            flexGrow: 1,
                            marginLeft: "4px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "16px",
                            }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  color: "#facc15",
                                  fill: "#facc15",
                                  marginLeft: i > 0 ? "4px" : "0px",
                                }}
                                viewBox="0 0 24 24"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                              </svg>
                            ))}
                          </div>
                          <p
                            style={{
                              color: "#374151",
                              lineHeight: "26px",
                              marginBottom: "24px",
                              overflow: "hidden",
                            }}
                          >
                            Effizient, sehr professionell, sauber und zu einem
                            zahlbaren Preis: So darf ich die Arbeit dieser
                            beiden sympathischen Berufsleute zusammenfassen. Sie
                            haben eine Wohnung in meinem über 200 Jahre alten
                            MFH neu gestrichen. Die Aufgabe, Wände und
                            Einbauschränke mit vielen Ecken und Kanten,
                            Holztäfer, sowie Gips- und Mauerwerk kostengünstig
                            und doch perfekt zu streichen, war nicht unbedingt
                            einfach. Der Auftrag wurde jedoch zu meiner vollsten
                            Zufriedenheit erledigt. Ich kann diese Firma
                            wirklich sehr empfehlen!
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                color: "#111827",
                                fontWeight: "600",
                              }}
                            >
                              Johanna Kelts
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div
                  style={{
                    flexBasis: "33.3333%",
                    flexShrink: 0,
                    paddingLeft: "16px",
                  }}
                >
                  <div
                    style={{
                      backdropFilter: "blur(4px)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                      cursor: "pointer",
                      height: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div style={{ padding: "32px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <svg
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "#d60475",
                            flexShrink: 0,
                            marginTop: "4px",
                            stroke: "#d60475",
                            strokeWidth: "2px",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                          }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        </svg>
                        <div
                          style={{
                            flexGrow: 1,
                            marginLeft: "4px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "16px",
                            }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  color: "#facc15",
                                  fill: "#facc15",
                                  marginLeft: i > 0 ? "4px" : "0px",
                                }}
                                viewBox="0 0 24 24"
                              >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                              </svg>
                            ))}
                          </div>
                          <p
                            style={{
                              color: "#374151",
                              lineHeight: "26px",
                              marginBottom: "24px",
                              overflow: "hidden",
                            }}
                          >
                            Für unser neues Restaurant, haben wir ein passendes
                            Farbkonzept gesucht. Durch die Kompetente Beratung
                            von Herr Niedehauser konnten wir unsere
                            Vorstellungen zu einem fairen Preis umsetzen.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                color: "#111827",
                                fontWeight: "600",
                              }}
                            >
                              Frau achternbusch
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "48px 16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Company Information */}
            <div>
              <h3
                style={{
                  fontSize: "18.72px",
                  fontWeight: "700",
                  marginBottom: "16px",
                  marginTop: "0px",
                }}
              >
                CleanWin GmbH
              </h3>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                <div>Rychenbergstrasse 223</div>
                <div>8404 Winterthur</div>
                <div>Schweiz</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <a
                  href="tel:+41522020100"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#9ca3af",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#9ca3af",
                      stroke: "#9ca3af",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <span>+41 52 202 01 00</span>
                </a>
                <div
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                  }}
                >
                  info@cleanwin.ch
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontWeight: "500",
                  marginBottom: "16px",
                  marginTop: "21.28px",
                }}
              >
                Leistungen
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <a
                  href="https://cleanwin.vercel.app/leistungen/fensterreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Fensterreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/bueroreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Büroreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/fassadenreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Fassadenreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/umzugsreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Umzugsreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/baureinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Baureinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/weitere-dienstleistungen"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Weitere Dienstleistungen
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4
                style={{
                  fontWeight: "500",
                  marginBottom: "16px",
                  marginTop: "21.28px",
                }}
              >
                Servicegebiete
              </h4>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                <div>Winterthur, Zürich, Basel</div>
                <div>Effretikon, Seuzach</div>
                <div>Wiesendangen, Neftenbach</div>
                <div>Frauenfeld, Uster</div>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h4
                style={{
                  fontWeight: "500",
                  marginBottom: "16px",
                  marginTop: "21.28px",
                }}
              >
                Weitere Services
              </h4>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                <div>24/7 Notfallreinigung</div>
                <div>Kostenlose Besichtigung</div>
                <div>Individuelle Angebote</div>
                <div>Regelmäßige Termine</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              borderTop: "1px solid #374151",
              marginTop: "32px",
              paddingTop: "32px",
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <span>© 2025 CleanWin. Alle Rechte vorbehalten.</span>
              <span>Gemacht mit ♥️ in Winterthur</span>
            </div>
            <a
              href="https://cleanwin.vercel.app/datenschutz"
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
