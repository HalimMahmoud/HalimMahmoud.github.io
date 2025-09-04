/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  basePath: "", // 👈 for personal site
  assetPrefix: "./", // 👈 for personal site
  trailingSlash: true,
};
module.exports = nextConfig;
