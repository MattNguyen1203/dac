/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-dac.okhub.tech'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
    ]
  },
}

module.exports = nextConfig
