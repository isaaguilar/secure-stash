var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

module.exports = {
  entry: "./src/index.js",
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"],
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        // remove warnings
        warnings: false,

        // Drop console statements
        drop_console: true
      },

      mangle: {
          keep_fnames: true,
          except: ['$super']
      }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    })
  ],
  
  devServer: {
    outputPath: path.join(__dirname, 'dist'),
    proxy: {
      "/api/*": {
        target: "http://localhost:8081"
      }
    }
  }
};
