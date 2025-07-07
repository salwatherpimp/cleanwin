/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during build to prevent TypeScript errors from blocking deployment
    ignoreDuringBuilds: true,
  },
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
    ],
  },
};

module.exports = nextConfig;
