import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "rwnj6p31wc2p4rcv.public.blob.vercel-storage.com"
            }
        ]
    }
};

export default nextConfig;
