/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  dangerouslyAllowSVG: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'image.tmdb.org',
      
    },
    {
      protocol: 'https',
      hostname: 'www.lepoint.fr',
      
    },
    {
      protocol: 'https',
      hostname: 'api.dicebear.com',
    },
  ],
  },
  
};
export default nextConfig;

