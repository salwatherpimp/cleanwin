"use client";

interface FinalCTAProps {
  title?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function FinalCTA({
  title = "Cleanwin - persönlich, zuverlässig, hochwertig",
  ctaText = "Jetzt unverbindlich kontaktieren",
  ctaHref = "/kontakt",
  backgroundImage = "https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_600,c_fill,f_auto,q_auto/v1752099054/dobiinter_close-up_of_a_rooftop_solar_panel_being_cleaned_wit_97f39d77-a81d-432b-ad05-4fc38a9dafcc_1_uqh2ui.avif"
}: FinalCTAProps) {
  return (
    <section
      style={{
        padding: "96px 0",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "768px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "32px",
              marginTop: "23.24px",
              color: "white",
              textShadow: "rgba(0, 0, 0, 0.5) 2px 2px 4px",
            }}
          >
            {title}
          </h2>
          <a
            href={ctaHref}
            className="final-cta-button"
            style={{
              display: "inline-block",
              backgroundColor: "#0DA6A6",
              color: "white",
              padding: "16px 32px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(13, 166, 166, 0.3)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0b8d8d";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(13, 166, 166, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0DA6A6";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(13, 166, 166, 0.3)";
            }}
          >
            {ctaText}
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Responsive adjustments */
        @media (max-width: 767px) {
          section {
            padding: 64px 0 !important;
          }
          
          h2 {
            font-size: 24px !important;
            margin-bottom: 24px !important;
          }
          
          .final-cta-button {
            padding: 14px 28px !important;
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 48px 0 !important;
          }
          
          h2 {
            font-size: 22px !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
    </section>
  );
}
