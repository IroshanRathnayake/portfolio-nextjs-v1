/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.getlifegard.com',
        pathname: '/**',
      },
    ],
  },
};
