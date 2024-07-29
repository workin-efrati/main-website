/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 's3-alpha-sig.figma.com' },
      { hostname: 'www.kipa.co.il' },
      { hostname: "i.ytimg.com" }
    ],
  },
  staticPageGenerationTimeout: 600
};

export default nextConfig;
