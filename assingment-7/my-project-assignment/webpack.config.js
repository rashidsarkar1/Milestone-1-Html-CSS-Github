const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const cMapsDir = path.join(
  path.dirname(require.resolve("pdfjs-dist/package.json")),
  "cmaps"
);

module.exports = {
  // Your existing Webpack configuration

  plugins: [
    // Other plugins you may already have

    new CopyWebpackPlugin({
      patterns: [
        {
          from: cMapsDir,
          to: "cmaps/",
        },
      ],
    }),
  ],
};
