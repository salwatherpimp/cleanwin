import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  DollarSign,
  MessageCircle,
  Shield,
} from "lucide-react";

interface HomePageProps {
  buildTime: string;
}

export default function HomePage({ buildTime }: HomePageProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessHours, setIsBusinessHours] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWhyIndex, setCurrentWhyIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(-1);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial setup
    if (typeof window !== "undefined") {
      handleResize();
      handleScroll(); // Initial scroll position check
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    checkBusinessHours();

    // Auto-rotation for reviews carousel
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    // Auto-rotation for why carousel (desktop only)
    const whyInterval = setInterval(() => {
      if (!isMobile) {
        setCurrentWhyIndex((prev) => (prev + 1) % whyFeatures.length);
      }
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearInterval(reviewInterval);
      clearInterval(whyInterval);
    };
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length,
    );
  };

  // Calculate transform based on screen size
  const getCarouselTransform = () => {
    if (isMobile) {
      // Mobile: 1 card visible
      return `translateX(-${currentReviewIndex * 100}%)`;
    } else {
      // Desktop: 3 cards visible
      return `translateX(-${currentReviewIndex * (100 / 3)}%)`;
    }
  };

  const services = [
    {
      name: "Fensterreinigung",
      href: "/leistungen/fensterreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-malen_gdvdci.avif",
      description:
        "Kristallklare Fenster mit professioneller Reinigungstechnik.",
    },
    {
      name: "Büroreinigung",
      href: "/leistungen/bueroreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1750015382/altbauwohnung-meilen_lrttoc.avif",
      description:
        "Hygienische und gründliche Büroreinigung für Ihr Unternehmen.",
    },
    {
      name: "Fassadenreinigung",
      href: "/leistungen/fassadenreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1749930415/verputz-malerarbeiten-duebendorf-1_zxk4wi.avif",
      description: "Schonende Fassadenreinigung für alle Oberflächentypen.",
    },
    {
      name: "Umzugsreinigung",
      href: "/leistungen/umzugsreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-tapezieren_jvtgyo.avif",
      description: "Professionelle Endreinigung für Ihren stressfreien Umzug.",
    },
    {
      name: "Baureinigung",
      href: "/leistungen/baureinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-spritzen_ij8jsj.avif",
      description: "Gründliche Baureinigung nach Renovierung und Neubau.",
    },
    {
      name: "Weitere Dienstleistungen",
      href: "/leistungen/weitere-dienstleistungen",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill/v1748417852/farbxpress-weitereLeistungen_cyduu7.avif",
      description:
        "Erfahren Sie mehr über unsere Zusatzleistungen und Spezialdienste.",
    },
  ];

  const whyFeatures = [
    {
      icon: Award,
      title: "Regional & persönlich",
      description:
        "Wir sind in Winterthur zuhause. Persönlich, nah und immer für Sie erreichbar.",
    },
    {
      icon: Heart,
      title: "Sicher & versichert",
      description:
        "Volle Versicherung und geschultes Team - damit Sie sorgenfrei entspannen können.",
    },
    {
      icon: Clock,
      title: "Nachhaltig & schonend",
      description:
        "Umweltfreundliche Reinigungs-methode durch Umkehrosmose-Technik. Gut für Sie und die Natur.",
    },
    {
      icon: MapPin,
      title: "Flexibel & zuverlässig",
      description:
        "Von früh bis spät - wir richten uns stet nach Ihrem Alltag. Immer pünktlich.",
    },
  ];

  const reviews = [
    {
      name: "Ursula Wirtz",
      text: "Ein engagiertes team,flexibel, zuverlässig, kreativ.Ich bin sehr zufrieden mit der sorgfältigen Ausführung und werde farbexpress immer wieder gern für mein Haus engagieren.",
      rating: 5,
    },
    {
      name: "Johanna Kelts",
      text: "Effizient, sehr professionell, sauber und zu einem zahlbaren Preis: So darf ich die Arbeit dieser beiden sympathischen Berufsleute zusammenfassen. Sie haben eine Wohnung in meinem über 200 Jahre alten MFH neu gestrichen. Die Aufgabe, Wände und Einbauschränke mit vielen Ecken und Kanten, Holztäfer, sowie Gips- und Mauerwerk kostengünstig und doch perfekt zu streichen, war nicht unbedingt einfach. Der Auftrag wurde jedoch zu meiner vollsten Zufriedenheit erledigt. Ich kann diese Firma wirklich sehr empfehlen!",
      rating: 5,
    },
    {
      name: "Frau achternbusch",
      text: "Für unser neues Restaurant, haben wir ein passendes Farbkonzept gesucht. Durch die Kompetente Beratung von Herr Niedehauser konnten wir unsere Vorstellungen zu einem fairen Preis umsetzen.",
      rating: 5,
    },
    {
      name: "Domi Fuchs",
      text: "Farbxpress hat unsere neue wohnung gestrichen in nur einem tag. Alles zu unserer besten zufriedenheit. Unkompliziert, speditiv und top qualit��t. Bin ich mir so nicht gewohnt ;) sehr zu empfehlen!!!",
      rating: 5,
    },
    {
      name: "Beat Von Niederhäusern",
      text: "Perfekt. Tadellose Arbeit. Effizient, schnell, sauber, freundlich, rücksichtsvoll. Wir sind restlos zufrieden mit der Ausführung. Sehr gerne wieder.",
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

        {/* Core Web Vitals Optimierungen */}

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />

        {/* Preload kritische Ressourcen */}

        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752003683/cleanwin-logo_ysvfv0.avif"
          fetchpriority="high"
        />

        {/* SEO & Google Crawling */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://cleanwin.ch/" />

        {/* Structured Data für Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CleanWin GmbH",
              description:
                "Professionelle Reinigungsservices in Winterthur - Fensterreinigung, Büroreinigung, Fassadenreinigung und mehr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rychenbergstrasse 223",
                addressLocality: "Winterthur",
                postalCode: "8404",
                addressCountry: "CH",
              },
              telephone: "+41522020100",
              email: "info@cleanwin.ch",
              url: "https://cleanwin.ch",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 47.4979,
                  longitude: 8.7226,
                },
                geoRadius: "50000",
              },
            }),
          }}
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
            backgroundColor: isScrolled ? "white" : "rgba(255, 255, 255, 0.1)",
            backdropFilter: isScrolled ? "none" : "blur(8px)",
            boxShadow: isScrolled
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
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
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752003683/cleanwin-logo_ysvfv0.avif"
                alt="CleanWin Logo"
                width={200}
                height={56}
                priority
                style={{
                  height: isMobile ? "2.5rem" : "3.5rem",
                  width: "auto",
                  marginLeft: isMobile ? "-1rem" : "0",
                }}
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
                    fontSize: "16px",
                    color: isScrolled ? "#374151" : "white",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = isScrolled
                      ? "#10a0a4"
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
                          e.currentTarget.style.color = "#10a0a4";
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
                  fontSize: "16px",
                  color: isScrolled ? "#374151" : "white",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  textShadow: isScrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = isScrolled
                    ? "#10a0a4"
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
                  fontSize: "16px",
                  color: isScrolled ? "#374151" : "white",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  textShadow: isScrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = isScrolled
                    ? "#10a0a4"
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
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "0.75rem 1rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0d7a7e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#10a0a4")
                }
              >
                <Hand size={16} />
                Kontaktiere uns
              </a>
            </nav>

            {/* Mobile CTA Button - only visible on mobile */}
            {isMobile && (
              <a
                href="/kontakt"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "0.75rem 1rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0d7a7e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#10a0a4")
                }
              >
                <Hand size={16} />
                Kontaktiere uns
              </a>
            )}

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

          {/* Mobile Menu Card */}
          {isMobileMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: "1rem",
                left: "1rem",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow:
                  "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e5e7eb",
                zIndex: 50,
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
                      fontWeight: 400,
                      color: "#374151",
                      marginBottom: "0.5rem",
                      fontSize: "16px",
                      fontFamily: "Inter, sans-serif",
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
                          fontSize: "16px",
                          color: "#374151",
                          textDecoration: "none",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#10a0a4")
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
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#10a0a4")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Über uns
                </a>
                <a
                  href="/referenzen"
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#10a0a4")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Referenzen
                </a>
                <a
                  href="/kontakt"
                  style={{
                    color: "#374151",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#10a0a4")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#374151")
                  }
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            height: "550px",
            marginTop: "-80px",
            paddingTop: "80px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            left: "50%",
            marginLeft: "-50vw",
          }}
          className="hero-section"
        >
          <Image
            src={`https://res.cloudinary.com/dwlk9of7h/image/upload/w_${isMobile ? "800" : "1200"},h_${isMobile ? "480" : "600"},c_fill,f_auto,q_auto/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif`}
            alt="CleanWin Hero Background"
            fill
            priority
            unoptimized={true}
            sizes="100vw"
            fetchpriority="high"
            style={{
              objectFit: "cover",
              objectPosition: isMobile ? "55% 50%" : "60% 50%",
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
              padding: "4rem 1rem 1.5rem",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                fontWeight: 800,
                margin: "0 0 1rem 0",
                lineHeight: "1.2",
                textShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
              className="hero-title"
            >
              Ihr Reinigungsservice in Winterthur für Präzision, Sauberkeit &
              Begeisterung
            </h1>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.95)",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
                maxWidth: "48rem",
                margin: "0 auto 1.5rem",
              }}
              className="hero-subtitle"
            >
              Mit mehr als 10 Jahren Erfahrung gestaltet CleanWin saubere Räume,
              Fassaden und mehr.
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
                padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
                marginBottom: isMobile ? "1.5rem" : "2rem",
              }}
            >
              <svg
                style={{
                  width: isMobile ? "1.5rem" : "2rem",
                  height: isMobile ? "1.5rem" : "2rem",
                  marginRight: isMobile ? "0.4rem" : "0.5rem",
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
                <div style={{ display: "flex" }}>
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      size={isMobile ? 14 : 16}
                      style={{ color: "#fbbf24", fill: "#fbbf24" }}
                    />
                  ))}
                  {/* Half star */}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <Star
                      size={isMobile ? 14 : 16}
                      style={{ color: "#e5e7eb", fill: "#e5e7eb" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <Star
                        size={isMobile ? 14 : 16}
                        style={{ color: "#fbbf24", fill: "#fbbf24" }}
                      />
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: isMobile ? "10px" : "11px",
                    opacity: 0.8,
                    lineHeight: 1.2,
                  }}
                >
                  4.7 aus +110 Bewertungen
                </span>
              </div>
            </div>

            <div>
              <a
                href="/kontakt"
                style={{
                  display: "inline-block",
                  backgroundColor: "white",
                  color: "#374151",
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "14px",
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

        {/* USP Features Section */}
        <section
          style={{
            backgroundColor: "#f9fafb",
            padding: isMobile ? "0.75rem 0" : "1rem 0",
            borderTop: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            {/* Desktop: Fixed horizontal layout */}
            {!isMobile && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                {[
                  {
                    icon: "DollarSign",
                    text: "Reinigung ab CHF 199.-",
                    subtitle: "Transparente Preise",
                  },
                  {
                    icon: "MessageCircle",
                    text: "Kostenlose Fachberatung",
                    subtitle: "Unverbindlich & persönlich",
                  },
                  {
                    icon: "Shield",
                    text: "100% keine Schwarzarbeit",
                    subtitle: "Seriös & versichert",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      backgroundColor: "white",
                      borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                      border: "1px solid rgba(16, 160, 164, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(16, 160, 164, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 8px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "rgba(16, 160, 164, 0.1)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {feature.icon === "DollarSign" && (
                        <DollarSign size={18} style={{ color: "#10a0a4" }} />
                      )}
                      {feature.icon === "MessageCircle" && (
                        <MessageCircle size={18} style={{ color: "#10a0a4" }} />
                      )}
                      {feature.icon === "Shield" && (
                        <Shield size={18} style={{ color: "#10a0a4" }} />
                      )}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#111827",
                          marginBottom: "2px",
                        }}
                      >
                        {feature.text}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#6b7280",
                        }}
                      >
                        {feature.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mobile: Horizontal rotating carousel */}
            {isMobile && (
              <div
                style={{
                  position: "relative",
                  height: "45px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    animation: "horizontalCarousel 15s infinite linear",
                    gap: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* Render features 3 times for seamless loop */}
                  {Array(3)
                    .fill([
                      {
                        icon: "DollarSign",
                        text: "Reinigung ab CHF 199.-",
                      },
                      {
                        icon: "MessageCircle",
                        text: "Kostenlose Fachberatung",
                      },
                      {
                        icon: "Shield",
                        text: "100% keine Schwarzarbeit",
                      },
                    ])
                    .flat()
                    .map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.5rem 0.75rem",
                          backgroundColor: "white",
                          borderRadius: "8px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                          border: "1px solid rgba(16, 160, 164, 0.1)",
                          minWidth: "200px",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            backgroundColor: "rgba(16, 160, 164, 0.1)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {feature.icon === "DollarSign" && (
                            <DollarSign
                              size={14}
                              style={{ color: "#10a0a4" }}
                            />
                          )}
                          {feature.icon === "MessageCircle" && (
                            <MessageCircle
                              size={14}
                              style={{ color: "#10a0a4" }}
                            />
                          )}
                          {feature.icon === "Shield" && (
                            <Shield size={14} style={{ color: "#10a0a4" }} />
                          )}
                        </div>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#111827",
                          }}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* About Services Section */}
          <section
            style={{
              backgroundColor: "#f9fafb",
              padding: isMobile ? "1rem 0" : "1.5rem 0",
              width: "100vw",
              position: "relative",
              left: "50%",
              marginLeft: "-50vw",
            }}
          >
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
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#111827",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Regionaler Reinigungsbetrieb für Privat, Gewerbe & Industrie
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
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
                    h��chste Qualit��t und Kundenzufriedenheit zu gewährleisten.
                  </p>
                  <a
                    href="#services"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#10a0a4",
                      color: "white",
                      padding: "0.75rem 2rem",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#0d7a7e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#10a0a4")
                    }
                  >
                    Leistungen Entdecken
                  </a>
                </div>

                {/* Feature Grid 2x2 - Pure Images */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    width: "100%",
                  }}
                >
                  {/* Feature 1 */}
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      height: "120px",
                    }}
                  >
                    <Image
                      src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_300,c_fill,f_auto,q_auto/v1752095182/Firmenwagen_vor_Geba%CC%88ude_zz0m0s.avif"
                      alt="Cleaning Service"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>

                  {/* Feature 2 */}
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      height: "120px",
                    }}
                  >
                    <Image
                      src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_300,c_fill,f_auto,q_auto/v1752095182/Glasreinigung_aussen_Flaach_ec1fre.avif"
                      alt="Office Cleaning"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>

                  {/* Feature 3 */}
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      height: "120px",
                    }}
                  >
                    <Image
                      src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_300,c_fill,f_auto,q_auto/v1752005906/homepage-herosection_fsxqwc.avif"
                      alt="Professional Cleaning"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>

                  {/* Feature 4 */}
                  <div
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      height: "120px",
                    }}
                  >
                    <Image
                      src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_300,c_fill,f_auto,q_auto/v1752095182/Fassadenreinigung_Sichtbeton_vm1lsq.avif"
                      alt="Home Cleaning"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Logos Section */}
          <section
            style={{
              backgroundColor: "#f9fafb",
              padding: isMobile ? "32px 0" : "48px 0",
              borderTop: "1px solid #e5e7eb",
              borderBottom: "1px solid #e5e7eb",
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
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "14px" : "16px",
                  fontWeight: 400,
                  color: "#6b7280",
                  marginBottom: isMobile ? "24px" : "32px",
                  textAlign: "center",
                }}
              >
                Über 500 Firmen & Haushalte die mit Cleanwin reinigen
              </p>

              {/* Desktop: 6 logos in a row */}
              {!isMobile && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: "32px",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  {[
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png",
                  ].map((logoUrl, index) => (
                    <div
                      key={index}
                      style={{
                        width: "120px",
                        height: "60px",
                        backgroundImage: `url(${logoUrl})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        opacity: 0.7,
                        transition: "opacity 0.3s ease",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "0.7")
                      }
                    />
                  ))}
                </div>
              )}

              {/* Mobile: 3x2 grid */}
              {isMobile && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  {[
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png",
                    "https://res.cloudinary.com/dwlk9of7h/image/upload/w_160,h_80,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png",
                  ].map((logoUrl, index) => (
                    <div
                      key={index}
                      style={{
                        width: "80px",
                        height: "40px",
                        backgroundImage: `url(${logoUrl})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        opacity: 0.7,
                        borderRadius: "6px",
                        border: "1px solid #e5e7eb",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Why CleanWin Section */}
          <section
            style={{
              background: "linear-gradient(to bottom right, #eddde5, #f7f2f5)",
              padding: isMobile ? "1rem 0" : "1.5rem 0",
              position: "relative",
              overflow: "hidden",
              width: "100vw",
              left: "50%",
              marginLeft: "-50vw",
            }}
            className="why-section"
          >
            <div
              style={{
                maxWidth: "1152px",
                margin: "0 auto",
                padding: "0 16px",
              }}
            >
              {/* Header */}
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "1.5rem",
                  }}
                >
                  Warum Cleanwin wählen?
                </h2>
              </div>

              {/* Desktop: Grid Layout */}
              {!isMobile && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "16px",
                    width: "100%",
                    marginTop: "1.5rem",
                  }}
                >
                  {whyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        padding: "16px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Header Row (Title + Icon) */}
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
                            fontFamily: "Inter, sans-serif",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#111827",
                            margin: 0,
                            flexGrow: 1,
                          }}
                        >
                          {feature.title}
                        </h3>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "rgba(231, 2, 126, 0.1)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "12px",
                            flexShrink: 0,
                          }}
                        >
                          <feature.icon
                            size={20}
                            style={{ color: "#10a0a4" }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#4b5563",
                          lineHeight: 1.625,
                          margin: 0,
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile: Accordion */}
              {isMobile && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "1.5rem",
                  }}
                >
                  {whyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() =>
                          setExpandedAccordion(
                            expandedAccordion === index ? -1 : index,
                          )
                        }
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "16px",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {/* Left Section (Icon + Title) */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "rgba(231, 2, 126, 0.1)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <feature.icon
                              size={20}
                              style={{ color: "#10a0a4" }}
                            />
                          </div>
                          <h3
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              fontWeight: 600,
                              color: "#111827",
                              margin: 0,
                            }}
                          >
                            {feature.title}
                          </h3>
                        </div>

                        {/* Right Section (Plus/X Icon) */}
                        <div style={{ flexShrink: 0 }}>
                          {expandedAccordion === index ? (
                            <X
                              size={20}
                              style={{
                                color: "#4b5563",
                                transition: "transform 200ms ease",
                              }}
                            />
                          ) : (
                            <Plus
                              size={20}
                              style={{
                                color: "#4b5563",
                                transition: "transform 200ms ease",
                              }}
                            />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <div
                        style={{
                          overflow: "hidden",
                          transition: "all 300ms ease-in-out",
                          maxHeight:
                            expandedAccordion === index ? "384px" : "0",
                          opacity: expandedAccordion === index ? 1 : 0,
                        }}
                      >
                        <div style={{ padding: "0 16px 16px" }}>
                          <p
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              fontWeight: 400,
                              color: "#4b5563",
                              lineHeight: 1.625,
                              margin: 0,
                            }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Services Grid */}
          <section
            id="leistungen"
            style={{
              backgroundColor: "#f9fafb",
              padding: isMobile ? "1rem 0" : "1.25rem 0",
              width: "100vw",
              position: "relative",
              left: "50%",
              marginLeft: "-50vw",
            }}
          >
            <div
              style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "1.5rem",
                  }}
                  className="section-title"
                >
                  Unsere Leistungen
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
                  gap: "2rem",
                }}
                className="services-grid"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.borderColor = "#10a0a4";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src={service.image}
                        alt={service.name}
                        style={{
                          width: "100%",
                          height: "12rem",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
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
                            "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
                        }}
                      />
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "#111827",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {service.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#4b5563",
                          lineHeight: 1.5,
                        }}
                      >
                        {service.description}
                      </p>
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
              padding: "3rem 0",
              width: "100vw",
              left: "50%",
              marginLeft: "-50vw",
              position: "relative",
            }}
          >
            <div
              style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "1.5rem",
                  }}
                  className="section-title"
                >
                  Das sagen unsere Kunden
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#111827",
                    maxWidth: "48rem",
                    margin: "0 auto 2rem",
                    lineHeight: 1.6,
                  }}
                  className="reviews-subtitle"
                >
                  ��berzeugen Sie sich von der Qualit��t unserer Arbeit und
                  senden sie uns noch heute eine unverbindliche Kontaktanfrage.
                </p>
              </div>

              {/* Reviews Carousel */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      transform: getCarouselTransform(),
                      transition: "transform 0.5s ease-in-out",
                    }}
                    className="reviews-carousel"
                  >
                    {/* Triple the content for infinite scroll effect */}
                    {[...reviews, ...reviews, ...reviews].map(
                      (review, index) => (
                        <div
                          key={index}
                          style={{
                            minWidth: isMobile ? "100%" : "33.333%",
                            padding: "0 0.75rem",
                          }}
                          className="review-card-container"
                        >
                          <div
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.9)",
                              backdropFilter: "blur(4px)",
                              border: "2px solid rgba(255, 255, 255, 0.2)",
                              borderRadius: "8px",
                              padding: "16px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              transition: "all 0.3s ease",
                              height: "200px",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow =
                                "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                              e.currentTarget.style.borderColor =
                                "rgba(255, 255, 255, 0.4)";
                              e.currentTarget.style.transform =
                                "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow =
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                              e.currentTarget.style.borderColor =
                                "rgba(255, 255, 255, 0.2)";
                              e.currentTarget.style.transform = "translateY(0)";
                            }}
                          >
                            {/* Profile Photo & Stars Header */}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "12px",
                              }}
                            >
                              {/* Reviewer Profile Photo */}
                              <div
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  borderRadius: "50%",
                                  backgroundColor: "#10a0a4",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "white",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  flexShrink: 0,
                                  boxShadow: "0 2px 8px rgba(231, 2, 126, 0.3)",
                                }}
                              >
                                {review.name.charAt(0)}
                              </div>

                              {/* Stars */}
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    marginBottom: "4px",
                                  }}
                                >
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={16}
                                      style={{
                                        color: "#fbbf24",
                                        fill: "#fbbf24",
                                      }}
                                    />
                                  ))}
                                </div>
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "#6b7280",
                                    fontWeight: 500,
                                  }}
                                >
                                  Google Bewertung
                                </div>
                              </div>
                            </div>

                            {/* Review Text */}
                            <div
                              style={{
                                color: "#1f2937",
                                fontSize: "14px",
                                lineHeight: 1.5,
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 400,
                                marginBottom: "8px",
                                overflow: "hidden",
                                height: "63px",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                fontStyle: "italic",
                                position: "relative",
                              }}
                            >
                              "
                              {review.text.length > 120
                                ? review.text.substring(0, 120) + "..."
                                : review.text}
                              "
                            </div>

                            {/* Author Name - ALWAYS VISIBLE */}
                            <div
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 700,
                                fontSize: "14px",
                                color: "#111827",
                                paddingTop: "8px",
                                borderTop: "1px solid #10a0a4",
                                backgroundColor: "#fff",
                                textAlign: "left",
                                position: "absolute",
                                bottom: "8px",
                                left: "16px",
                                right: "16px",
                                zIndex: 100,
                              }}
                            >
                              {review.name}
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <button
                    onClick={prevReview}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(4px)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.9)";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <ChevronLeft size={20} style={{ color: "#111827" }} />
                  </button>
                  <button
                    onClick={nextReview}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(4px)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.9)";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <ChevronRight size={20} style={{ color: "#111827" }} />
                  </button>
                </div>
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
                backgroundImage: `url(https://res.cloudinary.com/dwlk9of7h/image/upload/w_${isMobile ? "800" : "1200"},h_${isMobile ? "400" : "600"},c_fill,f_auto,q_auto/v1752099054/dobiinter_Close-up_of_a_rooftop_solar_panel_being_cleaned_wit_97f39d77-a81d-432b-ad05-4fc38a9dafcc_1_uqh2ui.avif)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "2rem",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Cleanwin - persönlich, zuverlässig, hochwertig
                </h2>
                <a
                  href="/kontakt"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#10a0a4",
                    color: "white",
                    padding: "1rem 2rem",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0d7a7e";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#10a0a4";
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
        <footer
          style={{
            backgroundColor: "#111827",
            color: "white",
            width: "100vw",
            position: "relative",
            left: "50%",
            marginLeft: "-50vw",
          }}
        >
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
                      (e.currentTarget.style.color = "#10a0a4")
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
                        (e.currentTarget.style.color = "#10a0a4")
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
                  <div>Regelm���ßige Termine</div>
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
                <span>�� 2025 CleanWin. Alle Rechte vorbehalten.</span>
                <span>Gemacht mit ♥️ in Winterthur</span>
              </div>
              <a
                href="/datenschutz"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#10a0a4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .mobile-logos-scroll {
          animation: scroll 16s linear infinite;
        }

        .review-text-clamp {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          color: #1f2937;
          margin-bottom: 8px;
          word-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
          text-overflow: ellipsis;
          max-height: 63px; /* 14px * 1.5 * 3 lines = 63px */
        }

        /* Fallback for browsers that don't support line-clamp */
        @supports not (-webkit-line-clamp: 3) {
          .review-text-clamp {
            max-height: 63px;
            overflow: hidden;
            position: relative;
          }
          .review-text-clamp::after {
            content: "...";
            position: absolute;
            bottom: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            padding-left: 20px;
            width: 30px;
            text-align: right;
          }
        }

        .review-author {
          font-family: Inter, sans-serif !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          color: #111827 !important;
          margin-top: auto !important;
          padding-top: 8px !important;
          display: block !important;
          visibility: visible !important;
        }

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
            align-items: center !important;
          }
          .hero-section {
            height: 550px !important;
            margin-top: -80px !important;
            padding-top: 80px !important;
          }
          .hero-title {
            font-size: 40px !important;
            line-height: 1.2 !important;
          }
          .hero-subtitle {
            font-size: 1.25rem !important;
          }
          .section-title {
            font-size: 28px !important;
          }
          .reviews-subtitle {
            font-size: 1.25rem !important;
          }
          .why-title {
            font-size: 1.875rem !important;
          }
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .reviews-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .company-logos {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .review-card-container {
            min-width: 33.333% !important;
          }
          .reviews-carousel {
            transform: translateX(
              -${currentReviewIndex * (100 / 3)}%
            ) !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            height: 480px !important;
            margin-top: -80px !important;
            padding-top: 80px !important;
          }
          .hero-title {
            font-size: 25px !important;
            line-height: 1.2 !important;
          }
          .hero-section > img,
          .hero-section img[alt="CleanWin Hero Background"] {
            object-position: 50% 60% !important;
          }
          h2 {
            font-size: 22px !important;
          }
          .company-logos {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
          .review-card-container {
            min-width: 100% !important;
          }
          .reviews-carousel {
            transform: translateX(-${currentReviewIndex * 100}%) !important;
          }
        }

        @keyframes horizontalCarousel {
          0% {
            transform: translateY(-50%) translateX(0);
          }
          100% {
            transform: translateY(-50%) translateX(-33.333%);
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
