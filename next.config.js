/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v2.exercisedb.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com/",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
