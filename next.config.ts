import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NUCLEAR: Disable ALL CSS processing that causes render delays
  experimental: {
    optimizeCss: false,
    esmExternals: true,
    // Reduce JavaScript bundle size
    optimizePackageImports: ['react', 'react-dom'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledJsx: false, // Disable styled-jsx to reduce bundle size
  },
  // Aggressive optimization to eliminate render blocking
  webpack: (config: any, { dev, isServer }) => {
    // Completely disable styled-jsx at the webpack level
    config.module.rules.forEach((rule: any) => {
      if (rule.use) {
        if (Array.isArray(rule.use)) {
          rule.use = rule.use.filter((use: any) => {
            return !use?.loader?.includes('styled-jsx');
          });
        }
      }
    });

    if (!dev) {
      // Enable tree shaking
      config.optimization.sideEffects = false;
      config.optimization.usedExports = true;
    }

    // Remove CSS extraction in production to prevent render blocking
    if (!dev && !isServer) {
      config.plugins = config.plugins.filter((plugin: any) => {
        return !plugin.constructor.name.includes('MiniCssExtractPlugin');
      });
    }

    return config;
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
