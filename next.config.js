/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com'],

        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
            },
          ],
    }
}

module.exports = nextConfig
