module.exports = {
  entry: [
    "./javascript/index.js",
  ], 
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
}
