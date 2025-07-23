/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable modern build optimizations
  swcMinify: true,
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
    // Enable modern bundle splitting
    turbo: {
      // Use modern resolver
      resolveAlias: {
        // Modern polyfill alternatives
        'core-js': false,
        'regenerator-runtime': false,
      },
    },
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
