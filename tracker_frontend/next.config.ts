import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    taint: true,
    optimizePackageImports: ["lucide-react"],
    
  },
  typedRoutes: true,
};

export default nextConfig;
