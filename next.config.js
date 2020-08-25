const path = require("path");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const optimizedImages = require("next-optimized-images");
const pwa = require("next-pwa");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
          quality: 10,
          sizes: [320, 480, 640, 768, 1024, 1200, 1600, 1920, 2560, 3840],
          placeholder: true,
          placeholderSize: 40,
        },
      },
    ],
    [bundleAnalyzer],
    [
      pwa,
      {
        pwa: {
          dest: "public",
          disable: process.env.NODE_ENV === "development",
          buildExcludes: [/\/images\/.*$/],
        },
      },
    ],
  ],
  {
    webpack(config, { dev }) {
      // For absolute import
      config.resolve.modules.push(__dirname);

      // for next-optimized-images
      config.resolve.alias.images = path.join(__dirname, "/images");

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
