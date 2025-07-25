import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable styled-jsx completely to eliminate render delays
  compiler: {
    styledComponents: false,
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    // Disable styled-jsx completely
    styledComponents: false,
  },

  // Optimize images for better Core Web Vitals
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable bundle analyzer in development
  bundlePagesRouterDependencies: true,

  // Remove CSS optimization for now due to critters dependency issue
  // experimental: {
  //   optimizeCss: true,
  // },

  // Headers for better caching and SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
