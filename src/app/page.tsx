"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CleanWinPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isDesktopCtaDropdownOpen, setIsDesktopCtaDropdownOpen] =
    useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Business hours logic (Monday to Friday, 08:00-17:00 CET)
  const isBusinessHours = () => {
    const now = new Date();
    const cetTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/Zurich" }),
    );
    const day = cetTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = cetTime.getHours();

    // Monday (1) to Friday (5), 8 AM to 5 PM
    return day >= 1 && day <= 5 && hour >= 8 && hour < 17;
  };

  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(
    null,
  );
  const [currentTestimonial, setCurrentTestimonial] = useState(5); // Start in middle of array

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

      .mobile-nav-section {
        padding: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      }

      .mobile-nav-section:last-child {
        border-bottom: none;
      }

      .mobile-nav-title {
        font-size: 16px;
        font-weight: 600;
        color: #111827;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 2px solid #10a0a4;
        display: inline-block;
      }

      .mobile-nav-item {
        display: block;
        padding: 12px 0;
        color: #374151;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        min-height: 48px;
        display: flex;
        align-items: center;
        transition: color 0.2s ease;
      }

            .mobile-nav-item:hover {
        color: #10a0a4;
        background-color: rgba(16, 160, 164, 0.05);
        border-radius: 8px;
      }

      .mobile-nav-item:active {
        background-color: rgba(16, 160, 164, 0.1);
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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (index: number) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  const originalTestimonials = [
    {
      id: 1,
      name: "Jeanine Ganz",
      initial: "J",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets%2F18154339fbec4edebae6c80174487ba0%2F6f632a458dcf44a9a8bf0888cf73689f",
      text: "Sehr freundlicher, unkomplizierter und qualitativ einwandfreier Service. Die Endreinigung der Wohnung wurde ohne Beanstandung abgenommen...",
    },
    {
      id: 2,
      name: "Albert Radamonti",
      initial: "A",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets%2F18154339fbec4edebae6c80174487ba0%2F7495596da4634fb98885d61c2489c58a",
      text: "Super Service und einwandfreie Erledigung. Preis-Leistung ist top! Einfache Abwicklung, günstiger Preis und saubere Arbeit mit...",
    },
    {
      id: 3,
      name: "Gerussi Renato",
      initial: "G",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets%2F18154339fbec4edebae6c80174487ba0%2Fc7eddc79f0494af98960a9e24996b147",
      text: "Die Endreinigung war perfekt, inklusive Wohnungsabgabe. Herr Polli arbeitet nicht nur effektiv, er ist auch ausgesprochen sympathisch. Der Preis...",
    },
    {
      id: 4,
      name: "Roter Kater",
      initial: "R",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets%2F18154339fbec4edebae6c80174487ba0%2F2dcf6cd036c44e7587fbf13387356436",
      text: "Reinigt einmal in der Woche unser pop-up. Super Service und freundliches Personal.",
    },
    {
      id: 5,
      name: "Nikola C",
      initial: "N",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets%2F18154339fbec4edebae6c80174487ba0%2F391098f2bc0e4a2d8aab72206e82879a",
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
          backdropFilter: isScrolled ? "none" : "blur(12px)",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.3)",
          backgroundImage: isScrolled
            ? "none"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.05) 100%)",
          borderBottom: isScrolled
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
              alt="CleanWin Logo"
              width={200}
              height={56}
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
                  color: isScrolled ? "#374151" : "white",
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
                    color: isScrolled ? "#374151" : "white",
                    stroke: isScrolled ? "#374151" : "white",
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
                color: isScrolled ? "#374151" : "white",
                fontWeight: "500",
                fontSize: "16px",
                padding: "8px 0",
                textDecoration: "none",
                textShadow: isScrolled
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
                color: isScrolled ? "#374151" : "white",
                fontWeight: "500",
                fontSize: "16px",
                padding: "8px 0",
                textDecoration: "none",
                textShadow: isScrolled
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
                      borderBottom: isBusinessHours()
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
                  {isBusinessHours() && (
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
                alt="CleanWin Logo"
                width={200}
                height={56}
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
                  maxWidth: "150px",
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
                      borderBottom: isBusinessHours()
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
                  {isBusinessHours() && (
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: isScrolled ? "#374151" : "white",
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
          {/* Leistungen Section */}
          <div className="mobile-nav-section">
            <div className="mobile-nav-title">Leistungen</div>
            <a
              href="/fensterreinigung"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fensterreinigung
            </a>
            <a
              href="/unterhaltsreinigung"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Unterhaltsreinigung
            </a>
            <a
              href="/solarpanel-reinigen"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solarpanel reinigen
            </a>
            <a
              href="/fassadenreinigung"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fassadenreinigung
            </a>
            <a
              href="/umzugsreinigung"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Umzugsreinigung
            </a>
            <a
              href="/baureinigung"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Baureinigung
            </a>
            <a
              href="https://cleanwin.vercel.app/ueber-uns"
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Über uns
            </a>
            <a
              href="https://cleanwin.vercel.app/referenzen"
              className="mobile-nav-item"
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
          alt="CleanWin Hero Background"
          fill
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
            Cleanwin steht für Qualität, faire Preise und echte Nähe. Keine
            Schwarzarbeit und 100 % Verlässlichkeit – für Privat & Gewerbe.
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
                Ob Fensterreinigung, Fassadenpflege oder Umzugsreinigung – wir
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
      <section
        className="section-spacing-sm"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              marginBottom: "8px",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            +500 Firmen &amp; Haushalte reinigen mit Cleanwin
          </p>
          <div className="logo-scroll-container">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              {/* New logos */}
              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/10_j4jopj.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/8_y8yfiu.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/9_a5yzm6.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/1_omqaqp.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/2_jgcfjz.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/4_mne8oq.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/5_xmwppy.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/3_jqqq29.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752097683/7_wetsnc.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/10_j4jopj.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/8_y8yfiu.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>

              <div className="logo-scroll-item">
                <div
                  style={{
                    width: "120px",
                    height: "60px",
                    backgroundImage:
                      'url("https://res.cloudinary.com/dwlk9of7h/image/upload/w_240,h_120,c_fit,f_auto,q_auto/v1752310305/9_a5yzm6.png")',
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    opacity: "0.7",
                    transition: "opacity 0.3s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Ab CHF 150.–
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
                Ab CHF 199.–
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
                Ab CHF 250.–
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
                Ab CHF 320.–
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
                Ab CHF 280.–
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
                Ab CHF 200.–
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

      {/* Why Choose CleanWin Section */}
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
                Wir sind in Winterthur zuhause. Persönlich, nah und immer für
                Sie erreichbar.
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
                Von früh bis spät - wir richten uns stet nach Ihrem Alltag.
                Immer pünktlich.
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
                  Umweltfreundliche Reinigungs-methode durch
                  Umkehrosmose-Technik. Gut für Sie und die Natur.
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

      {/* Customer Testimonials Section */}
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
              {Array.from(
                { length: originalTestimonials.length },
                (_, index) => (
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
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
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
                CleanWin GmbH
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
              © 2025 CleanWin. Alle Rechte vorbehalten.
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
