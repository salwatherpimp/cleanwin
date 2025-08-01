/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow cross-origin requests for development (fixes HMR fetch errors)
  allowedDevOrigins: [
    '24348628ebd248898e7ba693cd0a7911-2d0d2a9d9013445c91830c23d.fly.dev',
    'localhost:3000',
    '127.0.0.1:3000',
    '0.0.0.0:3000'
  ],
  // Modern build optimizations for bundle size reduction
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
    // Enable advanced tree shaking
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React test props in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  // Optimize chunks for better caching
  webpack: (config, { isServer }) => {
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
