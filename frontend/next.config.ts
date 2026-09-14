import type { NextConfig } from 'next';
import path from 'path';

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config: NextConfig) => config;

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../'),
  reactCompiler: true,
  transpilePackages: ['recharts'],

  webpack: (config, { isServer }) => {
    config.resolve.modules = [
      path.join(__dirname, 'node_modules'),
      ...(Array.isArray(config.resolve.modules) ? config.resolve.modules : ['node_modules']),
    ];

    // Only apply custom chunk splitting on the client bundle.
    // Applying it server-side causes CJS modules to break with
    // "exports is not defined" because the vendor chunk uses ESM output.
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          stellar: {
            test: /[\\/]node_modules[\\/]@stellar[\\/]/,
            name: 'stellar',
            chunks: 'all',
            priority: 20,
          },
          d3: {
            test: /[\\/]node_modules[\\/]d3[\\/]/,
            name: 'd3',
            chunks: 'all',
            priority: 20,
          },
        },
      };
    }

    return config;
  },
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['@stellar/stellar-sdk', 'd3', 'lucide-react'],
  },
};

export default withBundleAnalyzer(nextConfig);
