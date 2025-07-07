/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
  compress: true,
  swcMinify: true,
};

export default nextConfig;
