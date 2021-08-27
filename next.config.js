const isProduction = "production" === process.env.NODE_ENV;

module.exports = {
  basePath: isProduction ? "/stats-data-insertion" : "",
  assetPrefix: isProduction ? "/stats-data-insertion" : "",
  exportPathMap: function (defaultPathMap) {
    return {
      ...defaultPathMap,
    };
  },
};
