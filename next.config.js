/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "1a18bb3088f545299cf298ddd519a85b-5aa69977c98f44c486379bf7a.projects.builder.codes",
    "*.projects.builder.codes",
  ],
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
};

module.exports = nextConfig;
