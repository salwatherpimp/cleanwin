"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CleanWinPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile responsive styles - only add what's needed for mobile without affecting desktop
  const mobileStyles = `
    <style>
      @media (max-width: 767px) {
        .hero-mobile { height: 400px !important; min-height: 350px !important; }
        .hero-content-mobile { padding: 60px 16px 24px !important; }
        .hero-title-mobile { font-size: 28px !important; line-height: 36px !important; }
        .hero-subtitle-mobile { font-size: 16px !important; line-height: 24px !important; }
        .logo-mobile { width: 160px !important; height: 45px !important; }
        .grid-mobile-1 { grid-template-columns: 1fr !important; gap: 16px !important; }
                .grid-mobile-2 { grid-template-columns: 1fr !important; gap: 32px !important; }
                .grid-mobile-3 { grid-template-columns: 1fr !important; gap: 16px !important; }
        .grid-mobile-logos { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        .logo-container-mobile { width: 80px !important; height: 40px !important; }
      }
    </style>
    `;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: mobileStyles }} />
      {/* Header Navigation */}
      <header
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: 50,
          backdropFilter: isScrolled ? "none" : "blur(8px)",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.1)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "12px 16px",
          }}
        >
          <a
            href="https://cleanwin.vercel.app/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "rgb(0, 0, 238)",
              textDecoration: "underline solid rgb(0, 0, 238)",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          >
            <Image
              src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fv1752003683%2Fcleanwin-logo_ysvfv0.avif&w=640&q=75"
              alt="CleanWin Logo"
              width={200}
              height={56}
              className="logo-mobile"
              style={{
                width: "200px",
                height: "56px",
                aspectRatio: "auto 200 / 56",
                overflowClipMargin: "content-box",
                overflowX: "clip",
                overflowY: "clip",
              }}
            />
          </a>
        </div>
      </header>

      {/* Simple content */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>CleanWin - Professional Cleaning Services</h1>
        <p>Loading...</p>
      </section>
    </div>
  );
}
