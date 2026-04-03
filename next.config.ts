import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/application/applicant",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
