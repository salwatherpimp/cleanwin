"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PillNavigation from "../components/PillNavigation";

export default function CleanWinPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

    useEffect(() => {
    // Carousel navigation functionality
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');

    if (!carouselTrack || !prevButton || !nextButton) return;

    // Get viewport-based cards per view
    const getCardsPerView = () => {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const getCardWidth = () => {
      const firstCard = carouselTrack.children[0] as HTMLElement;
      if (!firstCard) return 0;
      const computedStyle = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(computedStyle.marginRight) || 0;
      return firstCard.offsetWidth + marginRight + 24; // 24px is the gap
    };

    const goToPrev = () => {
      const cardWidth = getCardWidth();
      const cardsPerView = getCardsPerView();
      const scrollAmount = cardWidth * cardsPerView;
      carouselTrack.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    };

    const goToNext = () => {
      const cardWidth = getCardWidth();
      const cardsPerView = getCardsPerView();
      const scrollAmount = cardWidth * cardsPerView;
      carouselTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

        // Event listeners
    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);

    // Cleanup
    return () => {
      prevButton.removeEventListener('click', goToPrev);
      nextButton.removeEventListener('click', goToNext);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
      }}
    >
      
      {/* Pill Navigation */}
      <PillNavigation />

      {/* Hero Section */}
      <div className="hero-mobile-wrapper">
        <section
          className="hero-mobile"
          style={{
            position: "relative",
            height: "680px",
            minHeight: "680px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingTop: "80px",
            boxSizing: "border-box",
            contain: "layout style",
            containIntrinsicSize: "680px 680px",
          }}
        >
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
            alt="CleanWin Hero Background"
            fill
            priority={true}
            fetchPriority="high"
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "60% 50%",
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
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Content */}
          <div
            className="hero-content-mobile"
            style={{
              position: "relative",
              zIndex: 10,
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 16px",
              textAlign: "center",
              color: "white",
              contain: "layout style",
              containIntrinsicSize: "680px 500px",
              width: "100%",
              height: "auto",
            }}
          >
            <h1
              className="hero-title-mobile"
              style={{
                fontSize: "40px",
                fontWeight: "800",
                lineHeight: "48px",
                marginBottom: "16px",
                color: "white",
                textShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                width: "100%",
                height: "auto",
                minHeight: "96px",
              }}
            >
              Professionelle Reinigung in Winterthur & Region
            </h1>

            <p
              className="hero-subtitle-mobile"
              style={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "24px",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "768px",
                color: "rgba(255, 255, 255, 0.95)",
                width: "100%",
                height: "auto",
                minHeight: "64px",
              }}
            >
              Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und echte Nähe. Keine Schwarzarbeit und 100 % Verlässlichkeit – für Privat & Gewerbe.
            </p>

            {/* Reviews Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                padding: "8px 16px",
                marginBottom: "32px",
                color: "white",
                contain: "layout style",
                width: "auto",
                height: "auto",
                minHeight: "48px",
              }}
            >
              {/* Google Icon */}
              <svg
                style={{
                  width: "32px",
                  height: "32px",
                  marginRight: "8px",
                }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285f4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fbbc05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#ea4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2px",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex" }}>
                  {/* 4 filled stars */}
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "#fbbf24",
                        fill: "#fbbf24",
                      }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}

                  {/* Half star */}
                  <div style={{ position: "relative" }}>
                    <svg
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "#e5e7eb",
                        fill: "#e5e7eb",
                      }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <svg
                        style={{
                          width: "16px",
                          height: "16px",
                          color: "#fbbf24",
                          fill: "#fbbf24",
                        }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    opacity: "0.8",
                  }}
                >
                  4.7 aus +110 Bewertungen
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div
              style={{
                contain: "layout style",
                width: "100%",
                height: "auto",
                minHeight: "64px",
              }}
            >
              <a
                href="/kontakt"
                className="hero-cta-button"
                style={{
                  display: "inline-block",
                  backgroundColor: "white",
                  color: "#374151",
                  padding: "16px 32px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 25px -5px",
                  transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                  width: "auto",
                  height: "auto",
                  minHeight: "48px",
                }}
              >
                Jetzt unverbindlich kontaktieren
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Rest of the page content would go here */}
      <section>
        <p>Rest of page content...</p>
      </section>
    </div>
  );
}
