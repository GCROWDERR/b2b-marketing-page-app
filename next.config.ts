import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    optimizePackageImports: ["@bankrate/icons-react", "radix-ui"],
  },
};

export default nextConfig;
