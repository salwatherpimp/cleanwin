import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";

// Example: Generate 20 cleaning service pages dynamically
const services = [
  {
    slug: "buero-reinigung",
    name: "Büro-Reinigung",
    description: "Professionelle Büroreinigung in Winterthur",
  },
  {
    slug: "wohnungsreinigung",
    name: "Wohnungsreinigung",
    description: "Gründliche Wohnungsreinigung für Privatkunden",
  },
  {
    slug: "fensterreinigung",
    name: "Fensterreinigung",
    description: "Streifenfreie Fensterreinigung für klare Sicht",
  },
  {
    slug: "teppichreinigung",
    name: "Teppichreinigung",
    description: "Tiefenreinigung für alle Teppicharten",
  },
  {
    slug: "polsterreinigung",
    name: "Polsterreinigung",
    description: "Schonende Reinigung von Polstermöbeln",
  },
  {
    slug: "baureinigung",
    name: "Baureinigung",
    description: "Endreinigung nach Bau- und Renovierungsarbeiten",
  },
  {
    slug: "praxisreinigung",
    name: "Praxisreinigung",
    description: "Hygienische Reinigung für Arztpraxen",
  },
  {
    slug: "hotelreinigung",
    name: "Hotelreinigung",
    description: "Professionelle Hotelreinigung für Gastgewerbe",
  },
  {
    slug: "ladenreinigung",
    name: "Ladenreinigung",
    description: "Reinigung von Verkaufsräumen und Geschäften",
  },
  {
    slug: "industriereinigung",
    name: "Industriereinigung",
    description: "Reinigung für Produktions- und Lagerhallen",
  },
  {
    slug: "treppenhausreinigung",
    name: "Treppenhausreinigung",
    description: "Regelmäßige Treppenhausreinigung",
  },
  {
    slug: "wintergarten-reinigung",
    name: "Wintergarten-Reinigung",
    description: "Spezielle Reinigung für Wintergärten",
  },
  {
    slug: "garage-reinigung",
    name: "Garage-Reinigung",
    description: "Gründliche Garagenreinigung",
  },
  {
    slug: "keller-reinigung",
    name: "Keller-Reinigung",
    description: "Professionelle Kellerreinigung",
  },
  {
    slug: "dachboden-reinigung",
    name: "Dachboden-Reinigung",
    description: "Entstaubung und Reinigung von Dachböden",
  },
  {
    slug: "balkon-reinigung",
    name: "Balkon-Reinigung",
    description: "Reinigung von Balkonen und Terrassen",
  },
  {
    slug: "garten-reinigung",
    name: "Garten-Reinigung",
    description: "Aufräumen und Reinigen von Gartenbereichen",
  },
  {
    slug: "pool-reinigung",
    name: "Pool-Reinigung",
    description: "Professionelle Poolreinigung und -wartung",
  },
  {
    slug: "solar-reinigung",
    name: "Solar-Reinigung",
    description: "Reinigung von Solaranlagen für optimale Effizienz",
  },
  {
    slug: "graffiti-entfernung",
    name: "Graffiti-Entfernung",
    description: "Schonende Entfernung von Graffiti",
  },
];

interface ServicePageProps {
  service: {
    slug: string;
    name: string;
    description: string;
  };
}

export default function ServicePage({ service }: ServicePageProps) {
  return (
    <Layout>
      <Head>
        <title>{service.name} - CleanWin Winterthur</title>
        <meta name="description" content={service.description} />
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
          <header style={{ textAlign: "center", marginBottom: "48px" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              {service.name}
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#6B7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {service.description}
            </p>
          </header>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            <div
              style={{
                backgroundColor: "#F9FAFB",
                padding: "32px",
                borderRadius: "8px",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#111827",
                }}
              >
                Unsere Leistungen
              </h2>
              <ul style={{ lineHeight: "1.6", color: "#374151" }}>
                <li>✓ Professionelle Reinigung</li>
                <li>✓ Umweltfreundliche Reinigungsmittel</li>
                <li>✓ Flexible Terminplanung</li>
                <li>✓ Erfahrenes Team</li>
                <li>✓ Faire Preise</li>
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "#F9FAFB",
                padding: "32px",
                borderRadius: "8px",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#111827",
                }}
              >
                Warum CleanWin?
              </h2>
              <ul style={{ lineHeight: "1.6", color: "#374151" }}>
                <li>🏆 Über 18 Jahre Erfahrung</li>
                <li>🤝 Persönlicher Service</li>
                <li>⏰ Zuverlässig & pünktlich</li>
                <li>📍 Regional in Winterthur</li>
                <li>💯 Zufriedenheitsgarantie</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "linear-gradient(to right, #E7027E, #C9026A)",
              background: "linear-gradient(to right, #E7027E, #C9026A)",
              color: "white",
              padding: "48px 32px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Interesse an {service.name}?
            </h2>
            <p
              style={{ fontSize: "18px", marginBottom: "24px", opacity: "0.9" }}
            >
              Kontaktieren Sie uns für ein unverbindliches Angebot
            </p>
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
              Jetzt anrufen: +41 76 228 80 71
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { service: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = services.find((s) => s.slug === params?.service);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
};
