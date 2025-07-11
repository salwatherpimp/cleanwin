/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cleanwin.ch",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dwlk9of7h/**",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: /node_modules/,
      };
      // Remove HMR entry
      if (config.entry["main.js"]) {
        config.entry["main.js"] = config.entry["main.js"].filter(
          (entry) => !entry.includes("webpack/hot/dev-server"),
        );
      }
    }
    return config;
  },
};

module.exports = nextConfig;
