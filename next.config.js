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
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Exclude legacy polyfills for modern browsers
      config.resolve.alias = {
        ...config.resolve.alias,
        // Disable core-js polyfills for modern browsers
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-start': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.string.trim': false,
      };

      // Optimize for modern browsers
      config.optimization = {
        ...config.optimization,
        // Enable aggressive tree shaking
        usedExports: true,
        sideEffects: false,
        // Modern code splitting
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            // Separate modern vs legacy chunks
            modern: {
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              name: 'modern-vendor',
              chunks: 'all',
              priority: 20,
            },
          },
        },
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
