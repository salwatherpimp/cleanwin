"use client";

import { useEffect } from "react";

const CustomerReviews = () => {
  useEffect(() => {
    // Simplified carousel navigation with fixed scroll amounts
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');

    if (!carouselTrack || !prevButton || !nextButton) return;

    // Fixed scroll amounts to prevent layout calculations
    const getScrollAmount = () => {
      if (window.innerWidth < 768) return 360; // Single card width on mobile
      if (window.innerWidth < 1024) return 720; // Two cards on tablet
      return 1080; // Three cards on desktop
    };

    const goToPrev = () => {
      const scrollAmount = getScrollAmount();
      const newScrollLeft = Math.max(0, carouselTrack.scrollLeft - scrollAmount);

      carouselTrack.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    };

    const goToNext = () => {
      const scrollAmount = getScrollAmount();
      const maxScrollLeft = carouselTrack.scrollWidth - carouselTrack.clientWidth;
      const newScrollLeft = Math.min(maxScrollLeft, carouselTrack.scrollLeft + scrollAmount);

      carouselTrack.scrollTo({
        left: newScrollLeft,
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
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "24px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 28px)",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "clamp(16px, 3vw, 24px)",
              marginTop: "clamp(16px, 3vw, 23.24px)",
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            Das sagen unsere Kunden
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Über 500 zufriedene Kunden und mehr als 100 Google-Bewertungen mit einem Durchschnitt von 4,7 Sternen – überzeugen auch Sie sich von der Qualität unserer Arbeit und kontaktieren Sie uns noch heute unverbindlich.
          </p>
        </div>

        {/* Carousel Container with Navigation */}
        <div style={{ position: "relative" }}>
          {/* Carousel Track */}
          <div
            id="carousel-track"
            className="carousel-track"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: "24px",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              contain: "layout style",
              containIntrinsicSize: "1440px 280px",
              minHeight: "280px",
            }}
          >
            {/* Review Card 1 - Jeanine Ganz */}
            <div
              className="review-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: "start",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid #f3f4f6",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar and Rating Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* Avatar */}
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/jganz_vjllm7.avif"
                  alt="Jeanine Ganz"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#10a0a4",
                    borderRadius: "50%",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  JG
                </div>

                {/* Rating Section - Stacked vertically */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {/* 5 Stars */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
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
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Google Bewertung
                  </span>
                </div>
              </div>

              {/* Review Text with Line Clamping */}
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#374151",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontStyle: "italic",
                }}
              >
                "Sehr freundlicher, unkomplizierter und qualitativ einwandfreier Service. Die Endreinigung der Wohnung wurde ohne Beanstandung abgenommen..."
              </div>

              {/* Author Name */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: "8px",
                }}
              >
                Jeanine Ganz
              </div>
            </div>

            {/* Review Card 2 - Albert Radamonti */}
            <div
              className="review-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: "start",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid #f3f4f6",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar and Rating Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* Avatar */}
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/albert_1_sionfn.avif"
                  alt="Albert Radamonti"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#10a0a4",
                    borderRadius: "50%",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  AR
                </div>

                {/* Rating Section - Stacked vertically */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {/* 5 Stars */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
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
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Google Bewertung
                  </span>
                </div>
              </div>

              {/* Review Text with Line Clamping */}
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#374151",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontStyle: "italic",
                }}
              >
                "Super Service und einwandfreie Erledigung. Preis-Leistung ist top! Einfache Abwicklung, günstiger Preis und saubere Arbeit mit..."
              </div>

              {/* Author Name */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: "8px",
                }}
              >
                Albert Radamonti
              </div>
            </div>

            {/* Review Card 3 - Gerussi Renato */}
            <div
              className="review-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: "start",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid #f3f4f6",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar and Rating Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* Avatar */}
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/renato_zhinmm.avif"
                  alt="Gerussi Renato"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#10a0a4",
                    borderRadius: "50%",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  GR
                </div>

                {/* Rating Section - Stacked vertically */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {/* 5 Stars */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
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
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Google Bewertung
                  </span>
                </div>
              </div>

              {/* Review Text with Line Clamping */}
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#374151",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontStyle: "italic",
                }}
              >
                "Die Endreinigung war perfekt, inklusive Wohnungsabgabe. Herr Polli arbeitet nicht nur effektiv, er ist auch ausgesprochen sympathisch. Der Preis..."
              </div>

              {/* Author Name */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: "8px",
                }}
              >
                Gerussi Renato
              </div>
            </div>

            {/* Review Card 4 - Roter Kater */}
            <div
              className="review-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: "start",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid #f3f4f6",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar and Rating Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* Avatar */}
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/rkater_1_tkyxzs.avif"
                  alt="Roter Kater"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#10a0a4",
                    borderRadius: "50%",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  RK
                </div>

                {/* Rating Section - Stacked vertically */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {/* 5 Stars */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
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
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Google Bewertung
                  </span>
                </div>
              </div>

              {/* Review Text with Line Clamping */}
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#374151",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontStyle: "italic",
                }}
              >
                "Reinigt einmal in der Woche unser pop-up. Super Service und freundliches Personal."
              </div>

              {/* Author Name */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: "8px",
                }}
              >
                Roter Kater
              </div>
            </div>

            {/* Review Card 5 - Nikola C */}
            <div
              className="review-card"
              style={{
                flexShrink: 0,
                scrollSnapAlign: "start",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid #f3f4f6",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar and Rating Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* Avatar */}
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/nikolac_1_t1tzdu.avif"
                  alt="Nikola C"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#10a0a4",
                    borderRadius: "50%",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  NC
                </div>

                {/* Rating Section - Stacked vertically */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {/* 5 Stars */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
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
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Google Bewertung
                  </span>
                </div>
              </div>

              {/* Review Text with Line Clamping */}
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "#374151",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontStyle: "italic",
                }}
              >
                "TOP ZUFRIEDENHEIT. Wir waren mit der Endreinigung sehr zufrieden - unsere erste offizielle Wohnungsübergabe und alles verlief dank der super Reinigung bestens..."
              </div>

              {/* Author Name */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: "8px",
                }}
              >
                Nikola C
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <button
              id="carousel-prev"
              aria-label="Previous slide"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "white",
                border: "2px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "#10a0a4";
                (e.target as HTMLElement).style.backgroundColor = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                (e.target as HTMLElement).style.backgroundColor = "white";
              }}
            >
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#6b7280",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              id="carousel-next"
              aria-label="Next slide"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "white",
                border: "2px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "#10a0a4";
                (e.target as HTMLElement).style.backgroundColor = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = "#e5e7eb";
                (e.target as HTMLElement).style.backgroundColor = "white";
              }}
            >
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#6b7280",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Review Carousel with Navigation */
        .carousel-track {
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .carousel-track::-webkit-scrollbar {
          display: none;
        }

        .review-card {
          scroll-snap-align: start;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        /* Mobile: show 1 card at a time */
        @media (max-width: 767px) {
          .review-card {
            width: 90% !important;
            min-width: 90% !important;
            max-width: 350px !important;
          }
        }

        /* Tablet: show 2 cards */
        @media (min-width: 768px) and (max-width: 1023px) {
          .review-card {
            width: 48% !important;
            min-width: 48% !important;
            max-width: 400px !important;
          }
        }

        /* Desktop: show 3 cards */
        @media (min-width: 1024px) {
          .review-card {
            width: 32% !important;
            min-width: 32% !important;
            max-width: 380px !important;
          }
        }

        /* Navigation Button Hover Effects */
        #carousel-prev:hover,
        #carousel-next:hover {
          border-color: #10a0a4 !important;
          background-color: #f8fafc !important;
        }

        #carousel-prev:hover svg,
        #carousel-next:hover svg {
          color: #10a0a4 !important;
        }
      `}</style>
    </section>
  );
};

export default CustomerReviews;
