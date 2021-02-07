module.exports = {
  mode: "production",
  entry: "./src/ColorSchemer.js",
  output: {
    library: 'ColorSchemer',
    libraryExport: 'default',
    libraryTarget: 'var',
    filename: 'ColorSchemer.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-private-methods",
                "@babel/plugin-proposal-class-properties",
                // async を使えるようにする
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向け
  target: ["web", "es5"],
};

