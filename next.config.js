/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withImages = require("next-images");

module.exports = withBundleAnalyzer(
  withImages({
    webpack(config, { dev }) {
      // For absolute import
      config.resolve.modules.push(__dirname);

      // for dev liniting in terminal
      if (dev) {
        config.module.rules.push({
          test: /\.(j|t)s?$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        });
      }

      return config;
    },
  })
);
