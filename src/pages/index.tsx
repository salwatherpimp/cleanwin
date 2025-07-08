import Head from "next/head";
import { useState, useEffect, GetStaticProps } from "react";
import {
  ChevronDown,
  Phone,
  Hand,
  Star,
  Award,
  Heart,
  Clock,
  MapPin,
  Instagram,
} from "lucide-react";

interface HomePageProps {
  buildTime: string;
}

export default function HomePage({ buildTime }: HomePageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      setIsBusinessHours(day >= 1 && day <= 5 && hour >= 8 && hour < 17);
    };

    window.addEventListener("scroll", handleScroll);
    checkBusinessHours();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Fensterreinigung",
      href: "/leistungen/fensterreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/window-cleaning_m7hork.avif",
      description: "Professionelle Fensterreinigung für kristallklare Sicht",
    },
    {
      name: "Fassadenreinigung",
      href: "/leistungen/fassadenreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/facade-cleaning_m7hork.avif",
      description: "Schonende Fassadenreinigung für alle Oberflächen",
    },
    {
      name: "Umzugsreinigung",
      href: "/leistungen/umzugsreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/moving-cleaning_m7hork.avif",
      description: "Gründliche Endreinigung für Ihren Umzug",
    },
    {
      name: "Baureinigung",
      href: "/leistungen/baureinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/construction-cleaning_m7hork.avif",
      description: "Professionelle Baureinigung nach Renovierung",
    },
    {
      name: "Unterhaltsreinigung",
      href: "/leistungen/unterhaltsreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/maintenance-cleaning_m7hork.avif",
      description: "Regelmäßige Reinigung für Büros und Betriebe",
    },
    {
      name: "Solarpanel reinigen",
      href: "/leistungen/solarpanel-reinigen",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/solar-cleaning_m7hork.avif",
      description: "Effiziente Reinigung für maximale Solarleistung",
    },
  ];

  const whyFeatures = [
    {
      icon: Award,
      title: "Über 10 Jahre Erfahrung",
      description: "Langjährige Expertise in der professionellen Reinigung",
    },
    {
      icon: Heart,
      title: "Inhabergeführt & persönlich",
      description: "Persönlicher Service und direkter Kontakt zum Inhaber",
    },
    {
      icon: Clock,
      title: "Zuverlässig & termingerecht",
      description: "Pünktliche und verlässliche Ausführung aller Arbeiten",
    },
    {
      icon: MapPin,
      title: "Regional verwurzelt",
      description: "Lokaler Betrieb mit kurzen Wegen in der Region Winterthur",
    },
  ];

  const reviews = [
    {
      name: "Thomas Müller",
      company: "Müller AG",
      text: "CleanWin reinigt unsere Büroräume seit 3 Jahren zuverlässig und gründlich. Das Team ist professionell und flexibel - absolut empfehlenswert!",
      rating: 5,
    },
    {
      name: "Sarah Zimmermann",
      company: "Praxis Dr. Zimmermann",
      text: "Die hygienische Reinigung unserer Praxisräume ist bei CleanWin in besten Händen. Termine werden zuverlässig eingehalten.",
      rating: 5,
    },
    {
      name: "Martin Weber",
      company: "Privathaushalt",
      text: "Nach unserem Umzug hat CleanWin eine perfekte Endreinigung gemacht. Alles blitzsauber - wir buchen sie gerne wieder.",
      rating: 5,
    },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          CleanWin - Professionelle Reinigung in Winterthur | Fensterreinigung &
          mehr
        </title>
        <meta
          name="description"
          content="✓ Professionelle Reinigungsservices in Winterthur ✓ Fensterreinigung ✓ Büroreinigung ✓ Umzugsreinigung ✓ Über 10 Jahre Erfahrung ✓ Kostenlose Offerte"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Header */}
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: isScrolled ? "white" : "transparent",
            boxShadow: isScrolled
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752003683/cleanwin-logo_ysvfv0.avif"
                alt="CleanWin Logo"
                style={{ height: "3.5rem" }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              style={{ display: "none", alignItems: "center", gap: "2rem" }}
              className="desktop-nav"
            >
              {/* Leistungen Dropdown */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    padding: "0.5rem 0",
                    fontWeight: 500,
                    color: isScrolled ? "#374151" : "white",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = isScrolled
                      ? "#e7027e"
                      : "#e5e7eb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isScrolled
                      ? "#374151"
                      : "white")
                  }
                >
                  Leistungen
                  <ChevronDown
                    size={16}
                    style={{
                      transform: isDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      marginTop: "0.5rem",
                      width: "20rem",
                      backgroundColor: "white",
                      borderRadius: "0.5rem",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #f3f4f6",
                      padding: "0.5rem 0",
                      zIndex: 50,
                    }}
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        style={{
                          display: "block",
                          padding: "0.75rem 1rem",
                          color: "#374151",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#e7027e";
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#374151";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/ueber-uns"
                style={{
                  padding: "0.5rem 0",
                  fontWeight: 500,
                  color: isScrolled ? "#374151" : "white",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = isScrolled
                    ? "#e7027e"
                    : "#e5e7eb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isScrolled
                    ? "#374151"
                    : "white")
                }
              >
                Über uns
              </a>

              <a
                href="/referenzen"
                style={{
                  padding: "0.5rem 0",
                  fontWeight: 500,
                  color: isScrolled ? "#374151" : "white",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = isScrolled
                    ? "#e7027e"
                    : "#e5e7eb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isScrolled
                    ? "#374151"
                    : "white")
                }
              >
                Referenzen
              </a>

              {/* Contact Button */}
              <a
                href="/kontakt"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#e7027e",
                  color: "white",
                  padding: "0.75rem 1rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#bc0263")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e7027e")
                }
              >
                <Hand size={16} />
                Kontakt
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: "block",
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="mobile-menu-btn"
            >
              <svg
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: isScrolled ? "#374151" : "white",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              style={{
                backgroundColor: "white",
                borderTop: "1px solid #e5e7eb",
              }}
              className="mobile-menu"
            >
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontWeight: 500,
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Leistungen
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginLeft: "1rem",
                    }}
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        style={{
                          fontSize: "0.875rem",
                          color: "#6b7280",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#e7027e")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#6b7280")
                        }
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href="/ueber-uns"
                  style={{ color: "#111827", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#e7027e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#111827")
                  }
                >
                  Über uns
                </a>
                <a
                  href="/referenzen"
                  style={{ color: "#111827", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#e7027e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#111827")
                  }
                >
                  Referenzen
                </a>
                <a
                  href="/kontakt"
                  style={{
                    color: "#e7027e",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section
            style={{
              position: "relative",
              minHeight: "540px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hero-section"
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage:
                  "url(https://res.cloudinary.com/dwlk9of7h/image/upload/w_1920,h_800,c_fill,q_auto,f_auto/v1748344821/comprised_m7hork.avif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "2.4/1",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                textAlign: "center",
                color: "white",
                maxWidth: "72rem",
                margin: "0 auto",
                padding: "7rem 1rem 5rem",
              }}
            >
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                className="hero-title"
              >
                Ihr Reinigungsservice in Winterthur für Präzision, Sauberkeit &
                Begeisterung
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.95)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                  maxWidth: "48rem",
                  margin: "0 auto 1.5rem",
                }}
                className="hero-subtitle"
              >
                Mit mehr als 10 Jahren Erfahrung gestaltet CleanWin saubere
                Räume, Fassaden und mehr.
              </p>

              {/* Google Rating Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 1rem",
                  marginBottom: "2rem",
                }}
              >
                <svg
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.5rem",
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
                <div style={{ display: "flex", marginRight: "0.5rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      style={{ color: "#fbbf24", fill: "#fbbf24" }}
                    />
                  ))}
                </div>
                <span style={{ fontWeight: 500 }}>5.0 Google</span>
              </div>

              <div>
                <a
                  href="/kontakt"
                  style={{
                    display: "inline-block",
                    backgroundColor: "white",
                    color: "#374151",
                    padding: "1rem 2rem",
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Jetzt unverbindlich kontaktieren
                </a>
              </div>
            </div>
          </section>

          {/* About Services Section */}
          <section style={{ backgroundColor: "#f9fafb", padding: "4rem 0" }}>
            <div
              style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
                className="about-grid"
              >
                <div>
                  <h2
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 700,
                      color: "#111827",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Regionaler Reinigungsbetrieb für Privat, Gewerbe & Industrie
                  </h2>
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                    }}
                  >
                    CleanWin ist Ihr vertrauensvoller Partner für professionelle
                    Reinigungsdienstleistungen in der Region Winterthur. Seit
                    über 10 Jahren bieten wir umfassende Lösungen für
                    Fensterreinigung, Büroreinigung, Fassadenreinigung und
                    Spezialreinigungen. Unser erfahrenes Team arbeitet mit
                    modernsten Techniken und umweltfreundlichen Produkten, um
                    höchste Qualität und Kundenzufriedenheit zu gewährleisten.
                  </p>
                  <a
                    href="#services"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#e7027e",
                      color: "white",
                      padding: "0.75rem 2rem",
                      borderRadius: "0.5rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#bc0263")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#e7027e")
                    }
                  >
                    Leistungen Entdecken
                  </a>
                </div>

                <div style={{ position: "relative" }}>
                  <img
                    src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1748417853/ross-samir-farbxpress_gsnje4.avif"
                    alt="CleanWin Team"
                    style={{
                      width: "100%",
                      height: "20rem",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(4px)",
                      borderRadius: "0.5rem",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <div style={{ fontWeight: 600, color: "#111827" }}>
                      Unser erfahrenes Team
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                      Über 10 Jahre Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why CleanWin Section */}
          <section
            style={{
              background: "linear-gradient(to bottom right, #eddde5, #f7f2f5)",
              padding: "4rem 0",
            }}
          >
            <div
              style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "1rem",
                  }}
                >
                  Warum CleanWin wählen?
                </h2>
                <p
                  style={{
                    color: "#6b7280",
                    maxWidth: "32rem",
                    margin: "0 auto",
                  }}
                >
                  Vertrauen Sie auf unsere langjährige Erfahrung und
                  professionelle Arbeitsweise
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
                  gap: "2rem",
                }}
              >
                {whyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "0.75rem",
                      padding: "1.5rem",
                      textAlign: "center",
                      transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(231, 2, 126, 0.1)",
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <feature.icon size={32} style={{ color: "#e7027e" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        color: "#111827",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "0.875rem",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section
            id="services"
            style={{ backgroundColor: "white", padding: "4rem 0" }}
          >
            <div
              style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "1rem",
                  }}
                >
                  Unsere Leistungen
                </h2>
                <p
                  style={{
                    color: "#6b7280",
                    maxWidth: "32rem",
                    margin: "0 auto",
                  }}
                >
                  Professionelle Reinigungsdienstleistungen für jeden Bedarf
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
                  gap: "2rem",
                }}
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0.75rem",
                      overflow: "hidden",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #f3f4f6",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.borderColor = "#e7027e";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = "#f3f4f6";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src={service.image}
                        alt={service.name}
                        style={{
                          width: "100%",
                          height: "12rem",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          color: "white",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            marginBottom: "0.25rem",
                          }}
                        >
                          {service.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            opacity: 0.9,
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Google Reviews Section */}
          <section
            style={{
              background: "linear-gradient(to bottom right, #eddde5, #f7f2f5)",
              padding: "4rem 0",
            }}
          >
            <div
              style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}
            >
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "1rem",
                  }}
                >
                  Das sagen unsere Kunden
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        style={{ color: "#fbbf24", fill: "#fbbf24" }}
                      />
                    ))}
                  </div>
                  <span style={{ color: "#6b7280" }}>
                    5.0 von 5 Sternen auf Google
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
                  gap: "2rem",
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(4px)",
                      borderRadius: "0.75rem",
                      padding: "1.5rem",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          style={{ color: "#fbbf24", fill: "#fbbf24" }}
                        />
                      ))}
                    </div>
                    <blockquote
                      style={{
                        color: "#374151",
                        marginBottom: "1rem",
                        fontStyle: "italic",
                      }}
                    >
                      "{review.text}"
                    </blockquote>
                    <div style={{ fontSize: "0.875rem" }}>
                      <div style={{ fontWeight: 600, color: "#111827" }}>
                        {review.name}
                      </div>
                      <div style={{ color: "#6b7280" }}>{review.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section style={{ position: "relative", padding: "6rem 0" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage:
                  "url(https://res.cloudinary.com/dwlk9of7h/image/upload/f_webp,q_90,w_1920,h_600,c_fill/v1748418221/farbxpress-footerImage_l29cqf.avif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                maxWidth: "72rem",
                margin: "0 auto",
                padding: "0 1rem",
              }}
            >
              <div style={{ maxWidth: "48rem" }}>
                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "2rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  CleanWin – persönlich, zuverlässig, hochwertig
                </h2>
                <a
                  href="/kontakt"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#e7027e",
                    color: "white",
                    padding: "1rem 2rem",
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#bc0263";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#e7027e";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Jetzt unverbindlich kontaktieren
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: "#111827", color: "white" }}>
          <div
            style={{
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "3rem 1rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
                gap: "2rem",
              }}
            >
              {/* Company Info */}
              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  CleanWin GmbH
                </h3>
                <div
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    marginBottom: "1rem",
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
                    gap: "0.5rem",
                  }}
                >
                  <a
                    href="tel:+41522020100"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#e7027e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9ca3af")
                    }
                  >
                    <Phone size={16} />
                    +41 52 202 01 00
                  </a>
                  <div style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                    info@cleanwin.ch
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4
                  style={{
                    fontWeight: 500,
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  Leistungen
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      style={{
                        fontSize: "0.875rem",
                        color: "#9ca3af",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#e7027e")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#9ca3af")
                      }
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h4
                  style={{
                    fontWeight: 500,
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  Servicegebiete
                </h4>
                <div style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
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
                    fontWeight: 500,
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  Weitere Services
                </h4>
                <div style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                  <div>24/7 Notfallreinigung</div>
                  <div>Kostenlose Besichtigung</div>
                  <div>Individuelle Angebote</div>
                  <div>Regelmäßige Termine</div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div
              style={{
                borderTop: "1px solid #374151",
                marginTop: "2rem",
                paddingTop: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.875rem",
                color: "#9ca3af",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <span>© 2025 CleanWin. Alle Rechte vorbehalten.</span>
                <span>Gemacht mit ♥️ in Winterthur</span>
              </div>
              <a
                href="/datenschutz"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e7027e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          h1 {
            font-size: 5rem !important;
          }
          .cta h2 {
            font-size: 6rem !important;
          }
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
    },
    revalidate: 3600,
  };
};
