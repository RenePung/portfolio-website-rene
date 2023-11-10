/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com", // change hostname based on web address of your picture
            },
        ],
    },
};

module.exports = nextConfig
