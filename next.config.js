/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  redirects: async () => {
    return [
        {source: "/react" , destination: "/next", permanent: false },
        {source: "/about" , destination: "/", permanent: true }

    ];
  }
}

module.exports = nextConfig
