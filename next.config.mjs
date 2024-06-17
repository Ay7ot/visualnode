/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.glassnode.com",
      },
    ],
  },
};

export default nextConfig;
