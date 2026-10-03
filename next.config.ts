import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async headers() {
    const noStore = [
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Cache-Control", value: "private, no-store" },
    ];
    return [
      { source: "/work/window-depot-network-os", headers: noStore },
      { source: "/api/work/window-depot-network-os/:path*", headers: noStore },
    ];
  },
  async redirects() {
    return [
      {
        source: "/ai-sprint",
        destination: "/services/ai-automation/sprint",
        permanent: true,
      },
      {
        source: "/drone/roof-inspection",
        destination: "/services/drone/roof-inspection",
        permanent: true,
      },
      {
        source: "/drone/deer-recovery",
        destination: "/services/drone/deer-recovery",
        permanent: true,
      },
      {
        source: "/drone/deer-recovery/:path*",
        destination: "/services/drone/deer-recovery/:path*",
        permanent: true,
      },
      {
        source: "/deer-recovery",
        destination: "/services/drone/deer-recovery",
        permanent: true,
      },
      {
        source: "/deer-recovery/:path*",
        destination: "/services/drone/deer-recovery/:path*",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
