"use client";

import { useEffect, useState } from 'react';

// Interface for PerformanceEventTiming
interface PerformanceEventTiming extends PerformanceEntry {
  duration: number;
}

// INP (Interaction to Next Paint) optimization component
export default function INPOptimizer() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    // Utility functions - defined first
    const debounce = (func: (...args: unknown[]) => void, wait: number) => {
      let timeout: NodeJS.Timeout;
      return function executedFunction(...args: unknown[]) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const throttle = (func: (...args: unknown[]) => void, limit: number) => {
      let inThrottle: boolean;
      return function executedFunction(...args: unknown[]) {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    // Optimize event handlers for better INP scores
    const optimizeEventHandlers = () => {

      // Optimize button interactions
      const buttons = document.querySelectorAll('button, a[role="button"], .btn, .hero-cta-optimized');
      buttons.forEach((button: Element) => {
        const btn = button as HTMLElement;
        
        // Remove existing inline handlers that might block
        btn.onmouseover = null;
        btn.onmouseout = null;
        btn.onclick = null;
        
        // Add optimized event listeners with passive flags
        const handleMouseEnter = () => {
          requestAnimationFrame(() => {
            btn.style.transform = 'translateY(-1px) translateZ(0)';
            btn.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
            if (btn.classList.contains('hero-cta-optimized')) {
              btn.style.backgroundColor = '#f8fafc';
              btn.style.color = '#0DA6A6';
            }
          });
        };

        const handleMouseLeave = () => {
          requestAnimationFrame(() => {
            btn.style.transform = 'translateY(0) translateZ(0)';
            btn.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            if (btn.classList.contains('hero-cta-optimized')) {
              btn.style.backgroundColor = 'white';
              btn.style.color = '#374151';
            }
          });
        };

        const handleClick = () => {
          // Immediate visual feedback
          btn.style.transform = 'scale(0.98) translateZ(0)';
          setTimeout(() => {
            btn.style.transform = 'scale(1) translateZ(0)';
          }, 150);
        };

        // Add optimized listeners
        btn.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        btn.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        btn.addEventListener('click', handleClick, { passive: true });
        
        // Preload hover state
        btn.style.willChange = 'transform, box-shadow, background-color, color';
      });

      // Optimize navigation interactions
      const navItems = document.querySelectorAll('[data-nav] button, [data-nav] a, .nav-item');
      navItems.forEach((item: Element) => {
        const navItem = item as HTMLElement;
        
        const handleNavInteraction = throttle(() => {
          requestAnimationFrame(() => {
            navItem.style.opacity = '0.8';
            setTimeout(() => {
              navItem.style.opacity = '1';
            }, 100);
          });
        }, 100);
        
        navItem.addEventListener('click', handleNavInteraction, { passive: true });
      });

      // Optimize scroll interactions
      const optimizeScrollHandlers = () => {
        const scrollElements = document.querySelectorAll('[data-scroll], .carousel, .scroll-container');
        
        scrollElements.forEach((element: Element) => {
          const scrollElement = element as HTMLElement;
          
          const handleScroll = throttle(() => {
            requestAnimationFrame(() => {
              // Optimize scroll performance
              scrollElement.style.willChange = 'transform';
              setTimeout(() => {
                scrollElement.style.willChange = 'auto';
              }, 500);
            });
          }, 16); // ~60fps
          
          scrollElement.addEventListener('scroll', handleScroll, { passive: true });
        });
      };

      optimizeScrollHandlers();
    };

    // Optimize form interactions
    const optimizeFormInteractions = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      
      inputs.forEach((input: Element) => {
        const inputElement = input as HTMLInputElement;
        
        const handleFocus = () => {
          requestAnimationFrame(() => {
            inputElement.style.outline = '2px solid #0DA6A6';
            inputElement.style.outlineOffset = '2px';
          });
        };
        
        const handleBlur = () => {
          requestAnimationFrame(() => {
            inputElement.style.outline = 'none';
          });
        };
        
        const handleInput = debounce(() => {
          // Defer validation or processing
          if (inputElement.value.length > 0) {
            inputElement.style.borderColor = '#10b981';
          }
        }, 300);
        
        inputElement.addEventListener('focus', handleFocus, { passive: true });
        inputElement.addEventListener('blur', handleBlur, { passive: true });
        inputElement.addEventListener('input', handleInput as EventListener, { passive: true });
      });
    };

    // Optimize carousel/slider interactions
    const optimizeCarouselInteractions = () => {
      const carousels = document.querySelectorAll('.carousel, .slider, [class*="carousel"]');
      
      carousels.forEach((carousel: Element) => {
        const carouselElement = carousel as HTMLElement;
        
        let isInteracting = false;
        
        const handleTouchStart = () => {
          isInteracting = true;
          carouselElement.style.willChange = 'transform';
        };
        
        const handleTouchEnd = () => {
          isInteracting = false;
          setTimeout(() => {
            if (!isInteracting) {
              carouselElement.style.willChange = 'auto';
            }
          }, 500);
        };
        
        carouselElement.addEventListener('touchstart', handleTouchStart, { passive: true });
        carouselElement.addEventListener('touchend', handleTouchEnd, { passive: true });
        carouselElement.addEventListener('mousedown', handleTouchStart, { passive: true });
        carouselElement.addEventListener('mouseup', handleTouchEnd, { passive: true });
      });
    };

    // Optimize image lazy loading interactions
    const optimizeImageInteractions = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              requestAnimationFrame(() => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                  requestAnimationFrame(() => {
                    img.style.opacity = '1';
                  });
                };
              });
              
              imageObserver.unobserve(img);
            }
          });
        }, { threshold: 0.1 });
        
        images.forEach((img) => imageObserver.observe(img));
      }
    };

    // Optimize keyboard interactions
    const optimizeKeyboardInteractions = () => {
      document.addEventListener('keydown', throttle((e: unknown) => {
        const event = e as KeyboardEvent;
        // Optimize tab navigation
        if (e.key === 'Tab') {
          requestAnimationFrame(() => {
            const activeElement = document.activeElement as HTMLElement;
            if (activeElement) {
              activeElement.style.outline = '2px solid #0DA6A6';
              activeElement.style.outlineOffset = '2px';
              
              setTimeout(() => {
                activeElement.style.outline = '';
                activeElement.style.outlineOffset = '';
              }, 2000);
            }
          });
        }
        
        // Optimize escape key interactions
        if (e.key === 'Escape') {
          requestAnimationFrame(() => {
            const modals = document.querySelectorAll('.modal, .dropdown, [data-modal]');
            modals.forEach((modal: Element) => {
              const modalElement = modal as HTMLElement;
              if (modalElement.style.display !== 'none') {
                modalElement.style.display = 'none';
              }
            });
          });
        }
      }, 16), { passive: true });
    };

    // Utility functions already defined above

    // Execute all optimizations
    optimizeEventHandlers();
    optimizeFormInteractions();
    optimizeCarouselInteractions();
    optimizeImageInteractions();
    optimizeKeyboardInteractions();

    // Monitor INP performance
    if ('PerformanceObserver' in window) {
      try {
        const inpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Log slow interactions for debugging
            const eventEntry = entry as PerformanceEventTiming;
            if (eventEntry.duration > 200) {
              console.warn('Slow interaction detected:', entry);
            }
          }
        });
        
        inpObserver.observe({ entryTypes: ['event'] });
      } catch (error) {
        // Silently fail if not supported
        console.debug('PerformanceObserver not supported:', error);
      }
    }

  }, [isHydrated]);

  return null; // This component only optimizes interactions
}
