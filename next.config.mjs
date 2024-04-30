/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.safertunisia.com",
      },
      {
        protocol: "http",
        hostname: "www.safertunisia.com",
      },
      {
        protocol: "https",
        hostname: "safertunisia.com",
      },
      {
        protocol: "https",
        hostname: "xubahczbamolpabdcyfm.supabase.co",
        pathname: "/storage/v1/object/public/safertunisia/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
