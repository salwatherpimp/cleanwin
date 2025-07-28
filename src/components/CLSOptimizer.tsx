"use client";

import { useEffect } from 'react';

// Advanced CLS (Cumulative Layout Shift) optimization component
export default function CLSOptimizer() {
  useEffect(() => {
    // Only run after hydration to prevent SSR/client mismatch
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
      setIsHydrated(true);
    }, []);

    if (!isHydrated) return;

    // Prevent layout shifts during image loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img:not([data-cls-optimized])');

      images.forEach((img: Element) => {
        const image = img as HTMLImageElement;

        // Mark as optimized
        image.setAttribute('data-cls-optimized', 'true');

        // Set intrinsic size if not already set - without DOM manipulation
        if (!image.style.aspectRatio && image.width && image.height) {
          image.style.aspectRatio = `${image.width} / ${image.height}`;
        }

        // Apply optimizations directly to image without wrapper to avoid hydration issues
        image.style.cssText += `
          contain: layout style;
          max-width: 100%;
          height: auto;
          display: block;
        `;
      });
    };

    // Prevent layout shifts from dynamic content
    const optimizeDynamicContent = () => {
      // Optimize buttons and interactive elements
      const buttons = document.querySelectorAll('button, a[role="button"], .btn');
      buttons.forEach((btn: Element) => {
        const button = btn as HTMLElement;
        if (!button.style.minHeight) {
          const styles = window.getComputedStyle(button);
          const height = button.offsetHeight;
          if (height > 0) {
            button.style.minHeight = `${height}px`;
            button.style.contain = 'layout style';
          }
        }
      });

      // Optimize text containers that might reflow
      const textContainers = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
      textContainers.forEach((container: Element) => {
        const element = container as HTMLElement;
        if (!element.style.minHeight && element.textContent) {
          const styles = window.getComputedStyle(element);
          const lineHeight = parseFloat(styles.lineHeight);
          const fontSize = parseFloat(styles.fontSize);
          
          if (lineHeight && fontSize) {
            const estimatedHeight = lineHeight || fontSize * 1.5;
            element.style.minHeight = `${estimatedHeight}px`;
            element.style.contain = 'layout';
          }
        }
      });

      // Optimize cards and containers
      const cards = document.querySelectorAll('.card, .review-card, .value-card, [class*="card"]');
      cards.forEach((card: Element) => {
        const cardElement = card as HTMLElement;
        if (!cardElement.style.contain) {
          cardElement.style.contain = 'layout style';
          
          // Set minimum dimensions based on content
          const rect = cardElement.getBoundingClientRect();
          if (rect.height > 0) {
            cardElement.style.minHeight = `${rect.height}px`;
          }
        }
      });
    };

    // Optimize font loading to prevent FOIT/FOUT layout shifts
    const optimizeFonts = () => {
      if ('fonts' in document) {
        const fontDisplay = document.createElement('style');
        fontDisplay.textContent = `
          @font-face {
            font-family: 'Inter';
            font-display: swap;
            font-weight: 400 800;
            src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          }
        `;
        document.head.appendChild(fontDisplay);
      }
    };

    // Implement layout reservation for carousels
    const optimizeCarousels = () => {
      const carousels = document.querySelectorAll('.carousel, .carousel-track, [class*="carousel"]');
      carousels.forEach((carousel: Element) => {
        const carouselElement = carousel as HTMLElement;
        if (!carouselElement.style.minHeight) {
          // Reserve space for carousel
          carouselElement.style.minHeight = '280px';
          carouselElement.style.contain = 'layout style';
          carouselElement.style.overflow = 'hidden';
        }
      });
    };

    // Optimize layout for mobile/desktop transitions
    const optimizeResponsiveLayouts = () => {
      const responsiveElements = document.querySelectorAll('[class*="mobile"], [class*="desktop"], [data-nav]');
      responsiveElements.forEach((element: Element) => {
        const elem = element as HTMLElement;
        elem.style.contain = 'layout style';
        
        // Prevent layout shift during responsive changes
        if (elem.classList.contains('mobile') || elem.getAttribute('data-nav') === 'mobile') {
          elem.style.willChange = 'auto';
          elem.style.transform = 'translateZ(0)';
        }
      });
    };

    // Execute optimizations
    optimizeImages();
    optimizeDynamicContent();
    optimizeFonts();
    optimizeCarousels();
    optimizeResponsiveLayouts();

    // Re-run optimizations when new content is added
    const observer = new MutationObserver((mutations) => {
      let shouldOptimize = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'IMG' || element.querySelector('img')) {
                shouldOptimize = true;
              }
            }
          });
        }
      });
      
      if (shouldOptimize) {
        setTimeout(() => {
          optimizeImages();
          optimizeDynamicContent();
        }, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Performance monitoring for CLS
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if ((entry as any).hadRecentInput) {
              continue; // Ignore shifts caused by user interaction
            }
            
            // Log significant layout shifts for debugging
            if ((entry as any).value > 0.1) {
              console.warn('Significant CLS detected:', entry);
            }
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Silently fail if PerformanceObserver not supported
      }
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component only optimizes layout
}
