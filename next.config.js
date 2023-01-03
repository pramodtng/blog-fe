/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    path: '/_next/image',
    loader: 'default',
  }
}

module.exports = nextConfig
