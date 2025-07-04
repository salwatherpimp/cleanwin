import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress hydration warnings in development for Builder.io
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Configure webpack to handle hydration warnings
  webpack: (config, { dev }) => {
    if (dev) {
      // Suppress specific hydration warnings in development
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (
          entries["main.js"] &&
          !entries["main.js"].includes("./lib/suppress-hydration-warnings.js")
        ) {
          entries["main.js"].unshift("./lib/suppress-hydration-warnings.js");
        }
        return entries;
      };
    }
    return config;
  },
};

export default nextConfig;
