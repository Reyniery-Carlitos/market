import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**", // any subdomain
      port: "",
      pathname: "/**"
    }]
  }
};

export default nextConfig;
