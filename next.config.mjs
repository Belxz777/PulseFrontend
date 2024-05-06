/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
        allowedForwardedHosts: ['811q79f5-3000.euw.devtunnels.ms'],
          allowedOrigins:["https://811q79f5-3000.euw.devtunnels.ms"],
        },      }
};

export default nextConfig;
