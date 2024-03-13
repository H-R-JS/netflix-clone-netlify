/*const webpack = require("webpack");
//import Dotenv from "dotenv-webpack";
module.exports = function override(config, env) {
  const fallback = config.resolve.fallback || {};
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    // existing configs...
    url: require.resolve("url"),
    fs: require.resolve("fs"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
  };
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};*/
