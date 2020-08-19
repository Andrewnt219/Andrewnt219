/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps(
  withBundleAnalyzer(
    withOptimizedImages(
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
    )
  )
);
