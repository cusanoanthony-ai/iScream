import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  generateBuildId: async () => {
    return process.env.VERCEL_GIT_COMMIT_SHA ?? `local-${Date.now()}`;
  },
};

export default nextConfig;
