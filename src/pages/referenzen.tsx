import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

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
  builderContent: Record<string, string | Testimonial[] | CaseStudy[]> | null;
}

export default function ReferencesPage({
  builderContent,
}: ReferencesPageProps) {
  // Fallback content
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

  const testimonials =
    (builderContent?.testimonials as Testimonial[]) ||
    fallbackContent.testimonials;
  const caseStudies =
    (builderContent?.caseStudies as CaseStudy[]) || fallbackContent.caseStudies;

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

      <div>
        <h1>
          {(builderContent?.heroTitle as string) || fallbackContent.heroTitle}
        </h1>
        <p>
          {(builderContent?.heroSubtitle as string) ||
            fallbackContent.heroSubtitle}
        </p>

        <div>
          <h2>Was unsere Kunden sagen</h2>
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index}>
              <div>
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <blockquote>&ldquo;{testimonial.text}&rdquo;</blockquote>
              <div>
                <div>{testimonial.name}</div>
                <div>{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2>Erfolgreiche Projekte</h2>
          {caseStudies.map((caseStudy: CaseStudy, index: number) => (
            <div key={index}>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
              <div>
                <strong>Ergebnisse:</strong>
                <p>{caseStudy.results}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2>
            {(builderContent?.ctaTitle as string) || fallbackContent.ctaTitle}
          </h2>
          <p>
            {(builderContent?.ctaSubtitle as string) ||
              fallbackContent.ctaSubtitle}
          </p>
          <a href="tel:+41522020100">📞 Jetzt anrufen</a>
          <a href="mailto:info@cleanwin.ch">✉️ E-Mail senden</a>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      builderContent: null,
    },
  };
};
