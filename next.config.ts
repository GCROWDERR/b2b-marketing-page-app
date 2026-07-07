import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@bankrate/icons-react", "radix-ui"],
  },
  async redirects() {
    return [
      { source: "/lenders", destination: "/supply", permanent: true },
      { source: "/affiliate", destination: "/demand", permanent: true },
      { source: "/partners", destination: "/", permanent: true },
      { source: "/partners/lenders", destination: "/supply", permanent: true },
      { source: "/partners/enterprise", destination: "/enterprise", permanent: true },
      { source: "/partners/affiliate", destination: "/demand", permanent: true },
    ];
  },
};

export default nextConfig;
