import type { NextConfig } from "next";

const isCI = process.env.GITHUB_ACTIONS === "true";
const repoName = "Portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isCI ? `/${repoName}` : undefined,
  assetPrefix: isCI ? `/${repoName}/` : undefined,
  // Suprimir el mensaje de React DevTools en producción
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ['error']
    } : false
  }
};

export default nextConfig;