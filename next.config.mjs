/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches any domain
      },
      {
        protocol: "http", // Optional: matches non-secure links
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
