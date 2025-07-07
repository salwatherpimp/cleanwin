import Head from "next/head";

export default function ServicesIndexPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reinigungsservice in der Schweiz - CleanWin</title>
        <meta
          name="description"
          content="Professioneller Reinigungsservice in der Schweiz. CleanWin bietet Büroreinigung, Haushaltsreinigung und mehr in 20 Schweizer Städten."
        />
      </Head>

      <div>
        <div className="services-index-page">
          <section className="hero-section">
            <div className="container">
              <h1>Reinigungsservice in der Schweiz</h1>
              <p>
                CleanWin bietet professionelle Reinigungsdienstleistungen in 20
                Schweizer Städten.
              </p>
              <p>Wählen Sie Ihren Standort aus dem "Standorte" Menü oben.</p>
            </div>
          </section>
        </div>

        <style jsx>{`
          .services-index-page {
            min-height: 100vh;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 8rem 2rem;
            text-align: center;
          }

          .hero-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            margin-top: -80px;
            padding-top: 160px;
          }

          h1 {
            font-size: 3rem;
            font-weight: bold;
            color: #212529;
            margin-bottom: 2rem;
          }

          p {
            font-size: 1.2rem;
            color: #6c757d;
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}
