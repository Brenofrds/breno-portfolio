import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "merakiui.com",
      },
    ],
  },
};

export default nextConfig;
