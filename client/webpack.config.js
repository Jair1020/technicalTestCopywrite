const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForJavaScript = {
  test: /\.(js|jsx)$/, 
  loader: "babel-loader",
  options: {
    presets: [
      ["@babel/preset-react", { runtime: "automatic" }]
    ],
  },
};

const rulesForCSS = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};
const rules = [rulesForJavaScript, rulesForCSS];

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({  template: 'src/index.html' })
  ],       
  module: { rules },
  devServer: {
    open: true,
    port: 3001,
    compress: true,
  } 
}
