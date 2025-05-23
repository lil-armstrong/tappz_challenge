import analyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";


const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default withBundleAnalyzer(nextConfig);
