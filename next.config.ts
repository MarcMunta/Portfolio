import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Suprimir el mensaje de React DevTools en producción
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ['error']
    } : false
  }
};

export default nextConfig;
