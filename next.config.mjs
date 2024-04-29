/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.safertunisia.com',
          },
          {
            protocol: 'http',
            hostname: 'www.safertunisia.com',
          },
          {
            protocol: 'https',
            hostname: 'safertunisia.com',
          },
          {
            protocol: 'https',
            hostname: 'supabase.com',
            pathname: '/dashboard/project/xubahczbamolpabdcyfm/storage/buckets/safertunisia/**'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '/**'
          },
        ],
      },    
};

export default nextConfig;