/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'blogspotbackend.tashicell.com'],
    path: '/_next/image',
    loader: 'default',
  }
}

module.exports = nextConfig
