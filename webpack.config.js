const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties'
            ],
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: { colors: true }
  },
  output: {
    filename: '[name].bundle.js',
    // filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  }
}
