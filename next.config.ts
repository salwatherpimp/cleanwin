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
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
        usedExports: true,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
  // Force disable styled-jsx at webpack level
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['next/babel', { 'preset-env': { modules: false } }]],
          plugins: [
            // Remove styled-jsx plugin entirely
          ]
        }
      }
    });
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
