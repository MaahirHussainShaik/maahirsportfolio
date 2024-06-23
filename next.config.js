/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Custom loader for .svg and .png files
    config.module.rules.push({
      test: /\.(svg|png)$/,
      use: [
        {
          loader: 'custom-loader',
          options: {
            loaderFile: './loader.js'
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
