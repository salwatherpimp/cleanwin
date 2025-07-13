"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  initial: string;
  profileImage: string;
  text: string;
}

export default function CustomerTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(5); // Start in middle of array
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const originalTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jeanine Ganz",
      initial: "J",
      profileImage:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/jganz_vjllm7.avif",
      text: "Sehr freundlicher, unkomplizierter und qualitativ einwandfreier Service. Die Endreinigung der Wohnung wurde ohne Beanstandung abgenommen...",
    },
    {
      id: 2,
      name: "Albert Radamonti",
      initial: "A",
      profileImage:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/albert_1_sionfn.avif",
      text: "Super Service und einwandfreie Erledigung. Preis-Leistung ist top! Einfache Abwicklung, günstiger Preis und saubere Arbeit mit...",
    },
    {
      id: 3,
      name: "Gerussi Renato",
      initial: "G",
      profileImage:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/renato_zhinmm.avif",
      text: "Die Endreinigung war perfekt, inklusive Wohnungsabgabe. Herr Polli arbeitet nicht nur effektiv, er ist auch ausgesprochen sympathisch. Der Preis...",
    },
    {
      id: 4,
      name: "Roter Kater",
      initial: "R",
      profileImage:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/rkater_1_tkyxzs.avif",
      text: "Reinigt einmal in der Woche unser pop-up. Super Service und freundliches Personal.",
    },
    {
      id: 5,
      name: "Nikola C",
      initial: "N",
      profileImage:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/v1752443987/nikolac_1_t1tzdu.avif",
      text: "TOP ZUFRIEDENHEIT. Wir waren mit der Endreinigung sehr zufrieden - unsere erste offizielle Wohnungsübergabe und alles verlief dank der super Reinigung bestens...",
    },
  ];

  // Create extended array for infinite loop effect
  const testimonials = [
    ...originalTestimonials,
    ...originalTestimonials,
    ...originalTestimonials,
  ];

  const totalOriginal = originalTestimonials.length;

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => prev - 1);
  };

  // Handle infinite loop reset after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        if (currentTestimonial >= totalOriginal * 2) {
          setCurrentTestimonial(totalOriginal);
        } else if (currentTestimonial < totalOriginal) {
          setCurrentTestimonial(totalOriginal + currentTestimonial);
        }
        setIsTransitioning(false);
      }, 500); // Match CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentTestimonial, isTransitioning, totalOriginal]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = isMobile ? 30 : 50; // Shorter distance for mobile
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="section-spacing testimonial-section-mobile"
      style={{
        background: "linear-gradient(135deg, #f6f9f9 0%, #e7f1f3 100%)",
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
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            className="headline-spacing"
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#111827",
              textAlign: "center",
            }}
          >
            Das sagen unsere Kunden
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "28px",
              marginBottom: "48px",
              marginTop: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "768px",
              textAlign: "center",
            }}
          >
            Überzeugen Sie sich von der Qualität unserer Arbeit und senden sie
            uns noch heute eine unverbindliche Kontaktanfrage.
          </p>
        </div>
        {/* Modern Testimonial Carousel */}
        <div
          className="testimonial-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            className="carousel-nav left"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg
              style={{
                width: "20px",
                height: "20px",
                color: "#111827",
                fill: "none",
                stroke: "#111827",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
              viewBox="0 0 24 24"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            className="carousel-nav right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg
              style={{
                width: "20px",
                height: "20px",
                color: "#111827",
                fill: "none",
                stroke: "#111827",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Testimonial Track */}
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${currentTestimonial * (isMobile ? 100 : 33.333)}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card"
              >
                {/* Star Rating */}
                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#fbbf24",
                          fill: "#fbbf24",
                        }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Google Review
                  </div>
                </div>

                {/* Avatar */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#10a0a4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "20px",
                    boxShadow: "0 4px 12px rgba(16, 160, 164, 0.3)",
                    ...(testimonial.profileImage && {
                      backgroundImage: `url(${testimonial.profileImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }),
                  }}
                >
                  {testimonial.profileImage ? "" : testimonial.initial}
                </div>

                {/* Quote */}
                <blockquote
                  className="testimonial-quote"
                  style={{
                    fontSize: "16px",
                    fontStyle: "italic",
                    color: "#1f2937",
                    marginBottom: "20px",
                    textAlign: "center",
                    flex: 1,
                    margin: "0 0 20px 0",
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Customer Name */}
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#111827",
                    textAlign: "center",
                  }}
                >
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots for mobile */}
          <div className="testimonial-pagination">
            {Array.from({ length: originalTestimonials.length }, (_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  currentTestimonial % originalTestimonials.length === index
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setCurrentTestimonial(originalTestimonials.length + index)
                }
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
