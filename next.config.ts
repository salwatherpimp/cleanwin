import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NUCLEAR: Disable ALL CSS processing that causes render delays
  experimental: {
    optimizeCss: false,
    esmExternals: true,
    turbo: {
      rules: {
        '*.js': ['babel-loader'],
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize bundle splitting and tree shaking
  webpack: (config: any, { dev, isServer }) => {
    // Enable aggressive tree shaking and dead code elimination
    config.optimization = {
      ...config.optimization,
      sideEffects: false,
      usedExports: true,
      providedExports: true,
      minimize: !dev,
      splitChunks: {
        chunks: 'all',
        maxSize: 244000, // 244KB max chunk size
        cacheGroups: {
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 40,
            enforce: true,
            chunks: 'all',
          },
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/](?!(react|react-dom)[\\/])/,
            priority: 30,
            chunks: 'all',
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
            reuseExistingChunk: true,
            chunks: 'all',
          },
        },
      },
    };

    // Tree shake unused exports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
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
