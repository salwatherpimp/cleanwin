import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NUCLEAR: Disable ALL CSS processing that causes render delays
  experimental: {
    optimizeCss: false,
    esmExternals: true,
    // Reduce JavaScript bundle size
    optimizePackageImports: ['react', 'react-dom'],
    // Advanced optimizations
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
    // Performance budgets
    bundlePagesRouterDependencies: true,
    optimizeServerReact: true,
  },

  // Performance budgets for Core Web Vitals
  performanceBudgets: {
    maxAssetSize: 250000, // 250KB
    maxEntrypointSize: 300000, // 300KB
    maxPageBundleSize: 500000, // 500KB
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledJsx: false,
  },
  webpack: (config: any, { dev, isServer }) => {
    if (!dev) {
      // Advanced tree-shaking and bundle optimization
      config.optimization.sideEffects = false;
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;
      config.optimization.innerGraph = true;

      // Advanced code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Vendor chunk for third-party libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
          // Critical chunk for above-the-fold components
          critical: {
            name: 'critical',
            chunks: 'initial',
            minChunks: 2,
            priority: 15,
            reuseExistingChunk: true,
          },
          // Common chunk for shared utilities
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };

      // Module concatenation for better compression
      config.optimization.concatenateModules = true;

      // Advanced minification
      config.optimization.minimize = true;

      // Eliminate dead code more aggressively
      config.resolve.alias = {
        ...config.resolve.alias,
        // Remove unused React features
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      };
    }

    // Module resolution optimization
    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];

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

  // Output optimization
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

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
