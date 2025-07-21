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
