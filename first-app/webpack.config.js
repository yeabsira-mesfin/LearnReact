const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Test for JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JS and JSX files
          options: {
            presets: ['@babel/preset-react'], // Use the React preset
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"), // Polyfill for zlib
      "buffer": require.resolve("buffer/"), // Polyfill for buffer
      "stream": require.resolve("stream-browserify"), // Polyfill for stream
    },
  },
};
