/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique pour hébergement Apache
  output: 'export',
  trailingSlash: true,

  // Optimisations de performance
  reactStrictMode: true,

  // Fix pour WSL2 - Active le polling pour détecter les changements de fichiers
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000, // Vérifie les changements toutes les secondes
        aggregateTimeout: 300,
      };
    }
    return config;
  },

  // Images non optimisées pour export statique
  images: {
    unoptimized: true,
  },

  // Compression
  compress: true,

  // Headers pour sécurité et performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
