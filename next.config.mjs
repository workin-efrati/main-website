/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"transform.nws.ai"
            }
        ]
    }
};

export default nextConfig;
