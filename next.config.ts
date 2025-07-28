import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Experimental features - cleaned up for stability
  experimental: {
    optimizeCss: false,
    esmExternals: true,
    // Reduce JavaScript bundle size
    optimizePackageImports: ['react', 'react-dom'],
    // Fix CORS for fly.dev domains
    allowedDevOrigins: [
      '24348628ebd248898e7ba693cd0a7911-2d0d2a9d9013445c91830c23d.fly.dev',
      '24348628ebd248898e7ba693cd0a7911-2d0d2a9d9013445c91830c23d.projects.builder.codes'
    ],
  },

  // Dev indicators configuration
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledJsx: false,
  },

  // Webpack configuration for optimization
  webpack: (config: any, { dev, isServer }) => {
    if (!dev) {
      // Basic optimization for production
      config.optimization.sideEffects = false;
      config.optimization.usedExports = true;
    }
    
    return config;
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Basic optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // CORS headers for development
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
            value: "SAMEORIGIN",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With",
          },
        ],
      },
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
