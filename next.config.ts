import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/deer-recovery", destination: "/drone/deer-recovery", permanent: true },
      { source: "/deer-recovery/:path*", destination: "/drone/deer-recovery/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
