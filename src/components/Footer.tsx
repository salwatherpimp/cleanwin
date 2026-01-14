"use client";

interface FooterProps {
  companyName?: string;
  address?: {
    street: string;
    city: string;
    country: string;
  };
  phone?: string;
  email?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
  };
  services?: Array<{
    name: string;
    href: string;
  }>;
  additionalLinks?: Array<{
    name: string;
    href: string;
  }>;
  serviceAreas?: string[];
  copyrightText?: string;
  privacyPolicyHref?: string;
}

export default function Footer({
  companyName = "CleanWin GmbH",
  address = {
    street: "Rychenbergstrasse 223",
    city: "8404 Winterthur",
    country: "Schweiz"
  },
  phone = "+41 76 228 80 71",
  email = "info@cleanwin.ch",
  socialMedia = {
    instagram: "https://www.instagram.com/cleanwin.ch/",
    facebook: "https://www.facebook.com/reinigungwinterthur/"
  },
  services = [
    { name: "Fensterreinigung", href: "https://cleanwin.vercel.app/leistungen/fensterreinigung" },
    { name: "Unterhaltsreinigung", href: "https://cleanwin.vercel.app/leistungen/unterhaltsreinigung" },
    { name: "Fassadenreinigung", href: "https://cleanwin.vercel.app/leistungen/fassadenreinigung" },
    { name: "Umzugsreinigung", href: "https://cleanwin.vercel.app/leistungen/umzugsreinigung" },
    { name: "Baureinigung", href: "https://cleanwin.vercel.app/leistungen/baureinigung" },
    { name: "Solarpanel reinigen", href: "https://cleanwin.vercel.app/leistungen/solarpanel-reinigen" }
  ],
  additionalLinks = [
    { name: "Über uns", href: "https://cleanwin.vercel.app/ueber-uns" },
    { name: "Referenzen", href: "https://cleanwin.vercel.app/referenzen" }
  ],
  serviceAreas = [
    "Fensterreinigung Region Winterthur",
    "Unterhaltsreinigung Region Winterthur", 
    "Fassadenreinigung Region Winterthur",
    "Umzugsreinigung Region Winterthur",
    "Baureinigung Region Winterthur",
    "Solarpanel Reinigen Region Winterthur"
  ],
  copyrightText = "© 2025 CleanWin. Alle Rechte vorbehalten.",
  privacyPolicyHref = "https://cleanwin.vercel.app/datenschutz"
}: FooterProps) {

  const PhoneIcon = () => (
    <svg
      style={{ width: "16px", height: "16px" }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const ChevronIcon = () => (
    <svg
      style={{
        width: "16px",
        height: "16px",
        marginLeft: "0px",
        transition: "transform 0.2s ease",
      }}
      className="chevron-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );

  return (
    <footer
      style={{
        backgroundColor: "#343b3e",
        color: "white",
        padding: "48px 0 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            marginBottom: "32px",
          }}
          className="footer-main-grid"
        >
          {/* Column 1: Company Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "white", margin: "0" }}>
              {companyName}
            </h3>

            <div style={{ color: "#EAEAEA", fontSize: "14px", lineHeight: "1.4" }}>
              <div>{address.street}</div>
              <div>{address.city}</div>
              <div>{address.country}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#EAEAEA",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#EAEAEA";
                }}
              >
                <PhoneIcon />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                style={{
                  color: "#EAEAEA",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#EAEAEA";
                }}
              >
                {email}
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {socialMedia.instagram && (
                <a
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#EAEAEA", transition: "color 0.2s ease" }}
                  aria-label="Instagram"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#EAEAEA";
                  }}
                >
                  <InstagramIcon />
                </a>
              )}
              {socialMedia.facebook && (
                <a
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#EAEAEA", transition: "color 0.2s ease" }}
                  aria-label="Facebook"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#EAEAEA";
                  }}
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Services with Collapsible Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
            {/* Collapsible Services Section */}
            <details>
              <summary
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "white",
                  listStyle: "none",
                  margin: "0",
                }}
              >
                Leistungen<ChevronIcon />
              </summary>
              <ul style={{ margin: "12px 0 0 24px", padding: "0", listStyle: "none" }}>
                {services.map((service, index) => (
                  <li key={index} style={{ marginBottom: index === services.length - 1 ? "0" : "8px" }}>
                    <a
                      href={service.href}
                      style={{ color: "#EAEAEA", textDecoration: "none", fontSize: "14px", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#EAEAEA";
                      }}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            {/* Additional Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left" }}>
              {additionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{ color: "#EAEAEA", textDecoration: "none", fontSize: "14px", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#EAEAEA";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Service Areas */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "white", margin: "0" }}>
              Unsere Servicegebiete
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {serviceAreas.map((area, index) => (
                <span key={index} style={{ color: "#EAEAEA", fontSize: "14px", lineHeight: "1.4" }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid #6b7280",
            flexWrap: "wrap",
            gap: "16px",
          }}
          className="footer-bottom-responsive"
        >
          <div style={{ color: "#EAEAEA", fontSize: "14px" }}>
            {copyrightText}
            <br />
            Gemacht mit ♥️ in Winterthur
          </div>
          <a
            href={privacyPolicyHref}
            style={{
              color: "#EAEAEA",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#EAEAEA";
            }}
          >
            Datenschutzerklärung
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Chevron rotation for details */
        details[open] .chevron-icon {
          transform: rotate(180deg);
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Mobile Layout */
        @media (max-width: 767px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .footer-bottom-responsive {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 8px !important;
          }

          /* Prevent mobile text overflow */
          .footer-main-grid > div {
            word-wrap: break-word;
            overflow-wrap: break-word;
            max-width: 100%;
          }

          /* Ensure service areas text doesn't overflow */
          .footer-main-grid h4 {
            font-size: 16px !important;
            line-height: 1.3 !important;
          }

          .footer-main-grid span {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </footer>
  );
}
