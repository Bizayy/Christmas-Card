import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.vexels.com'
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com'

            },
            {
                protocol: 'https',
                hostname: 'pngimg.com'

            },

        ],
    }
};

export default nextConfig;
