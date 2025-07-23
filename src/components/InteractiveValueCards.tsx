"use client";

import { useState } from "react";

const InteractiveValueCards = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <section
      style={{
        backgroundColor: "#f9fafb",
        padding: "20px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "24px",
              marginTop: "23.24px",
              textAlign: "center",
            }}
          >
            Dafür steht Cleanwin
          </h2>
        </div>
        <div
          className="cleanwin-values-container"
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
            className="cleanwin-value-card"
            onClick={() => handleCardClick(0)}
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "16px",
              minHeight: "98px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Desktop Header (Original Layout) */}
            <div
              className="desktop-card-header"
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
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  flexGrow: 1,
                  whiteSpace: "normal",
                  overflow: "visible",
                  wordWrap: "break-word",
                }}
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

            {/* Mobile Header (Accordion Layout) */}
            <div
              className="mobile-card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexGrow: 1,
                }}
              >
                <div
                  className="mobile-card-icon"
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
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    margin: 0,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Regional & persönlich
                </h3>
              </div>
              <div
                className="mobile-toggle-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "#6b7280",
                    stroke: "#6b7280",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transition: "transform 0.2s ease",
                    transform: expandedCard === 0 ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <p
              className={`mobile-card-content ${expandedCard === 0 ? 'expanded' : ''}`}
              style={{
                color: "#4b5563",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "0px",
                flex: "1",
              }}
            >
              Wir sind in Winterthur zuhause. Persönlich, nah und immer für
              Sie erreichbar.
            </p>
          </div>

          {/* Safe & Insured Card */}
          <div
            className="cleanwin-value-card"
            onClick={() => handleCardClick(1)}
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "16px",
              minHeight: "98px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Desktop Header (Original Layout) */}
            <div
              className="desktop-card-header"
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
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  flexGrow: 1,
                  whiteSpace: "normal",
                  overflow: "visible",
                  wordWrap: "break-word",
                }}
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

            {/* Mobile Header (Accordion Layout) */}
            <div
              className="mobile-card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexGrow: 1,
                }}
              >
                <div
                  className="mobile-card-icon"
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
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    margin: 0,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Sicher & versichert
                </h3>
              </div>
              <div
                className="mobile-toggle-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "#6b7280",
                    stroke: "#6b7280",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transition: "transform 0.2s ease",
                    transform: expandedCard === 1 ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <p
              className={`mobile-card-content ${expandedCard === 1 ? 'expanded' : ''}`}
              style={{
                color: "#4b5563",
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
            className="cleanwin-value-card"
            onClick={() => handleCardClick(2)}
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "16px",
              minHeight: "98px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Desktop Header (Original Layout) */}
            <div
              className="desktop-card-header"
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
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  flexGrow: 1,
                  whiteSpace: "normal",
                  overflow: "visible",
                  wordWrap: "break-word",
                }}
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

            {/* Mobile Header (Accordion Layout) */}
            <div
              className="mobile-card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexGrow: 1,
                }}
              >
                <div
                  className="mobile-card-icon"
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
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    margin: 0,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Nachhaltig & schonend
                </h3>
              </div>
              <div
                className="mobile-toggle-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "#6b7280",
                    stroke: "#6b7280",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transition: "transform 0.2s ease",
                    transform: expandedCard === 2 ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <p
              className={`mobile-card-content ${expandedCard === 2 ? 'expanded' : ''}`}
              style={{
                color: "#4b5563",
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
            className="cleanwin-value-card"
            onClick={() => handleCardClick(3)}
            style={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
              padding: "16px",
              minHeight: "98px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Desktop Header (Original Layout) */}
            <div
              className="desktop-card-header"
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
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  flexGrow: 1,
                  whiteSpace: "normal",
                  overflow: "visible",
                  wordWrap: "break-word",
                }}
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

            {/* Mobile Header (Accordion Layout) */}
            <div
              className="mobile-card-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                height: "44px",
                minHeight: "44px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexGrow: 1,
                }}
              >
                <div
                  className="mobile-card-icon"
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
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    margin: 0,
                    whiteSpace: "normal",
                    overflow: "visible",
                    wordWrap: "break-word",
                  }}
                >
                  Flexibel & zuverlässig
                </h3>
              </div>
              <div
                className="mobile-toggle-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "#6b7280",
                    stroke: "#6b7280",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transition: "transform 0.2s ease",
                    transform: expandedCard === 3 ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <p
              className={`mobile-card-content ${expandedCard === 3 ? 'expanded' : ''}`}
              style={{
                color: "#4b5563",
                fontSize: "13px",
                lineHeight: "16px",
                marginTop: "0px",
                flex: "1",
              }}
            >
              Von früh bis spät - wir richten uns stet nach Ihrem Alltag.
              Immer pünktlich.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Accordion Styles for Cleanwin Values Section */
        @media (max-width: 767px) {
          .cleanwin-values-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
          }

          .cleanwin-value-card {
            height: auto !important;
            min-height: 42px !important;
            padding: 12px !important;
            transition: all 0.3s ease !important;
            overflow: hidden !important;
          }

          .cleanwin-value-card .mobile-card-icon {
            display: flex !important;
          }

          .cleanwin-value-card .mobile-toggle-icon {
            display: flex !important;
          }

          .cleanwin-value-card .desktop-card-header {
            display: none !important;
          }

          .cleanwin-value-card .mobile-card-header {
            display: flex !important;
            align-items: center !important;
            min-height: 36px !important;
            margin-bottom: 0 !important;
          }

          .mobile-card-content {
            display: none !important;
            margin-top: 12px !important;
            padding-top: 12px !important;
            border-top: 1px solid #e5e7eb !important;
          }

          .mobile-card-content.expanded {
            display: block !important;
            animation: slideDown 0.3s ease !important;
          }
        }

        @media (min-width: 768px) {
          .cleanwin-value-card .mobile-card-icon {
            display: none !important;
          }

          .cleanwin-value-card .mobile-toggle-icon {
            display: none !important;
          }

          .cleanwin-value-card .desktop-card-header {
            display: flex !important;
          }

          .cleanwin-value-card .desktop-card-header h3 {
            font-size: 18px !important;
            line-height: 22px !important;
          }

          .cleanwin-value-card .mobile-card-header {
            display: none !important;
          }

          .cleanwin-value-card {
            cursor: default !important;
            overflow: visible !important;
            height: auto !important;
            min-height: 98px !important;
          }

          .mobile-card-content {
            display: block !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveValueCards;
