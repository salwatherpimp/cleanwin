/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable modern build optimizations
  modularizeImports: {
    // Optimize lodash imports
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  experimental: {
    // Enable modern JS output
    esmExternals: true,
    // Reduce bundle size
    optimizePackageImports: ['react', 'react-dom'],
  },
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
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
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations in production client builds
    if (!dev && !isServer) {
      // Optimize for modern browsers
      config.optimization = {
        ...config.optimization,
        // Enable tree shaking
        usedExports: true,
        sideEffects: false,
      };
    }

    return config;
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
