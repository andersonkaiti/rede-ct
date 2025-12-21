import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'redect.org',
        protocol: 'https',
      },
      {
        hostname: 'storage.googleapis.com',
        protocol: 'https',
      },
      {
        hostname: 'firebasestorage.googleapis.com',
        protocol: 'https',
      },
    ],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  cacheComponents: true,
  reactCompiler: true,
}

export default nextConfig
