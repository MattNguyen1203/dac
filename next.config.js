/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cms.okhub.tech'
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com'
  //     },
  //   ]
  // },
  images: {
    loader: 'custom',
    loaderFile: './loader.js'
  },
  staticPageGenerationTimeout: 1000
  // output: 'standalone'
}

module.exports = nextConfig
