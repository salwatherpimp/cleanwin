/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern build optimizations for bundle size reduction
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
    // Enable advanced tree shaking
    esmExternals: true,
    // Optimize CSS
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React test props in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  // Enable SWC minification for modern browsers
  swcMinify: true,
  // Optimize chunks for better caching
  webpack: (config, { isServer }) => {
    // Enable tree shaking for modern JavaScript
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };
    
    // Split chunks optimally for lazy loading
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            maxSize: 200000,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            maxSize: 200000,
          },
        },
      };
    }
    
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cleanwin.vercel.app",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
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
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
