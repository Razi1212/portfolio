const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    loader: 'imgix',
    path: '',
  },
  basePath: isProd ? '/portfolio' : '',
  trailingSlash: true,
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // Add additional pages if needed
    };
  },
};
