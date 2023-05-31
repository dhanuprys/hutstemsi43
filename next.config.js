/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/dhanuprys/simi/main/public/**',
      },
    ],
  },
}

module.exports = nextConfig
