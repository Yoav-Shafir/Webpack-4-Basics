const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    kiwi: "./src/kiwi.js"
  },
  output: {
    // We dont need to use [contenthash] in development,
    // we dont care about browser cache.
    filename: "[name].bundle.js",
    path: path.resolve  (__dirname, "./dist"),
    // Without this property webpack doesnt know where to find the image for example.
    publicPath: ""
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          // By default the file name in the output bundle will
          // be its md5 value + the original exention
          "file-loader"
        ]
      },
      {
        test: /\.css$/,
        // Extracts CSS into separate files.
        // take all css/scss files and put them in a single flle - styles.css.
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        // webpack will process from right to left
        // starting with the `sass-loader` converting everything to regular css.
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", // relative to the `dist` folder
        path.join(process.cwd(), "build/**/*") // absolute path for anything outside the `dist` folder.
      ]
    }),
    new HtmlWebpackPlugin({
      title: "Hello World",
      filename: "hello-world.html",
      // `hello-world` is the name from the property naes in the `entry` block.
      chunks: ["hello-world"],
      template: "src/template.hbs",
      meta: {
        viewport: "width=device-width, initial-scale=1",
        description: "Hello World Description"
      }
    }),
    new HtmlWebpackPlugin({
      title: "Kiwi",
      filename: "kiwi.html",
      chunks: ["kiwi"],
      template: "src/template.hbs",
      meta: {
        viewport: "width=device-width, initial-scale=1",
        description: "Kiwi Description"
      }
    })
  ]
};
