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
          background: "linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)",
          padding: "80px 0",
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
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "center",
              "@media (min-width: 1024px)": {
                gridTemplateColumns: "1fr 1fr",
              },
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "24px",
                  lineHeight: "1.1",
                }}
              >
                Professionelle
                <span style={{ color: "#2563eb" }}> Reinigungsdienste</span> in
                Winterthur
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  color: "#4b5563",
                  marginBottom: "32px",
                  lineHeight: "1.6",
                }}
              >
                Mit über 10 Jahren Erfahrung bieten wir erstklassige
                Reinigungsdienste für Unternehmen und Privathaushalte.
                Zuverlässig, nachhaltig und persönlich.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  "@media (min-width: 640px)": {
                    flexDirection: "row",
                  },
                }}
              >
                <button
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  Kostenlose Offerte
                </button>
                <button
                  style={{
                    border: "2px solid #2563eb",
                    color: "#2563eb",
                    backgroundColor: "transparent",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  Mehr erfahren
                </button>
              </div>
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#6b7280",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Über 500 zufriedene Kunden
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Vollversichert
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  backgroundColor: "#dbeafe",
                  borderRadius: "16px",
                  padding: "32px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "128px",
                    height: "128px",
                    backgroundColor: "#bfdbfe",
                    borderRadius: "50%",
                    margin: "0 auto 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "64px", color: "#2563eb" }}>🧽</span>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#111827",
                    margin: "0 0 8px 0",
                  }}
                >
                  Reinigungsexperte
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  Professionell & Zuverlässig
                </p>
              </div>
            </div>
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
            {/* Window Cleaning */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.3s",
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
              <ul
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Innen- und Außenreinigung
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Rahmen- und Fensterbankpflege
                </li>
              </ul>
            </div>

            {/* Office Cleaning */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.3s",
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
              <ul
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Arbeitsplätze und Gemeinschaftsräume
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Sanitäranlagen und Küchen
                </li>
              </ul>
            </div>

            {/* Facade Cleaning */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.3s",
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
              <ul
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Alle Materialien und Oberflächen
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Umweltschonende Verfahren
                </li>
              </ul>
            </div>

            {/* Move-out Cleaning */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.3s",
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
              <ul
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Komplette Wohnungsreinigung
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Abnahme-Garantie
                </li>
              </ul>
            </div>

            {/* Construction Cleaning */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.3s",
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
              <ul
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Grob- und Feinreinigung
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#10b981", marginRight: "8px" }}>
                    ✓
                  </span>
                  Spezialausrüstung verfügbar
                </li>
              </ul>
            </div>

            {/* Additional Service Placeholder */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                borderRadius: "12px",
                padding: "32px",
                border: "2px dashed #d1d5db",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "48px",
                  color: "#9ca3af",
                  marginBottom: "16px",
                }}
              >
                ➕
              </span>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#4b5563",
                  marginBottom: "8px",
                }}
              >
                Weitere Services
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                Haben Sie einen speziellen Reinigungsbedarf? Kontaktieren Sie
                uns für eine individuelle Lösung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        id="about"
        style={{ padding: "80px 0", backgroundColor: "#f9fafb" }}
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
              Warum CleanWin wählen?
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "#4b5563",
                maxWidth: "768px",
                margin: "0 auto",
              }}
            >
              Mit über 10 Jahren Erfahrung und mehr als 500 zufriedenen Kunden
              sind wir Ihr vertrauensvoller Partner für professionelle
              Reinigung.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <span style={{ fontSize: "40px", color: "#2563eb" }}>📍</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Lokal & Persönlich
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Ansässig in Winterthur bieten wir persönliche und erreichbare
                Services für die Region.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#dcfce7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <span style={{ fontSize: "40px", color: "#16a34a" }}>🛡️</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Sicher & Versichert
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Vollversichert mit geschultem Team für Ihre Sicherheit und
                unseren Schutz.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <span style={{ fontSize: "40px", color: "#9333ea" }}>💚</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Nachhaltig & Schonend
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Umweltfreundliche Reinigungsverfahren wie Osmose-Technologie für
                nachhaltiges Arbeiten.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#fed7aa",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <span style={{ fontSize: "40px", color: "#ea580c" }}>⏰</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                Flexibel & Zuverlässig
              </h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
                Anpassung an Ihren Zeitplan und pünktliche Ausführung aller
                vereinbarten Termine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Quote Section */}
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
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "center",
              "@media (min-width: 1024px)": {
                gridTemplateColumns: "1fr 1fr",
              },
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Vorname"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Nachname"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "16px",
                    }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-Mail Adresse"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                />
                <select
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                >
                  <option value="">Service auswählen</option>
                  <option value="window">Fensterreinigung</option>
                  <option value="office">Büroreinigung</option>
                  <option value="facade">Fassadenreinigung</option>
                  <option value="moveout">Auszugsreinigung</option>
                  <option value="construction">Bauendreinigung</option>
                  <option value="other">Andere</option>
                </select>
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
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="#" style={{ color: "#9ca3af", fontSize: "24px" }}>
                  📘
                </a>
                <a href="#" style={{ color: "#9ca3af", fontSize: "24px" }}>
                  🐦
                </a>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Services
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Fensterreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Büroreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Fassadenreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Auszugsreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Bauendreinigung
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Unternehmen
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Über uns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Karriere
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Referenzen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#9ca3af", textDecoration: "none" }}
                  >
                    Blog
                  </a>
                </li>
              </ul>
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
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li style={{ color: "#9ca3af" }}>CleanWin GmbH</li>
                <li style={{ color: "#9ca3af" }}>Musterstraße 123</li>
                <li style={{ color: "#9ca3af" }}>8400 Winterthur</li>
                <li style={{ color: "#9ca3af" }}>Schweiz</li>
              </ul>
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
              &copy; 2024 CleanWin. Alle Rechte vorbehalten. |
              <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                {" "}
                Datenschutz
              </a>{" "}
              |
              <a href="#" style={{ color: "#9ca3af", textDecoration: "none" }}>
                {" "}
                Impressum
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
