import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const services = [
  {
    slug: "buero-reinigung",
    name: "Büro-Reinigung",
    description: "Professionelle Büroreinigung in Winterthur",
    icon: "🏢",
  },
  {
    slug: "wohnungsreinigung",
    name: "Wohnungsreinigung",
    description: "Gründliche Wohnungsreinigung für Privatkunden",
    icon: "🏠",
  },
  {
    slug: "fensterreinigung",
    name: "Fensterreinigung",
    description: "Streifenfreie Fensterreinigung für klare Sicht",
    icon: "🪟",
  },
  {
    slug: "teppichreinigung",
    name: "Teppichreinigung",
    description: "Tiefenreinigung für alle Teppicharten",
    icon: "🧽",
  },
  {
    slug: "polsterreinigung",
    name: "Polsterreinigung",
    description: "Schonende Reinigung von Polstermöbeln",
    icon: "🛋️",
  },
  {
    slug: "baureinigung",
    name: "Baureinigung",
    description: "Endreinigung nach Bau- und Renovierungsarbeiten",
    icon: "🏗️",
  },
  {
    slug: "praxisreinigung",
    name: "Praxisreinigung",
    description: "Hygienische Reinigung für Arztpraxen",
    icon: "🏥",
  },
  {
    slug: "hotelreinigung",
    name: "Hotelreinigung",
    description: "Professionelle Hotelreinigung für Gastgewerbe",
    icon: "🏨",
  },
  {
    slug: "ladenreinigung",
    name: "Ladenreinigung",
    description: "Reinigung von Verkaufsräumen und Geschäften",
    icon: "🏪",
  },
  {
    slug: "industriereinigung",
    name: "Industriereinigung",
    description: "Reinigung für Produktions- und Lagerhallen",
    icon: "🏭",
  },
  {
    slug: "treppenhausreinigung",
    name: "Treppenhausreinigung",
    description: "Regelmäßige Treppenhausreinigung",
    icon: "🪜",
  },
  {
    slug: "wintergarten-reinigung",
    name: "Wintergarten-Reinigung",
    description: "Spezielle Reinigung für Wintergärten",
    icon: "🌿",
  },
  {
    slug: "garage-reinigung",
    name: "Garage-Reinigung",
    description: "Gründliche Garagenreinigung",
    icon: "🚗",
  },
  {
    slug: "keller-reinigung",
    name: "Keller-Reinigung",
    description: "Professionelle Kellerreinigung",
    icon: "🏠",
  },
  {
    slug: "dachboden-reinigung",
    name: "Dachboden-Reinigung",
    description: "Entstaubung und Reinigung von Dachböden",
    icon: "🏠",
  },
  {
    slug: "balkon-reinigung",
    name: "Balkon-Reinigung",
    description: "Reinigung von Balkonen und Terrassen",
    icon: "🌺",
  },
  {
    slug: "garten-reinigung",
    name: "Garten-Reinigung",
    description: "Aufräumen und Reinigen von Gartenbereichen",
    icon: "🌱",
  },
  {
    slug: "pool-reinigung",
    name: "Pool-Reinigung",
    description: "Professionelle Poolreinigung und -wartung",
    icon: "🏊",
  },
  {
    slug: "solar-reinigung",
    name: "Solar-Reinigung",
    description: "Reinigung von Solaranlagen für optimale Effizienz",
    icon: "☀️",
  },
  {
    slug: "graffiti-entfernung",
    name: "Graffiti-Entfernung",
    description: "Schonende Entfernung von Graffiti",
    icon: "🎨",
  },
];

export default function ServicesIndex() {
  return (
    <Layout>
      <Head>
        <title>Alle Reinigungsleistungen - CleanWin Winterthur</title>
        <meta
          name="description"
          content="Entdecken Sie alle Reinigungsleistungen von CleanWin in Winterthur. Von Büroreinigung bis Fensterreinigung - professionell und zuverlässig."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        style={{
          fontFamily: '"Work Sans", sans-serif',
          paddingTop: "20px",
          minHeight: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          {/* Header */}
          <header style={{ textAlign: "center", marginBottom: "64px" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Unsere Reinigungsleistungen
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#6B7280",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Professionelle Reinigungsdienstleistungen in Winterthur und
              Umgebung. Über 18 Jahre Erfahrung für höchste Qualität.
            </p>
          </header>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    padding: "24px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.1)";
                    e.currentTarget.style.borderColor = "#E7027E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "8px",
                      textAlign: "center",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: "1.5",
                      textAlign: "center",
                      margin: "0",
                      flexGrow: "1",
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    style={{
                      marginTop: "16px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#E7027E",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Mehr erfahren →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div
            style={{
              backgroundColor: "linear-gradient(to right, #E7027E, #C9026A)",
              background: "linear-gradient(to right, #E7027E, #C9026A)",
              color: "white",
              padding: "48px 32px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Benötigen Sie eine individuelle Beratung?
            </h2>
            <p
              style={{ fontSize: "18px", marginBottom: "24px", opacity: "0.9" }}
            >
              Lassen Sie sich kostenlos beraten und erhalten Sie ein
              unverbindliches Angebot
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:+41762288071"
                style={{
                  backgroundColor: "white",
                  color: "#111827",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                📞 +41 76 228 80 71
              </a>
              <a
                href="mailto:info@cleanwin.ch"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                ✉️ E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
