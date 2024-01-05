const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/portfolio' : '', // Set your repository name
  assetPrefix: isProd ? '/portfolio/' : '', // Set your repository name
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom webpack configurations here

    return config;
  },
};