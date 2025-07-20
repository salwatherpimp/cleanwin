import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Fensterreinigung",
      image: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_500,h_350,c_fill,f_auto,q_auto/v1752095182/Glasreinigung_aussen_Flaach_ec1fre.avif",
      href: "https://cleanwin.vercel.app/leistungen/fensterreinigung"
    },
    {
      title: "Unterhaltsreinigung", 
      image: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_500,h_350,c_fill,f_auto,q_auto/v1750015382/altbauwohnung-meilen_lrttoc.avif",
      href: "https://cleanwin.vercel.app/leistungen/unterhaltsreinigung"
    },
    {
      title: "Fassadenreinigung",
      image: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_500,h_350,c_fill,f_auto,q_auto/v1752095182/Fassadenreinigung_Sichtbeton_vm1lsq.avif", 
      href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung"
    },
    {
      title: "Umzugsreinigung",
      image: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_500,h_350,c_fill,f_auto,q_auto/v1752005906/homepage-herosection_fsxqwc.avif",
      href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung"
    },
    {
      title: "Baureinigung", 
      image: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_500,h_350,c_fill,f_auto,q_auto/v1748417852/farbxpress-spritzen_ij8jsj.avif",
      href: "https://cleanwin.vercel.app/leistungen/baureinigung"
    },
    {
      title: "Solarpanel reinigen",
      image: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_500,h_350,c_fill,f_auto,q_auto/v1752095182/Firmenwagen_vor_Geba%CC%88ude_zz0m0s.avif",
      href: "https://cleanwin.vercel.app/leistungen/solarpanel-reinigen"
    }
  ];

  return (
    <section
      id="services"
      className="services-section"
      style={{
        backgroundColor: "#f8fafc",
        padding: "80px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "0",
              marginTop: "0",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Unsere Leistungen
          </h2>
        </div>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: "100%",
          }}
        >
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="service-card"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
                height: "280px",
              }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#0DA6A6",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(13, 166, 166, 0.3)",
                  }}
                >
                  Ab CHF 199.-
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      margin: "0",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
        }
        
        .service-card:hover img {
          transform: scale(1.05);
        }

        /* Services responsive grid */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .services-section h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
