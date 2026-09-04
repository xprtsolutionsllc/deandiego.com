import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
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
