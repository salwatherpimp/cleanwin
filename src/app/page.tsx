"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ClientLogosSection from "../components/ClientLogosSection";
import WhyChooseCleanwinSection from "../components/WhyChooseCleanwinSection";
import CustomerTestimonialsSection from "../components/CustomerTestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";

export default function CleanwinPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isDesktopCtaDropdownOpen, setIsDesktopCtaDropdownOpen] =
    useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Business hours state - only calculated on client to prevent hydration mismatch
  const [isBusinessTime, setIsBusinessTime] = useState(false);

  // Business hours logic (Monday to Friday, 08:00-17:00 CET)
  const checkBusinessHours = () => {
    const now = new Date();
    const cetTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/Zurich" }),
    );
    const day = cetTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = cetTime.getHours();

    // Monday (1) to Friday (5), 8 AM to 5 PM
    return day >= 1 && day <= 5 && hour >= 8 && hour < 17;
  };

  // Mobile responsive styles - only add what's needed for mobile without affecting desktop
  const mobileStyles = `
    <style>
      @media (max-width: 767px) {
                .hero-mobile { min-height: 500px !important; height: auto !important; }
        .hero-content-mobile { padding: 60px 16px 40px !important; }
        .hero-title-mobile { font-size: 28px !important; line-height: 36px !important; }
        .hero-subtitle-mobile { font-size: 16px !important; line-height: 24px !important; }
        .logo-mobile { width: 160px !important; height: 45px !important; }
        .grid-mobile-1 { grid-template-columns: 1fr !important; gap: 16px !important; }
        .grid-mobile-2 { grid-template-columns: 1fr !important; gap: 32px !important; }
        .grid-mobile-3 { grid-template-columns: 1fr !important; gap: 16px !important; }
        .grid-mobile-logos { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        .logo-container-mobile { width: 80px !important; height: 40px !important; }
        .services-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
                .service-card-title { font-size: 18px !important; }
        .service-card-price { font-size: 12px !important; padding: 6px 10px !important; }
        .feature-card-title { font-size: 16px !important; }
      }
            .responsive-container {
        padding-left: 16px;
        padding-right: 16px;
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        /* Tablet styles - 32px padding */
        .responsive-container { padding-left: 32px !important; padding-right: 32px !important; }
        .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
      }
            @media (min-width: 1024px) {
        /* Desktop styles - 48px padding on larger screens */
        .responsive-container { padding-left: 48px !important; padding-right: 48px !important; }
                .services-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
      }

            /* Responsive Section Spacing */
            .section-spacing {
        padding: 38px 0;
      }

      .section-spacing-sm {
        padding: 22px 0;
      }

      .headline-spacing {
        margin-bottom: 24px;
        margin-top: 24px;
      }

            .button-spacing {
        margin-bottom: 24px;
        margin-top: 24px;
      }

            @media (max-width: 767px) {
                .section-spacing {
          padding: 22px 0 !important;
        }

        .section-spacing-sm {
          padding: 14px 0 !important;
        }

        .headline-spacing {
          margin-bottom: 16px !important;
          margin-top: 16px !important;
        }

                        .button-spacing {
          margin-bottom: 16px !important;
          margin-top: 16px !important;
        }
      }

      /* CTA Button Hover Effects */
      .cta-button {
        transition: all 0.3s ease-in-out;
        position: relative;
        overflow: hidden;
      }

      .cta-button:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      .cta-button:focus {
        outline: 3px solid rgba(16, 160, 164, 0.5);
        outline-offset: 2px;
      }

      .cta-button-primary:hover {
        background-color: #0e8c90;
      }

      .cta-button-secondary:hover {
        background-color: #f8f9fa;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }

      /* Disable hover effects on touch devices */
      @media (hover: none) and (pointer: coarse) {
        .cta-button:hover {
          transform: none;
          box-shadow: initial;
        }

        .cta-button-primary:hover {
          background-color: #10a0a4;
        }

        .cta-button-secondary:hover {
          background-color: white;
        }
      }

            /* Infinite logo scroll animation */
      @keyframes logoScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

            /* Infinite USP scroll animation - matches logo speed */
      @keyframes uspScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      /* Dropdown fade in animation */
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .logo-scroll-container {
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        padding: 20px 0;
      }

            .logo-scroll-track {
        display: flex;
        animation: logoScroll 45s linear infinite;
        width: fit-content;
      }

      .logo-scroll-item {
        flex: 0 0 auto;
        margin-right: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

                  .logo-scroll-track:hover {
        animation-play-state: paused;
      }

      /* Mobile USP Scroll Styles */
      .usp-scroll-container {
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        padding: 16px 0;
      }

      .usp-scroll-track {
        display: flex;
                                animation: uspScroll 30s linear infinite;
        width: fit-content;
        gap: 16px;
      }

      .usp-scroll-item {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        background: white;
        border: 1px solid rgba(16, 160, 164, 0.1);
        border-radius: 12px;
        padding: 16px 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
        white-space: nowrap;
      }

                  .usp-scroll-track:hover {
        animation-play-state: paused;
      }

      /* Touch support for mobile USP scroll */
      .usp-scroll-container {
        -webkit-overflow-scrolling: touch;
        touch-action: pan-x;
      }

      .usp-scroll-track {
        touch-action: pan-x;
      }

      /* Responsive visibility for USP layouts */
      @media (max-width: 767px) {
        .benefits-desktop-layout {
          display: none !important;
        }

        .benefits-mobile-layout {
          display: block !important;
        }
      }

      @media (min-width: 768px) {
        .benefits-desktop-layout {
          display: block !important;
        }

                .benefits-mobile-layout {
          display: none !important;
        }
      }

      /* About Section Layout Improvements */
      .about-section-grid {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 48px;
        align-items: flex-start;
      }

      @media (max-width: 1023px) {
        .about-section-grid {
          grid-template-columns: 1fr !important;
          gap: 32px !important;
          text-align: center;
        }
      }

            @media (max-width: 767px) {
        .about-section-grid {
          gap: 24px !important;
        }
      }

      .about-image-gallery {
        margin-top: 24px;
      }

      @media (max-width: 1023px) {
        .about-image-gallery {
          margin-top: 0px !important;
        }
      }

      /* Mobile accordion styles for Cleanwin features */
      @media (max-width: 767px) {
        .cleanwin-features-grid {
          display: none !important;
        }

        .cleanwin-features-accordion {
          display: flex !important;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;
          backdrop-filter: blur(4px);
          overflow: hidden;
          transition: all 0.3s ease;
        }

                .accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          cursor: pointer;
          user-select: none;
          min-height: 72px;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .accordion-content.expanded {
          max-height: 200px;
          padding: 0 16px 16px 16px;
        }

        .accordion-icon-toggle {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }

        .accordion-icon-toggle.expanded {
          transform: rotate(45deg);
        }
      }

            @media (min-width: 768px) {
        .cleanwin-features-accordion {
          display: none !important;
        }
      }

      /* Testimonial Carousel Styles */
      .testimonial-carousel {
        position: relative;
        overflow: hidden;
        padding: 0 60px;
      }

            .testimonial-track {
        display: flex;
        gap: 24px;
      }

            .testimonial-card {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-height: 280px;
      }

      /* Improved line-height for testimonial text */
      .testimonial-quote {
        line-height: 1.5em !important;
      }

            .carousel-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 10;
        opacity: 0;
        pointer-events: none;
      }

      .testimonial-carousel:hover .carousel-nav {
        opacity: 1;
        pointer-events: auto;
      }

      .carousel-nav:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-50%) scale(1.05);
      }

      .carousel-nav.left {
        left: 12px;
      }

            .carousel-nav.right {
        right: 12px;
      }

      /* Pagination dots */
      .testimonial-pagination {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 32px;
      }

      .pagination-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(107, 114, 128, 0.3);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .pagination-dot.active {
        background-color: #10a0a4;
        transform: scale(1.2);
      }

      .pagination-dot:hover {
        background-color: rgba(16, 160, 164, 0.7);
      }

            @media (max-width: 767px) {
                .testimonial-carousel {
          padding: 0;
          margin: 0 16px;
        }

        .testimonial-track {
          gap: 0;
        }

                .testimonial-card {
          width: 100%;
          min-width: 100%;
          margin: 0;
          flex-shrink: 0;
        }

        

                /* Hide navigation arrows on mobile */
        .carousel-nav {
          display: none !important;
        }

                .testimonial-pagination {
          margin-top: 32px;
          margin-bottom: 32px;
          gap: 12px;
        }

                .pagination-dot {
          width: 14px;
          height: 14px;
        }
      }

            /* Custom testimonial section mobile padding */
      @media (max-width: 767px) {
        .testimonial-section-mobile {
          padding-bottom: 32px !important;
        }
      }

      /* Extra small screens (320px-480px) */
      @media (max-width: 480px) {
        .testimonial-carousel {
          margin: 0 12px;
        }

        .testimonial-card {
          padding: 20px;
          min-height: 260px;
        }

        .testimonial-pagination {
          margin-bottom: 24px;
        }

                .testimonial-section-mobile {
          padding-bottom: 24px !important;
        }
      }

                  /* Navigation Responsive Styles */
            @media (max-width: 767px) {
        .hidden.md\\:flex {
          display: none !important;
        }
      }

            /* Enhanced mobile navigation styles */
      @media (max-width: 360px) {
        .mobile-logo {
          width: 160px !important;
          height: 45px !important;
        }

                .mobile-cta-btn {
          font-size: 12px !important;
          padding: 8px 14px !important;
          gap: 6px !important;
          overflow: visible !important;
        }

        .mobile-nav-container {
          padding: 12px 14px !important;
          min-height: 72px !important;
        }
      }

      @media (min-width: 375px) and (max-width: 767px) {
        .mobile-logo {
          width: 130px !important;
          height: 36px !important;
        }

                                .mobile-cta-btn {
          font-size: 12px !important;
                    padding: 7px 12px 7px 18px !important;
          gap: 5px !important;
          max-width: 140px !important;
          overflow: visible !important;
        }

        .mobile-cta-btn span {
          display: inline;
        }

        .mobile-cta-btn::after {
          content: "";
        }
      }

            @media (min-width: 768px) {
        .md\\:hidden {
          display: none !important;
        }
        .hidden.md\\:flex {
          display: flex !important;
        }
      }

                  /* Header Height Compensation */
      .hero-mobile {
        padding-top: 76px !important;
      }

      @media (min-width: 768px) {
        .hero-mobile {
          padding-top: 96px !important;
        }
      }

            /* Prevent content overlap */
      .content-below-header {
        margin-top: 76px;
      }

      @media (min-width: 768px) {
        .content-below-header {
          margin-top: 96px;
        }
      }

      /* Navigation Styles */
            .desktop-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        border: 1px solid rgba(0, 0, 0, 0.08);
        min-width: 220px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: all 0.2s ease-out;
        overflow: hidden;
        z-index: 60;
      }

      .desktop-dropdown.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

            .dropdown-item {
        display: block;
        padding: 12px 20px;
        color: #374151;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        transition: all 0.2s ease;
        position: relative;
      }

      .dropdown-item:hover {
        background-color: #f8f9fa;
        color: #10a0a4;
        transform: none;
      }

            .dropdown-item:last-child {
        border-bottom: none;
      }

      /* Desktop Navigation Hover Effects */
      .desktop-nav-item {
        position: relative;
        transition: color 0.2s ease;
      }

      .desktop-nav-item:hover {
        color: #10a0a4 !important;
      }

      .desktop-nav-item::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background-color: #10a0a4;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      .desktop-nav-item:hover::after {
        width: 100%;
      }

      /* Mobile Navigation Styles */
      .mobile-nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        z-index: 100;
      }

      .mobile-nav-overlay.open {
        opacity: 1;
        visibility: visible;
      }

      .mobile-nav-menu {
        position: fixed;
        top: 80px;
        left: 16px;
        right: 16px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px) scale(0.95);
        transition: all 0.3s ease-in-out;
        z-index: 101;
        max-height: calc(100vh - 100px);
        overflow-y: auto;
      }

      .mobile-nav-menu.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }

                  .mobile-nav-content {
        padding: 20px 24px;
      }

      .mobile-nav-main-item {
        font-size: 16px;
        font-weight: 600;
        color: #111827;
        padding: 10px 8px;
        margin: 2px 0;
        min-height: 48px;
        display: flex;
        align-items: center;
        line-height: 1.4;
      }

      .mobile-nav-main-link {
        text-decoration: none;
        transition: all 0.2s ease;
        border-radius: 6px;
      }

      .mobile-nav-main-link:hover {
        color: #10a0a4;
        background-color: rgba(16, 160, 164, 0.05);
        transform: translateX(2px);
      }

      .mobile-nav-main-link:active {
        background-color: rgba(16, 160, 164, 0.1);
        transform: translateX(0);
      }

      .mobile-nav-item {
        display: flex;
        align-items: center;
        padding: 10px 8px;
        color: #374151;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        min-height: 48px;
        line-height: 1.4;
        transition: all 0.2s ease;
        border-radius: 6px;
        margin: 2px 0;
      }

      .mobile-nav-subitem {
        padding-left: 24px;
        font-size: 15px;
        color: #6b7280;
        margin-left: 8px;
      }

      .mobile-nav-divider {
        height: 1px;
        background-color: #e5e7eb;
        margin: 16px 0;
        opacity: 0.6;
      }

                                    .mobile-nav-item:hover {
        color: #10a0a4;
        background-color: rgba(16, 160, 164, 0.05);
        transform: translateX(2px);
      }

      .mobile-nav-item:active {
        background-color: rgba(16, 160, 164, 0.1);
        transform: translateX(0);
      }

      .mobile-nav-subitem:hover {
        color: #10a0a4;
        background-color: rgba(16, 160, 164, 0.03);
      }

      .mobile-nav-cta {
        margin: 24px;
        margin-bottom: 32px;
      }

            @media (min-width: 768px) {
        .testimonial-card {
          width: calc(33.333% - 16px);
          min-width: calc(33.333% - 16px);
        }

        /* Hide pagination dots on desktop */
        .testimonial-pagination {
          display: none;
        }
      }
    </style>
    `;

  useEffect(() => {
    // Mark as client-side to prevent hydration mismatches
    setIsClient(true);

    // Check business hours on client only
    setIsBusinessTime(checkBusinessHours());

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu and dropdown outside clicks and escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsDesktopDropdownOpen(false);
        setIsDesktopCtaDropdownOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;

      // Close CTA dropdowns if clicking outside
      if (!target.closest(".dropdown-container")) {
        setIsDesktopCtaDropdownOpen(false);
        setIsMobileDropdownOpen(false);
      }

      // Close Leistungen dropdown if clicking outside
      if (!target.closest(".leistungen-dropdown")) {
        setIsDesktopDropdownOpen(false);
      }

      // Close mobile menu if clicking outside
      if (
        !target.closest(".mobile-menu-container") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      } else {
        setIsDesktopDropdownOpen(false);
        setIsDesktopCtaDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth scroll to services section
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes("#services")) {
        e.preventDefault();
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add event listener to all anchor links
    const anchors = document.querySelectorAll('a[href="#services"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        width: "100%",
        overflow: "hidden",
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
          zIndex: 1000,
          backdropFilter: isClient && isScrolled ? "none" : "blur(12px)",
          backgroundColor:
            isClient && isScrolled
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 0.3)",
          backgroundImage:
            isClient && isScrolled
              ? "none"
              : "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.05) 100%)",
          borderBottom:
            isClient && isScrolled
              ? "1px solid rgba(0, 0, 0, 0.1)"
              : "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Desktop Navigation Container */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "16px 24px",
            minHeight: "80px",
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
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
              alt="Cleanwin Logo"
              width={200}
              height={56}
              loading="eager"
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

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="hidden md:flex"
          >
            {/* Services Dropdown */}
            <div
              className="leistungen-dropdown"
              style={{ position: "relative" }}
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  color: isClient && isScrolled ? "#374151" : "white",
                  fontWeight: "500",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                <span>Leistungen</span>
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: isClient && isScrolled ? "#374151" : "white",
                    stroke: isClient && isScrolled ? "#374151" : "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transition: "transform 0.2s",
                    transform: isDesktopDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`desktop-dropdown ${isDesktopDropdownOpen ? "open" : ""}`}
              >
                <a href="/fensterreinigung" className="dropdown-item">
                  Fensterreinigung
                </a>
                <a href="/unterhaltsreinigung" className="dropdown-item">
                  Unterhaltsreinigung
                </a>
                <a href="/solarpanel-reinigen" className="dropdown-item">
                  Solarpanel reinigen
                </a>
                <a href="/fassadenreinigung" className="dropdown-item">
                  Fassadenreinigung
                </a>
                <a href="/umzugsreinigung" className="dropdown-item">
                  Umzugsreinigung
                </a>
                <a href="/baureinigung" className="dropdown-item">
                  Baureinigung
                </a>
              </div>
            </div>

            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              className="desktop-nav-item"
              style={{
                color: isClient && isScrolled ? "#374151" : "white",
                fontWeight: "500",
                fontSize: "16px",
                padding: "8px 0",
                textDecoration: "none",
                textShadow:
                  isClient && isScrolled
                    ? "none"
                    : "rgba(0, 0, 0, 0.3) 0px 1px 3px",
                transition: "color 0.2s",
              }}
            >
              Über uns
            </a>

            <a
              href="https://cleanwin.vercel.app/referenzen"
              className="desktop-nav-item"
              style={{
                color: isClient && isScrolled ? "#374151" : "white",
                fontWeight: "500",
                fontSize: "16px",
                padding: "8px 0",
                textDecoration: "none",
                textShadow:
                  isClient && isScrolled
                    ? "none"
                    : "rgba(0, 0, 0, 0.3) 0px 1px 3px",
                transition: "color 0.2s",
              }}
            >
              Referenzen
            </a>

            <div
              className="dropdown-container"
              style={{ position: "relative" }}
            >
              <button
                className="cta-button cta-button-primary"
                onClick={() =>
                  setIsDesktopCtaDropdownOpen(!isDesktopCtaDropdownOpen)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "12px 16px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "500",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                  <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
                <span>Kontaktiere uns</span>
                <svg
                  style={{
                    width: "12px",
                    height: "12px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    transform: isDesktopCtaDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  viewBox="0 0 24 24"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </button>

              {isDesktopCtaDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    marginTop: "8px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    zIndex: 50,
                    minWidth: "200px",
                    animation: "fadeIn 0.2s ease-in-out",
                  }}
                >
                  <a
                    href="/kontakt"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      color: "#374151",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                      textAlign: "center",
                      borderBottom:
                        isClient && isBusinessTime
                          ? "1px solid #f3f4f6"
                          : "none",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#f9fafb";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Kontaktanfrage senden
                  </a>
                  {isClient && isBusinessTime && (
                    <a
                      href="tel:+41525512424"
                      style={{
                        display: "block",
                        padding: "12px 16px",
                        color: "#374151",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                        textAlign: "center",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#f9fafb";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      +41 52 551 24 24
                    </a>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Container */}
        <div
          className="md:hidden mobile-nav-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            position: "relative",
            minHeight: "76px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <a
              href="https://cleanwin.vercel.app/"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-1px",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
                alt="Cleanwin Logo"
                width={200}
                height={56}
                loading="eager"
                className="mobile-logo"
                style={{
                  height: "56px",
                  width: "auto",
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))",
                  objectFit: "contain",
                  aspectRatio: "200/56",
                }}
              />
            </a>
          </div>

          {/* Center CTA Button */}
          <div
            style={{
              flex: "1 1 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 8px",
              overflow: "visible",
            }}
          >
            <div
              className="dropdown-container"
              style={{ position: "relative", overflow: "visible" }}
            >
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="mobile-cta-btn cta-button cta-button-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 14px 8px 20px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  whiteSpace: "nowrap",
                  minHeight: "40px",
                  overflow: "visible",
                  textOverflow: "ellipsis",
                  overflowX: "visible",
                  overflowY: "visible",
                  width: "auto",
                  maxWidth: "none",
                  position: "relative",
                  boxShadow: "0 1px 6px rgba(16, 160, 164, 0.25)",
                }}
              >
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    flexShrink: 0,
                    display: "block",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                  <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
                <span>Kontaktiere uns</span>
                <svg
                  style={{
                    width: "12px",
                    height: "12px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    flexShrink: 0,
                    transform: isMobileDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  viewBox="0 0 24 24"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </button>

              {isMobileDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    marginTop: "8px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    zIndex: 50,
                    minWidth: "180px",
                    animation: "fadeIn 0.2s ease-in-out",
                  }}
                >
                  <a
                    href="/kontakt"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      color: "#374151",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "500",
                      textAlign: "center",
                      borderBottom:
                        isClient && isBusinessTime
                          ? "1px solid #f3f4f6"
                          : "none",
                      transition: "background-color 0.2s",
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.backgroundColor = "#f9fafb";
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Kontaktanfrage senden
                  </a>
                  {isClient && isBusinessTime && (
                    <a
                      href="tel:+41525512424"
                      style={{
                        display: "block",
                        padding: "12px 16px",
                        color: "#374151",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: "500",
                        textAlign: "center",
                        transition: "background-color 0.2s",
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.backgroundColor = "#f9fafb";
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      +41 52 551 24 24
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu */}
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              marginRight: "0px",
            }}
          >
            <button
              className="hamburger-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: isClient && isScrolled ? "#374151" : "white",
                cursor: "pointer",
                transition: "all 0.2s ease",
                borderRadius: "10px",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  stroke: "currentColor",
                  strokeWidth: "2px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                }}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <>
                    <path d="m18 6-12 12" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`mobile-nav-menu mobile-menu-container ${isMobileMenuOpen ? "open" : ""} md:hidden`}
        >
          <div className="mobile-nav-content">
            {/* Top-level Navigation Items */}

            {/* Leistungen - Main Category */}
            <div className="mobile-nav-main-item">Leistungen</div>

            {/* Service Subitems */}
            <a
              href="/fensterreinigung"
              className="mobile-nav-item mobile-nav-subitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fensterreinigung
            </a>
            <a
              href="/unterhaltsreinigung"
              className="mobile-nav-item mobile-nav-subitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Unterhaltsreinigung
            </a>
            <a
              href="/solarpanel-reinigen"
              className="mobile-nav-item mobile-nav-subitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solarpanel reinigen
            </a>
            <a
              href="/fassadenreinigung"
              className="mobile-nav-item mobile-nav-subitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fassadenreinigung
            </a>
            <a
              href="/umzugsreinigung"
              className="mobile-nav-item mobile-nav-subitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Umzugsreinigung
            </a>
            <a
              href="/baureinigung"
              className="mobile-nav-item mobile-nav-subitem"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Baureinigung
            </a>

            {/* Section Divider */}
            <div className="mobile-nav-divider"></div>

            {/* ��ber uns - Main Category */}
            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              className="mobile-nav-main-item mobile-nav-main-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Über uns
            </a>

            {/* Referenzen - Main Category */}
            <a
              href="https://cleanwin.vercel.app/referenzen"
              className="mobile-nav-main-item mobile-nav-main-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referenzen
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero-mobile"
        style={{
          position: "relative",
          minHeight: "600px",
          height: "auto",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "76px",
          paddingBottom: "40px",
        }}
      >
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_600,c_fill,f_auto,q_auto/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          alt="Cleanwin Hero Background"
          fill
          loading="eager"
          fetchPriority="high"
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
          className="hero-content-mobile responsive-container"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 16px 40px",
            textAlign: "center",
            color: "white",
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
            }}
          >
            Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und
            echte Nähe. Keine Schwarzarbeit und 100% Verlässlichkeit - für
            Privat &amp; Gewerbe.
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
          <div>
            <a
              href="/kontakt"
              className="cta-button cta-button-secondary"
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
              }}
            >
              Jetzt unverbindlich kontaktieren
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="section-spacing-sm"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Desktop/Tablet Layout */}
        <div
          className="responsive-container benefits-desktop-layout"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            className="grid-mobile-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* Pricing Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "24px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Reinigung ab CHF 199.-
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Transparente Preise
                </div>
              </div>
            </div>

            {/* Consultation Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "24px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#40d5ac",
                    stroke: "#40d5ac",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  Kostenlose Fachberatung
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Unverbindlich & persönlich
                </div>
              </div>
            </div>

            {/* Legitimacy Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(16, 160, 164, 0.1)",
                borderRadius: "12px",
                padding: "24px",
                gap: "12px",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
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
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  100% keine Schwarzarbeit
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  Seriös & versichert
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Scrolling Layout */}
        <div
          className="benefits-mobile-layout"
          style={{
            width: "100%",
          }}
        >
          <div className="usp-scroll-container">
            <div className="usp-scroll-track">
              {/* First set of USP items */}
              <div className="usp-scroll-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    marginRight: "12px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "14px",
                      height: "14px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Reinigung ab CHF 199.-
                </span>
              </div>

              <div className="usp-scroll-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    marginRight: "12px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "14px",
                      height: "14px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Kostenlose Fachberatung
                </span>
              </div>

              <div className="usp-scroll-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    marginRight: "12px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "14px",
                      height: "14px",
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
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  100% keine Schwarzarbeit
                </span>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="usp-scroll-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    marginRight: "12px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "14px",
                      height: "14px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Reinigung ab CHF 199.-
                </span>
              </div>

              <div className="usp-scroll-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    marginRight: "12px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "14px",
                      height: "14px",
                      color: "#40d5ac",
                      stroke: "#40d5ac",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  Kostenlose Fachberatung
                </span>
              </div>

              <div className="usp-scroll-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "50%",
                    marginRight: "12px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    style={{
                      width: "14px",
                      height: "14px",
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
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  100% keine Schwarzarbeit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="section-spacing"
        style={{
          backgroundColor: "#f9fafb",
          position: "relative",
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
          <div className="about-section-grid">
            {/* Text Content */}
            <div>
              <h2
                className="headline-spacing"
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                Über 10 Jahre Reinigungserfahrung in Winterthur und Umgebung
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "28px",
                  marginBottom: "16px",
                  marginTop: "0px",
                }}
              >
                Seit über zehn Jahren steht Cleanwin für gründliche, faire und
                nachhaltige Reinigungsdienstleistungen im Grossraum Winterthur.
                Ob Fensterreinigung, Fassadenpflege oder Umzugsreinigung - wir
                bringen Erfahrung, Sorgfalt und Menschlichkeit zusammen. Unsere
                kostenlose Vor-Ort-Beratung bietet Ihnen maximale Transparenz.
                Dahinter steht ein geschultes, fair entlöhntes Team, das sich
                mit Engagement und Fachwissen für beste Ergebnisse einsetzt.
              </p>
              <a
                href="#services"
                className="cta-button cta-button-primary"
                style={{
                  display: "inline-block",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "12px 32px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Leistungen Entdecken
              </a>
            </div>

            {/* Image Gallery */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                width: "100%",
              }}
              className="about-image-gallery grid grid-cols-2 gap-3 md:gap-4"
            >
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FFirmenwagen_vor_Geba%25CC%2588ude_zz0m0s.avif&w=750&q=75"
                  alt="Cleaning Service"
                  fill
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FGlasreinigung_aussen_Flaach_ec1fre.avif&w=750&q=75"
                  alt="Office Cleaning"
                  fill
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752005906%2Fhomepage-herosection_fsxqwc.avif&w=750&q=75"
                  alt="Professional Cleaning"
                  fill
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  height: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://cleanwin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwlk9of7h%2Fimage%2Fupload%2Fw_400%2Ch_300%2Cc_fill%2Cf_auto%2Cq_auto%2Fv1752095182%2FFassadenreinigung_Sichtbeton_vm1lsq.avif&w=750&q=75"
                  alt="Home Cleaning"
                  fill
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogosSection />

      {/* Services Section */}
      <section
        id="services"
        className="section-spacing"
        style={{
          background: "linear-gradient(135deg, #f6f9f9 0%, #e7f1f3 100%)",
          position: "relative",
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
              Unsere Leistungen
            </h2>
          </div>
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {/* Fensterreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/fensterreinigung"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                height: "224px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 24px -4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_Close-up_of_a_hand_cleaning_a_glass_window_with_a_s_9d456c2b-edad-45fb-ad0d-a857626340ec_3_q2fskk.avif"
                alt="Fensterreinigung"
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)",
                }}
              />

              {/* Price label */}
              <div
                className="service-card-price"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px",
                }}
              >
                Ab CHF 199.-
              </div>

              {/* Service title with arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  className="service-card-title"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    lineHeight: "1.2",
                  }}
                >
                  Fensterreinigung
                </h3>
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>

            {/* Büroreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/bueroreinigung"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                height: "224px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 24px -4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_a_professional_cleaning_person_wiping_an_office_des_ae82c6ac-ddf5-48e9-93d5-9ee8d062167c_3_xzzqja.avif"
                alt="Unterhaltsreinigung"
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)",
                }}
              />

              {/* Price label */}
              <div
                className="service-card-price"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px",
                }}
              >
                Ab CHF 199.-
              </div>

              {/* Service title with arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  className="service-card-title"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    lineHeight: "1.2",
                  }}
                >
                  Unterhaltsreinigung
                </h3>
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>

            {/* Fassadenreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/fassadenreinigung"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                height: "224px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 24px -4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_Man_cleaning_an_industrial_building_facade_using_a__d7268cb3-350e-4883-b1a3-b28fe5ab29bd_0_gfir2j.avif"
                alt="Fassadenreinigung"
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)",
                }}
              />

              {/* Price label */}
              <div
                className="service-card-price"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px",
                }}
              >
                Ab CHF 699.-
              </div>

              {/* Service title with arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  className="service-card-title"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    lineHeight: "1.2",
                  }}
                >
                  Fassadenreinigung
                </h3>
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>

            {/* Umzugsreinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/umzugsreinigung"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                height: "224px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 24px -4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_A_stack_of_cardboard_moving_boxes_with_blankets_and_aca55475-72f5-47ce-bd35-23f8455eeeb3_1_xumd8v.avif"
                alt="Umzugsreinigung"
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)",
                }}
              />

              {/* Price label */}
              <div
                className="service-card-price"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px",
                }}
              >
                Ab CHF 499.-
              </div>

              {/* Service title with arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  className="service-card-title"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    lineHeight: "1.2",
                  }}
                >
                  Umzugsreinigung
                </h3>
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>

            {/* Baureinigung */}
            <a
              href="https://cleanwin.vercel.app/leistungen/baureinigung"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                height: "224px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 24px -4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_A_construction_worker_in_work_boots_and_jeans_clean_8a86ab98-84bb-4372-a0bf-a47a89c60230_1_lnfpsa.avif"
                alt="Baureinigung"
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)",
                }}
              />

              {/* Price label */}
              <div
                className="service-card-price"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px",
                }}
              >
                Ab CHF 499.-
              </div>

              {/* Service title with arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  className="service-card-title"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    lineHeight: "1.2",
                  }}
                >
                  Baureinigung
                </h3>
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>

            {/* Weitere Dienstleistungen */}
            <a
              href="https://cleanwin.vercel.app/leistungen/weitere-dienstleistungen"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                height: "224px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 24px -4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752182062/dobiinter_A_close-up_of_a_person_cleaning_a_solar_panel_under_0b5462d2-2c74-452a-bf63-cf91c008a0dc_1_alcwld.avif"
                alt="Weitere Dienstleistungen"
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Dark gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)",
                }}
              />

              {/* Price label */}
              <div
                className="service-card-price"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  backgroundColor: "#10a0a4",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px",
                }}
              >
                Ab CHF 399.-
              </div>

              {/* Service title with arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  className="service-card-title"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    lineHeight: "1.2",
                  }}
                >
                  Solarpanel reinigen
                </h3>
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    textShadow: "rgba(0, 0, 0, 0.8) 0px 2px 4px",
                    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Cleanwin Section */}
      <WhyChooseCleanwinSection />

      {/* Customer Testimonials Section */}
      <CustomerTestimonialsSection />

      {/* Call-to-Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111827",
          color: "white",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "48px 16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Company Information */}
            <div>
              <h3
                style={{
                  fontSize: "18.72px",
                  fontWeight: "700",
                  marginBottom: "16px",
                  marginTop: "0px",
                }}
              >
                Cleanwin GmbH
              </h3>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                <div>Rychenbergstrasse 223</div>
                <div>8404 Winterthur</div>
                <div>Schweiz</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <a
                  href="tel:+41522020100"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#9ca3af",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#9ca3af",
                      stroke: "#9ca3af",
                      strokeWidth: "2px",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <span>+41 52 202 01 00</span>
                </a>
                <div
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                  }}
                >
                  info@cleanwin.ch
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontWeight: "500",
                  marginBottom: "16px",
                  marginTop: "21.28px",
                }}
              >
                Leistungen
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <a
                  href="https://cleanwin.vercel.app/leistungen/fensterreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Fensterreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/bueroreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Büroreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/fassadenreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Fassadenreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/umzugsreinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Umzugsreinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/baureinigung"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Baureinigung
                </a>
                <a
                  href="https://cleanwin.vercel.app/leistungen/weitere-dienstleistungen"
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Weitere Dienstleistungen
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4
                style={{
                  fontWeight: "500",
                  marginBottom: "16px",
                  marginTop: "21.28px",
                }}
              >
                Servicegebiete
              </h4>
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                <div>Winterthur, Zürich, Basel</div>
                <div>Effretikon, Seuzach</div>
                <div>Wiesendangen, Neftenbach</div>
                <div>Frauenfeld, Uster</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              borderTop: "1px solid #374151",
              marginTop: "32px",
              paddingTop: "32px",
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            <div
              style={{
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              © 2025 Cleanwin. Alle Rechte vorbehalten.
              <br />
              Gemacht mit ♥️ in Winterthur
            </div>
            <a
              href="https://cleanwin.vercel.app/datenschutz"
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
