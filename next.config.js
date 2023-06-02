/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/dhanuprys/hutstemsi43-metadata/main/public/**',
      },
    ],
  }
};

module.exports = nextConfig;