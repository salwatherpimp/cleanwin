"use client";

import { useState } from "react";

export default function WhyChooseCleanwinSection() {
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(
    null,
  );

  const toggleAccordion = (index: number) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <section
      className="section-spacing"
      style={{
        backgroundColor: "#f9fafb",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        className="responsive-container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            className="headline-spacing"
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#111827",
              textAlign: "center",
            }}
          >
            Dafür steht Cleanwin
          </h2>
        </div>
        {/* Desktop Grid */}
        <div
          className="cleanwin-features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginTop: "24px",
            width: "100%",
          }}
        >
          {/* Regional & Personal Card */}
          <div
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "24px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <h3
                style={{
                  color: "#111827",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  flexGrow: 1,
                }}
                className="feature-card-title"
              >
                Regional & persönlich
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginLeft: "12px",
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
            </div>
            <p
              style={{
                color: "rgba(107, 114, 128, 1)",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "0px",
                flex: "1",
              }}
            >
              Wir sind in Winterthur zuhause. Persönlich, nah und immer für Sie
              erreichbar.
            </p>
          </div>

          {/* Safe & Insured Card */}
          <div
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "24px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <h3
                style={{
                  color: "#111827",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  flexGrow: 1,
                }}
                className="feature-card-title"
              >
                Sicher & versichert
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginLeft: "12px",
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
            <p
              style={{
                color: "rgba(107, 114, 128, 1)",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "0px",
                flex: "1",
              }}
            >
              Volle Versicherung und geschultes Team - damit Sie sorgenfrei
              entspannen können.
            </p>
          </div>

          {/* Sustainable & Gentle Card */}
          <div
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "24px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <h3
                style={{
                  color: "#111827",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  flexGrow: 1,
                }}
                className="feature-card-title"
              >
                Nachhaltig & schonend
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginLeft: "12px",
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1s-3 3-3 8c0 2 1 4 3 4s3-2 3-4c0-5-3-8-3-8z" />
                  <path d="M12 17v6" />
                  <path d="M9 20h6" />
                </svg>
              </div>
            </div>
            <p
              style={{
                color: "rgba(107, 114, 128, 1)",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "0px",
                flex: "1",
              }}
            >
              Umweltfreundliche Reinigungs-methode durch Umkehrosmose-Technik.
              Gut für Sie und die Natur.
            </p>
          </div>

          {/* Flexible & Reliable Card */}
          <div
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "24px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <h3
                style={{
                  color: "#111827",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  flexGrow: 1,
                }}
                className="feature-card-title"
              >
                Flexibel & zuverlässig
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                  marginLeft: "12px",
                }}
              >
                <svg
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
            </div>
            <p
              style={{
                color: "rgba(107, 114, 128, 1)",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "0px",
                flex: "1",
              }}
            >
              Von früh bis spät - wir richten uns stet nach Ihrem Alltag. Immer
              pünktlich.
            </p>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div
          className="cleanwin-features-accordion"
          style={{ display: "none", marginTop: "24px" }}
        >
          {/* Regional & Personal Accordion Item */}
          <div className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(0)}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                </div>
                <h3
                  style={{
                    color: "#111827",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    margin: 0,
                  }}
                >
                  Regional & persönlich
                </h3>
              </div>
              <svg
                className={`accordion-icon-toggle ${expandedAccordion === 0 ? "expanded" : ""}`}
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#111827",
                  stroke: "#111827",
                  strokeWidth: "2px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div
              className={`accordion-content ${expandedAccordion === 0 ? "expanded" : ""}`}
            >
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "20px",
                  margin: 0,
                }}
              >
                Wir sind in Winterthur zuhause. Persönlich, nah und immer für
                Sie erreichbar.
              </p>
            </div>
          </div>

          {/* Safe & Insured Accordion Item */}
          <div className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(1)}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3
                  style={{
                    color: "#111827",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Sicher & versichert
                </h3>
              </div>
              <svg
                className={`accordion-icon-toggle ${expandedAccordion === 1 ? "expanded" : ""}`}
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#111827",
                  stroke: "#111827",
                  strokeWidth: "2px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div
              className={`accordion-content ${expandedAccordion === 1 ? "expanded" : ""}`}
            >
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "20px",
                  margin: 0,
                }}
              >
                Volle Versicherung und geschultes Team - damit Sie sorgenfrei
                entspannen können.
              </p>
            </div>
          </div>

          {/* Sustainable & Gentle Accordion Item */}
          <div className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(2)}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1s-3 3-3 8c0 2 1 4 3 4s3-2 3-4c0-5-3-8-3-8z" />
                    <path d="M12 17v6" />
                    <path d="M9 20h6" />
                  </svg>
                </div>
                <h3
                  style={{
                    color: "#111827",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    margin: 0,
                  }}
                >
                  Nachhaltig & schonend
                </h3>
              </div>
              <svg
                className={`accordion-icon-toggle ${expandedAccordion === 2 ? "expanded" : ""}`}
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#111827",
                  stroke: "#111827",
                  strokeWidth: "2px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div
              className={`accordion-content ${expandedAccordion === 2 ? "expanded" : ""}`}
            >
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "20px",
                  margin: 0,
                }}
              >
                Umweltfreundliche Reinigungs-methode durch Umkehrosmose-Technik.
                Gut für Sie und die Natur.
              </p>
            </div>
          </div>

          {/* Flexible & Reliable Accordion Item */}
          <div className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(3)}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>
                <h3
                  style={{
                    color: "#111827",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    margin: 0,
                  }}
                >
                  Flexibel & zuverlässig
                </h3>
              </div>
              <svg
                className={`accordion-icon-toggle ${expandedAccordion === 3 ? "expanded" : ""}`}
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#111827",
                  stroke: "#111827",
                  strokeWidth: "2px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div
              className={`accordion-content ${expandedAccordion === 3 ? "expanded" : ""}`}
            >
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "14px",
                  lineHeight: "20px",
                  margin: 0,
                }}
              >
                Von früh bis spät - wir richten uns nach Ihrem Alltag. Immer
                pünktlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
