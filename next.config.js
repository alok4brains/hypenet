/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This exportPathMap configuration assumes that you have
  // pages like index.js, about.js, etc.
  // Adjust as necessary for your page structure.
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap;
    }
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/services": { page: "/services" },
      "/blogs": { page: "/blogs" },
      "/blogs-content": { page: "/blogs-content" },
      "/careers": { page: "/careers" },
      // Add other routes here as necessary
    };
  },
};

module.exports = nextConfig;
