import { GetStaticProps } from "next";
import Head from "next/head";
import { builder } from "@builder.io/react";
import Layout from "../components/Layout";

// Initialize Builder.io
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey && apiKey !== "your-api-key-here") {
  builder.init(apiKey);
}

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

interface CaseStudy {
  title: string;
  description: string;
  results: string;
}

interface ReferencesPageProps {
  builderContent: {
    heroTitle?: string;
    heroSubtitle?: string;
    testimonials?: Testimonial[];
    caseStudies?: CaseStudy[];
    ctaTitle?: string;
    ctaSubtitle?: string;
  } | null;
}

export default function ReferencesPage({
  builderContent,
}: ReferencesPageProps) {
  // Fallback content for development/preview
  const fallbackContent = {
    heroTitle: "Unsere Referenzen & Kundenstimmen",
    heroSubtitle:
      "Entdecken Sie, was unsere zufriedenen Kunden über CleanWin sagen. Vertrauen Sie auf über 10 Jahre Erfahrung in der professionellen Reinigung.",
    testimonials: [
      {
        name: "Thomas Müller",
        company: "Müller AG, Winterthur",
        text: "CleanWin reinigt unsere Büroräume seit 3 Jahren zuverlässig und gründlich. Das Team ist professionell und flexibel - absolut empfehlenswert!",
        rating: 5,
      },
      {
        name: "Sarah Zimmermann",
        company: "Praxis Dr. Zimmermann, Zürich",
        text: "Die hygienische Reinigung unserer Praxisräume ist bei CleanWin in besten Händen. Termine werden zuverlässig eingehalten und die Qualität stimmt.",
        rating: 5,
      },
      {
        name: "Martin Weber",
        company: "Privathaushalt, Basel",
        text: "Nach unserem Umzug hat CleanWin eine perfekte Endreinigung gemacht. Alles blitzsauber - wir buchen sie gerne wieder für die regelmäßige Reinigung.",
        rating: 5,
      },
    ],
    caseStudies: [
      {
        title: "Großraumbüro Winterthur - 500m²",
        description:
          "Komplette Büroreinigung inkl. Teppichreinigung und Fensterreinigung für ein Technologieunternehmen.",
        results:
          "50% Zeitersparnis für interne Mitarbeiter, 100% Kundenzufriedenheit",
      },
      {
        title: "Hotelreinigung Zürich - 80 Zimmer",
        description:
          "Tägliche Zimmerreinigung und Gemeinschaftsbereiche für ein 4-Sterne Hotel.",
        results:
          "Gästebewertungen um 0.8 Punkte verbessert, 95% Weiterempfehlungsrate",
      },
      {
        title: "Industriereinigung Basel - 2000m²",
        description:
          "Spezialreinigung für Produktionsanlagen und Lagerhallen eines Pharmaunternehmens.",
        results: "Hygiene-Standards übertroffen, 0 Sicherheitsvorfälle",
      },
    ],
    ctaTitle: "Werden Sie unser nächster zufriedener Kunde",
    ctaSubtitle:
      "Kontaktieren Sie uns für eine kostenlose Beratung und Offerte.",
  };

  // Use Builder.io content if available, otherwise fallback
  const content = builderContent || fallbackContent;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Referenzen & Kundenstimmen - CleanWin Winterthur | Zufriedene Kunden
        </title>
        <meta
          name="description"
          content="Lesen Sie Erfahrungen und Bewertungen unserer zufriedenen Kunden. ✓ Über 500 erfolgreiche Projekte ✓ 98% Kundenzufriedenheit ✓ Professionelle Reinigung in der Schweiz."
        />
        <meta
          name="keywords"
          content="CleanWin Referenzen, Kundenbewertungen Reinigungsservice, Testimonials Gebäudereinigung, Erfahrungen Büroreinigung Schweiz"
        />
        <meta
          property="og:title"
          content="Referenzen & Kundenstimmen - CleanWin"
        />
        <meta
          property="og:description"
          content="Über 500 zufriedene Kunden vertrauen auf CleanWin. Lesen Sie echte Bewertungen und Erfahrungen."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cleanwin.ch/referenzen" />
      </Head>

      <Layout>
        <div className="references-page">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{content.heroTitle}</h1>
                <p className="hero-subtitle">{content.heroSubtitle}</p>
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Erfolgreiche Projekte</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Kundenzufriedenheit</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Jahre Erfahrung</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <div className="container">
              <h2>Was unsere Kunden sagen</h2>
              <div className="testimonials-grid">
                {content.testimonials?.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="stars">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <span key={i} className="star">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <blockquote>&ldquo;{testimonial.text}&rdquo;</blockquote>
                      <div className="testimonial-author">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-company">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="case-studies-section">
            <div className="container">
              <h2>Erfolgreiche Projekte</h2>
              <div className="case-studies-grid">
                {content.caseStudies?.map((caseStudy, index) => (
                  <div key={index} className="case-study-card">
                    <div className="case-study-header">
                      <h3>{caseStudy.title}</h3>
                    </div>
                    <div className="case-study-content">
                      <p className="case-study-description">
                        {caseStudy.description}
                      </p>
                      <div className="case-study-results">
                        <strong>Ergebnisse:</strong>
                        <p>{caseStudy.results}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="trust-section">
            <div className="container">
              <h2>Warum CleanWin vertrauen?</h2>
              <div className="trust-grid">
                <div className="trust-item">
                  <div className="trust-icon">🏆</div>
                  <h3>Zertifiziert & Versichert</h3>
                  <p>
                    Vollversichert und nach Schweizer Standards zertifiziert
                  </p>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">⏰</div>
                  <h3>Pünktlich & Zuverlässig</h3>
                  <p>98% termingetreue Ausführung aller Reinigungsarbeiten</p>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">🌱</div>
                  <h3>Umweltfreundlich</h3>
                  <p>Ausschließlich ökologische Reinigungsprodukte</p>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">📞</div>
                  <h3>24/7 Erreichbar</h3>
                  <p>Notfall-Reinigungsservice bei dringenden Anfragen</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>{content.ctaTitle}</h2>
                <p>{content.ctaSubtitle}</p>
                <div className="cta-buttons">
                  <a href="tel:+41522020100" className="cta-button primary">
                    📞 Jetzt anrufen
                  </a>
                  <a
                    href="mailto:info@cleanwin.ch"
                    className="cta-button secondary"
                  >
                    ✉️ E-Mail senden
                  </a>
                </div>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>Telefon:</strong> +41 52 202 01 00
                  </div>
                  <div className="contact-item">
                    <strong>E-Mail:</strong> info@cleanwin.ch
                  </div>
                  <div className="contact-item">
                    <strong>Antwortzeit:</strong> Innerhalb 24 Stunden
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .references-page {
            min-height: 100vh;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .hero-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 6rem 0 4rem;
            margin-top: -80px;
            padding-top: 140px;
            text-align: center;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: bold;
            color: #212529;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }

          .hero-subtitle {
            font-size: 1.3rem;
            color: #6c757d;
            margin-bottom: 3rem;
            line-height: 1.6;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .stats-row {
            display: flex;
            justify-content: center;
            gap: 4rem;
            flex-wrap: wrap;
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: #e7027e;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            font-size: 1rem;
            color: #6c757d;
            font-weight: 600;
          }

          .testimonials-section {
            padding: 6rem 0;
            background: white;
          }

          .testimonials-section h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #212529;
            margin-bottom: 3rem;
          }

          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .testimonial-card {
            background: #f8f9fa;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            border-left: 4px solid #e7027e;
            position: relative;
          }

          .stars {
            margin-bottom: 1rem;
          }

          .star {
            font-size: 1.2rem;
            margin-right: 0.2rem;
          }

          .testimonial-content blockquote {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #212529;
            margin: 0 0 1.5rem 0;
            font-style: italic;
          }

          .testimonial-author {
            border-top: 1px solid #dee2e6;
            padding-top: 1rem;
          }

          .author-name {
            font-weight: 600;
            color: #212529;
            margin-bottom: 0.25rem;
          }

          .author-company {
            color: #6c757d;
            font-size: 0.9rem;
          }

          .case-studies-section {
            padding: 6rem 0;
            background: #f8f9fa;
          }

          .case-studies-section h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #212529;
            margin-bottom: 3rem;
          }

          .case-studies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .case-study-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
          }

          .case-study-card:hover {
            transform: translateY(-5px);
          }

          .case-study-header {
            background: #e7027e;
            color: white;
            padding: 1.5rem 2rem;
          }

          .case-study-header h3 {
            margin: 0;
            font-size: 1.3rem;
            font-weight: 600;
          }

          .case-study-content {
            padding: 2rem;
          }

          .case-study-description {
            color: #6c757d;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .case-study-results {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 8px;
            border-left: 3px solid #28a745;
          }

          .case-study-results strong {
            color: #28a745;
            display: block;
            margin-bottom: 0.5rem;
          }

          .case-study-results p {
            margin: 0;
            color: #212529;
            font-weight: 500;
          }

          .trust-section {
            padding: 6rem 0;
            background: white;
          }

          .trust-section h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #212529;
            margin-bottom: 3rem;
          }

          .trust-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .trust-item {
            text-align: center;
            padding: 2rem 1rem;
          }

          .trust-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .trust-item h3 {
            color: #212529;
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }

          .trust-item p {
            color: #6c757d;
            line-height: 1.6;
          }

          .cta-section {
            background: linear-gradient(135deg, #e7027e 0%, #c8026b 100%);
            color: white;
            padding: 6rem 0;
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

          .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .cta-button {
            display: inline-block;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .cta-button.primary {
            background: white;
            color: #e7027e;
            border-color: white;
          }

          .cta-button.primary:hover {
            background: transparent;
            color: white;
            border-color: white;
          }

          .cta-button.secondary {
            background: transparent;
            color: white;
            border-color: white;
          }

          .cta-button.secondary:hover {
            background: white;
            color: #e7027e;
          }

          .contact-info {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            opacity: 0.9;
          }

          .contact-item {
            font-size: 0.9rem;
          }

          .contact-item strong {
            display: block;
            margin-bottom: 0.25rem;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }

            .hero-subtitle {
              font-size: 1.1rem;
            }

            .stats-row {
              gap: 2rem;
            }

            .stat-number {
              font-size: 2rem;
            }

            .testimonials-grid,
            .case-studies-grid,
            .trust-grid {
              grid-template-columns: 1fr;
            }

            .contact-info {
              flex-direction: column;
              gap: 1rem;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }

            .cta-button {
              width: 200px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let builderContent = null;

  const currentApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  console.log(
    "🔧 API Key check:",
    currentApiKey ? `${currentApiKey.substring(0, 8)}...` : "missing",
  );

  if (currentApiKey && currentApiKey !== "your-api-key-here") {
    builder.init(currentApiKey);

    try {
      // Try direct API call first to debug
      console.log("🔗 Direct API test...");
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v3/content/references-content?apiKey=${currentApiKey}&limit=1`,
        );
        const apiData = await response.json();
        console.log("📡 Direct API response:", apiData);

        if (apiData.results && apiData.results.length > 0) {
          console.log("✅ Found data via direct API call");
          builderContent = apiData.results[0].data;
        }
      } catch (apiError: any) {
        console.log("❌ Direct API failed:", apiError.message);
      }

      // If direct API didn't work, try Builder SDK
      if (!builderContent) {
        const modelNames = [
          "references-content",
          "referencesContent",
          "referenzen",
        ];

        for (const modelName of modelNames) {
          console.log(`🔍 Trying model: ${modelName}`);
          try {
            const result = await builder
              .get(modelName, {
                limit: 1,
                includeUnpublished: true, // Include drafts for testing
              })
              .toPromise();

            if (result?.data) {
              console.log(
                `✅ Found content in model: ${modelName}`,
                Object.keys(result.data),
              );
              builderContent = result.data;
              break;
            } else {
              console.log(`❌ No data in model: ${modelName}`);
            }
          } catch (modelError: any) {
            console.log(`❌ Model ${modelName} error:`, modelError.message);
          }
        }
      }

      // Try Symbol if no data model worked
      if (!builderContent) {
        console.log("🔍 Trying Symbol approach...");
        try {
          const symbol = await builder
            .get("symbol", {
              query: { name: "references-content" },
            })
            .toPromise();

          if (symbol?.data) {
            console.log("✅ Found Symbol content:", Object.keys(symbol.data));
            builderContent = symbol.data;
          }
        } catch (symbolError: any) {
          console.log("❌ Symbol error:", symbolError.message);
        }
      }
    } catch (error: any) {
      console.error("❌ Builder.io connection error:", error.message);
    }
  }

  const timestamp = new Date().toISOString();
  console.log(
    `📊 [${timestamp}] Final result:`,
    builderContent ? "Using Builder.io content" : "Using fallback content",
  );

  return {
    props: {
      builderContent,
    },
    revalidate: 10, // Fast revalidation for debugging
  };
};
