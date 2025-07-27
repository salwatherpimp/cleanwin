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
          className="grid-mobile-logos"
          style={{
            display: "flex",
            overflow: "hidden",
            gap: "32px",
            width: "100%",
            alignItems: "center",
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

      <style jsx>{`
        /* Logo Scroll Animation */
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* Apply animation to the container, not individual items */
        .grid-mobile-logos {
          animation: scroll-logos 30s linear infinite;
        }

        .grid-mobile-logos > div {
          flex-shrink: 0 !important;
        }

        @media (max-width: 767px) {
          .grid-mobile-logos {
            display: flex !important;
            overflow: hidden !important;
            gap: 24px !important;
            width: 100% !important;
            animation: scroll-logos 25s linear infinite;
          }

          .logo-container-mobile {
            width: 80px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
