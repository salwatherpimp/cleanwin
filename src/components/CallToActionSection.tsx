"use client";

export default function CallToActionSection() {
  return (
    <section
      style={{
        padding: "96px 0",
        position: "relative",
        width: "100%",
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
          backgroundImage:
            'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_600,c_fill,f_auto,q_auto/v1752099054/dobiinter_close-up_of_a_rooftop_solar_panel_being_cleaned_wit_97f39d77-a81d-432b-ad05-4fc38a9dafcc_1_uqh2ui.avif")',
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
              margin: "23px 0 32px -1px",
              color: "white",
              textShadow: "rgba(0, 0, 0, 0.5) 2px 2px 4px",
            }}
          >
            Cleanwin - Reinigung, auf die Sie sich verlassen können
          </h2>
          <a
            href="/kontakt"
            className="button-spacing cta-button cta-button-primary"
            style={{
              display: "inline-block",
              backgroundColor: "#10a0a4",
              color: "white",
              padding: "16px 32px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Jetzt unverbindlich kontaktieren
          </a>
        </div>
      </div>
    </section>
  );
}
