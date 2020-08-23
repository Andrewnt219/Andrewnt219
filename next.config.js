const path = require("path");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const optimizedImages = require("next-optimized-images");
const sourceMaps = require("@zeit/next-source-maps");
const pwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require("next-compose-plugins");
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
          format: "webp",
          quality: 50,
          sizes: [320, 640, 960, 1200, 1800, 2400],
          placeholder: true,
        },
      },
    ],
    [bundleAnalyzer],
    [sourceMaps],
    [
      pwa,
      {
        pwa: {
          dest: "public",
          disable: process.env.NODE_ENV === "development",
        },
      },
    ],
  ],
  {
    webpack(config, { dev }) {
      // For absolute import
      config.resolve.modules.push(__dirname);

      // for next-optimized-images
      config.resolve.alias.images = path.join(__dirname, "/public/images");

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
  }
);
