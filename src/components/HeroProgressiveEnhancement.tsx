"use client";

import { useEffect, useState } from 'react';

export default function HeroProgressiveEnhancement() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    // Defer hero enhancements until after LCP
    const enhanceHero = () => {
      // Add advanced hover effects post-LCP
      const ctaButton = document.querySelector('.hero-cta-optimized') as HTMLElement;
      if (ctaButton) {
        // Remove inline hover handlers for better performance
        ctaButton.onmouseover = null;
        ctaButton.onmouseout = null;
        
        // Add optimized event listeners
        ctaButton.addEventListener('mouseenter', () => {
          ctaButton.style.cssText += `
            background-color: #f8fafc !important;
            color: #0DA6A6 !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-1px) translateZ(0) !important;
          `;
        }, { passive: true });
        
        ctaButton.addEventListener('mouseleave', () => {
          ctaButton.style.cssText += `
            background-color: white !important;
            color: #374151 !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
            transform: translateY(0) translateZ(0) !important;
          `;
        }, { passive: true });
      }
      
      // Add scroll-based optimizations
      const heroSection = document.querySelector('.hero-lcp-container') as HTMLElement;
      if (heroSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Hero is visible - ensure full quality image is loaded
              const heroImage = heroSection.querySelector('.hero-image') as HTMLImageElement;
              if (heroImage && heroImage.loading !== 'eager') {
                heroImage.loading = 'eager';
                heroImage.fetchPriority = 'high';
              }
            } else {
              // Hero is not visible - reduce resource priority
              const heroImage = heroSection.querySelector('.hero-image') as HTMLImageElement;
              if (heroImage) {
                heroImage.fetchPriority = 'low';
              }
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(heroSection);
        
        // Cleanup observer when component unmounts
        return () => observer.disconnect();
      }
    };

    // Defer enhancements until after initial paint
    if (document.readyState === 'complete') {
      // Page already loaded
      setTimeout(enhanceHero, 0);
    } else {
      // Wait for load event
      window.addEventListener('load', () => {
        setTimeout(enhanceHero, 100);
      });
    }
  }, [isHydrated]);

  return null; // This component only adds progressive enhancement
}
