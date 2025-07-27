"use client";

import { useEffect } from 'react';

export default function CSSLoader() {
  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadCSS = (href: string) => {
      if (document.querySelector(`link[href="${href}"]`)) return; // Already loaded
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print'; // Load as print media first (non-blocking)
      link.onload = () => {
        link.media = 'all'; // Switch to all media after load
      };
      document.head.appendChild(link);
    };

    // Defer CSS loading to avoid blocking initial render
    const timer = setTimeout(() => {
      loadCSS('/_next/static/css/globals.css');
      loadCSS('/_next/static/css/components.css');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}
