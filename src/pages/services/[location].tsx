import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";

// Builder.io removed for build compatibility

// Swiss locations for cleaning services
const locations = [
  {
    slug: "winterthur",
    name: "Winterthur",
    canton: "Zürich",
    description: "Professionelle Reinigungsdienstleistungen in Winterthur",
  },
  {
    slug: "zurich",
    name: "Zürich",
    canton: "Zürich",
    description: "Reinigungsservice für die Limmatstadt",
  },
  {
    slug: "basel",
    name: "Basel",
    canton: "Basel-Stadt",
    description: "Reinigungsdienstleistungen in der Dreiländerecke",
  },
  {
    slug: "bern",
    name: "Bern",
    canton: "Bern",
    description: "Reinigungsservice in der Bundeshauptstadt",
  },
  {
    slug: "lausanne",
    name: "Lausanne",
    canton: "Waadt",
    description: "Services de nettoyage professionnel à Lausanne",
  },
  {
    slug: "geneva",
    name: "Genf",
    canton: "Genf",
    description: "Services de nettoyage à Genève",
  },
  {
    slug: "lucerne",
    name: "Luzern",
    canton: "Luzern",
    description: "Reinigungsservice in der Leuchtenstadt",
  },
  {
    slug: "st-gallen",
    name: "St. Gallen",
    canton: "St. Gallen",
    description: "Professionelle Reinigung in der Gallusstadt",
  },
  {
    slug: "lugano",
    name: "Lugano",
    canton: "Tessin",
    description: "Servizi di pulizia professionale a Lugano",
  },
  {
    slug: "thun",
    name: "Thun",
    canton: "Bern",
    description: "Reinigungsdienstleistungen am Thunersee",
  },
  {
    slug: "aarau",
    name: "Aarau",
    canton: "Aargau",
    description: "Reinigungsservice im Aargau",
  },
  {
    slug: "olten",
    name: "Olten",
    canton: "Solothurn",
    description: "Professionelle Reinigung in Olten",
  },
  {
    slug: "uster",
    name: "Uster",
    canton: "Zürich",
    description: "Reinigungsdienstleistungen in Uster",
  },
  {
    slug: "rapperswil",
    name: "Rapperswil-Jona",
    canton: "St. Gallen",
    description: "Reinigungsservice an der Goldküste",
  },
  {
    slug: "zug",
    name: "Zug",
    canton: "Zug",
    description: "Reinigungsdienstleistungen in der Steuerparadies",
  },
  {
    slug: "schaffhausen",
    name: "Schaffhausen",
    canton: "Schaffhausen",
    description: "Reinigungsservice am Rheinfall",
  },
  {
    slug: "chur",
    name: "Chur",
    canton: "Graubünden",
    description: "Reinigungsdienstleistungen in den Alpen",
  },
  {
    slug: "baden",
    name: "Baden",
    canton: "Aargau",
    description: "Reinigungsservice in der Kurstadt",
  },
  {
    slug: "dietikon",
    name: "Dietikon",
    canton: "Zürich",
    description: "Professionelle Reinigung im Limmattal",
  },
  {
    slug: "wetzikon",
    name: "Wetzikon",
    canton: "Zürich",
    description: "Reinigungsdienstleistungen im Zürcher Oberland",
  },
];

interface LocationPageProps {
  location: {
    slug: string;
    name: string;
    canton: string;
    description: string;
  };
  builderContent: Record<string, string | string[]> | null;
}

export default function LocationPage({
  location,
  builderContent,
}: LocationPageProps) {
  // Fallback content if Builder.io content is not available
  const fallbackContent = {
    heroTitle: `Professionelle Reinigungsservice in ${location.name}`,
    heroSubtitle: `CleanWin bietet erstklassige Reinigungsdienstleistungen in ${location.name}, ${location.canton}. Von Büroreinigung bis Haushaltsreinigung - wir sorgen für Sauberkeit und Hygiene.`,
    services: [
      "Büroreinigung und Gewerbeobjekte",
      "Wohnungsreinigung und Privathaushalte",
      "Fensterreinigung innen und außen",
      "Teppich- und Polsterreinigung",
      "Baureinigung nach Renovation",
      "Praxis- und Medizinreinigung",
    ],
    whyChooseUs: [
      "Erfahrenes Team mit über 10 Jahren Expertise",
      "Umweltfreundliche Reinigungsprodukte",
      "Flexible Terminplanung nach Ihren Wünschen",
      "Vollversichert und bonded",
      "Kostenlose Beratung und Offerten",
    ],
    ctaText: `Kontaktieren Sie uns noch heute für eine kostenlose Beratung in ${location.name}!`,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Reinigungsservice {location.name} - CleanWin | Professionelle
          Reinigung
        </title>
        <meta
          name="description"
          content={`Professioneller Reinigungsservice in ${location.name}, ${location.canton}. ✓ Büroreinigung ✓ Haushaltsreinigung ✓ Fensterreinigung. Jetzt kostenlose Offerte anfordern!`}
        />
        <meta
          name="keywords"
          content={`Reinigungsservice ${location.name}, Putzfrau ${location.name}, Büroreinigung ${location.name}, Haushaltsreinigung ${location.canton}, CleanWin`}
        />
        <meta
          property="og:title"
          content={`Reinigungsservice ${location.name} - CleanWin`}
        />
        <meta property="og:description" content={location.description} />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://cleanwin.ch/services/${location.slug}`}
        />
      </Head>

      <Layout>
        <div className="location-page">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-container">
              <div className="hero-content">
                <h1 className="hero-title">
                  {builderContent?.heroTitle || fallbackContent.heroTitle}
                </h1>
                <p className="hero-subtitle">
                  {builderContent?.heroSubtitle || fallbackContent.heroSubtitle}
                </p>
                <div className="hero-buttons">
                  <a href="tel:+41522020100" className="cta-button primary">
                    Jetzt anrufen
                  </a>
                  <a href="#contact" className="cta-button secondary">
                    Kostenlose Offerte
                  </a>
                </div>
              </div>
              <div className="hero-image">
                {builderContent?.heroImage ? (
                  <Image
                    src={builderContent.heroImage as string}
                    alt={`Reinigungsservice ${location.name}`}
                    width={400}
                    height={300}
                    className="hero-img"
                  />
                ) : (
                  <div className="hero-placeholder">
                    <span>📧</span>
                    <p>Professionelle Reinigung</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Builder.io Editable Content - Disabled for deployment */}
          {/* {builderContent && (
            <section className="builder-content">
              <BuilderComponent
                model="service-location-content"
                content={builderContent}
              />
            </section>
          )} */}

          {/* Services Section - Fallback */}
          <section className="services-section">
            <div className="container">
              <h2>Unsere Leistungen in {location.name}</h2>
              <div className="services-grid">
                {(
                  (builderContent?.services as string[]) ||
                  fallbackContent.services
                ).map((service: string, index: number) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">✨</div>
                    <h3>{service}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Warum CleanWin in {location.name}?</h2>
              <div className="benefits-grid">
                {(
                  (builderContent?.whyChooseUs as string[]) ||
                  fallbackContent.whyChooseUs
                ).map((benefit: string, index: number) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">✓</div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="contact-cta-section" id="contact">
            <div className="container">
              <div className="cta-content">
                <h2>Bereit für eine saubere Zukunft?</h2>
                <p>{builderContent?.ctaText || fallbackContent.ctaText}</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>📞 Telefon:</strong>
                    <a href="tel:+41522020100">+41 52 202 01 00</a>
                  </div>
                  <div className="contact-item">
                    <strong>✉️ E-Mail:</strong>
                    <a href="mailto:info@cleanwin.ch">info@cleanwin.ch</a>
                  </div>
                  <div className="contact-item">
                    <strong>📍 Standort:</strong>
                    <span>
                      {location.name}, {location.canton}
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:info@cleanwin.ch"
                  className="cta-button primary large"
                >
                  Kostenlose Offerte anfordern
                </a>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .location-page {
            min-height: 100vh;
          }

          .hero-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 4rem 0;
            margin-top: -80px;
            padding-top: 120px;
          }

          .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: bold;
            color: #212529;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            color: #6c757d;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .cta-button {
            display: inline-block;
            padding: 0.8rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .cta-button.primary {
            background: #e7027e;
            color: white;
            border-color: #e7027e;
          }

          .cta-button.primary:hover {
            background: #c8026b;
            border-color: #c8026b;
          }

          .cta-button.secondary {
            background: transparent;
            color: #e7027e;
            border-color: #e7027e;
          }

          .cta-button.secondary:hover {
            background: #e7027e;
            color: white;
          }

          .cta-button.large {
            padding: 1rem 3rem;
            font-size: 1.1rem;
          }

          .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .hero-placeholder {
            width: 300px;
            height: 300px;
            background: white;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 2px dashed #e7027e;
          }

          .hero-placeholder span {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          .services-section,
          .why-choose-section {
            padding: 4rem 0;
          }

          .services-section {
            background: white;
          }

          .why-choose-section {
            background: #f8f9fa;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .services-section h2,
          .why-choose-section h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #212529;
            margin-bottom: 3rem;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .service-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            text-align: center;
            border: 1px solid #e9ecef;
            transition: transform 0.3s ease;
          }

          .service-card:hover {
            transform: translateY(-5px);
          }

          .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .service-card h3 {
            color: #212529;
            font-size: 1.2rem;
            margin: 0;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .benefit-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }

          .benefit-icon {
            color: #e7027e;
            font-weight: bold;
            font-size: 1.2rem;
            margin-top: 0.2rem;
          }

          .benefit-item p {
            margin: 0;
            color: #212529;
            line-height: 1.6;
          }

          .contact-cta-section {
            background: linear-gradient(135deg, #e7027e 0%, #c8026b 100%);
            color: white;
            padding: 4rem 0;
            text-align: center;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .cta-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
          }

          .contact-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .contact-item strong {
            opacity: 0.9;
          }

          .contact-item a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
          }

          .contact-item a:hover {
            text-decoration: underline;
          }

          .contact-item span {
            font-weight: 600;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .hero-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              text-align: center;
            }

            .hero-title {
              font-size: 2rem;
            }

            .hero-buttons {
              justify-content: center;
            }

            .hero-placeholder {
              width: 250px;
              height: 250px;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .benefits-grid {
              grid-template-columns: 1fr;
            }

            .contact-info {
              grid-template-columns: 1fr;
              text-align: left;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locations.map((location) => ({
    params: { location: location.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locationSlug = params?.location as string;
  const location = locations.find((loc) => loc.slug === locationSlug);

  if (!location) {
    return {
      notFound: true,
    };
  }

  let builderContent = null;

  // Try to fetch Builder.io content if API key is configured
  const currentApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  if (currentApiKey && currentApiKey !== "your-api-key-here") {
    try {
      // Fetch the service-location-content symbol from Builder.io
      builderContent = await builder
        .get("service-location-content", {
          userAttributes: {
            location: location.name,
            locationSlug: location.slug,
          },
        })
        .toPromise();
    } catch (error) {
      console.warn("Could not fetch Builder.io content:", error);
      // Continue with fallback content
    }
  }

  return {
    props: {
      location,
      builderContent: builderContent?.data || null,
    },
    revalidate: 60, // Revalidate every minute
  };
};
