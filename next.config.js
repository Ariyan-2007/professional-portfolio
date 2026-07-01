/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static output -> pure HTML/CSS/JS, no server needed, fastest possible delivery.
  output: 'export',
  reactStrictMode: true,
  images: {
    // Static export can't use the Next.js image optimization API.
    // If you swap the placeholder for a real <Image>, this keeps it working.
    unoptimized: true,
  },
};

module.exports = nextConfig;
