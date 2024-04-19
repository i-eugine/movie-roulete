/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [{ source: '/', destination: '/search', permanent: true }],
  images: { unoptimized: true },
};

export default nextConfig;
