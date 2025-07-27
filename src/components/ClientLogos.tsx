"use client";

export default function ClientLogos() {
  const logos = [
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png",
      alt: "Client 1"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png",
      alt: "Client 2"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png",
      alt: "Client 3"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png",
      alt: "Client 4"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png",
      alt: "Client 5"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png",
      alt: "Client 6"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/10_j4jopj.png",
      alt: "Client 7"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/8_y8yfiu.png",
      alt: "Client 8"
    },
    {
      url: "https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/9_a5yzm6.png",
      alt: "Client 9"
    }
  ];

  const LogoItem = ({ logo, isDuplicate = false }: { logo: typeof logos[0], isDuplicate?: boolean }) => (
    <div
      className={`logo-container-mobile${isDuplicate ? ' logo-duplicate' : ''}`}
      style={{
        width: "120px",
        height: "60px",
        backgroundImage: `url("${logo.url}")`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        opacity: "0.7",
        transition: "opacity 0.3s",
        flexShrink: 0,
      }}
      aria-label={logo.alt}
    />
  );

  return (
    <section
      style={{
        backgroundColor: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
        padding: "20px 0",
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
            color: "#6b7280",
            marginBottom: "32px",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          +500 Firmen &amp; Haushalte reinigen mit Cleanwin
        </p>
        <div
          className="logo-container-wrapper"
          style={{
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            className="grid-mobile-logos"
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            {/* Original logos */}
            {logos.map((logo, index) => (
              <LogoItem key={`original-${index}`} logo={logo} />
            ))}

            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => (
              <LogoItem key={`duplicate-${index}`} logo={logo} isDuplicate />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Logo Scroll Animation */
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Wrapper container */
        .logo-container-wrapper {
          overflow: hidden !important;
        }

        /* Animated track */
        .grid-mobile-logos {
          animation: scroll-logos 45s linear infinite;
        }

        .grid-mobile-logos > div {
          flex-shrink: 0 !important;
        }

        @media (max-width: 767px) {
          .grid-mobile-logos {
            display: flex !important;
            gap: 24px !important;
            animation: scroll-logos 40s linear infinite;
          }

          .logo-container-mobile {
            width: 80px !important;
            height: 40px !important;
          }
        }

        @media (min-width: 768px) {
          .grid-mobile-logos {
            gap: 32px !important;
            animation: scroll-logos 45s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
