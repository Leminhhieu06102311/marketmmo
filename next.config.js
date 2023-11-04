/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'firebasestorage.googleapis.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'api.qrserver.com',
              port: '',
            }
          ],
    }
    
}
module.exports = nextConfig
