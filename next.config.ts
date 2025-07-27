import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NUCLEAR: Disable ALL CSS processing that causes render delays
  experimental: {
    optimizeCss: false,
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledJsx: false, // Completely disable styled-jsx to reduce bundle size
  },
  // Optimize for performance and tree shaking
  webpack: (config: any, { dev, isServer }) => {
    if (!dev) {
      // Aggressive tree shaking
      config.optimization.sideEffects = false;
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;

      // Optimize vendor chunk splitting to reduce unused code
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 200000, // 200KB max chunk
        cacheGroups: {
          // Separate React/React-DOM into their own chunk
          react: {
            name: 'react',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 50,
            chunks: 'all',
            enforce: true,
          },
          // Builder.io into separate chunk (likely unused)
          builder: {
            name: 'builder',
            test: /[\\/]node_modules[\\/]@builder\.io[\\/]/,
            priority: 40,
            chunks: 'async', // Only load when needed
          },
          // Other vendor libraries
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/](?!(react|react-dom|@builder\.io)[\\/])/,
            priority: 30,
            chunks: 'all',
            minChunks: 1,
            reuseExistingChunk: true,
          },
          // Common code
          common: {
            name: 'common',
            minChunks: 2,
            priority: 20,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Remove unused modules from final bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      // Remove styled-jsx entirely if not used
      'styled-jsx': false,
      'styled-jsx/style': false,
    };

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
