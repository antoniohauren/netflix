/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "uhdtv.io",
      },
    ],
  },
};

module.exports = nextConfig;
