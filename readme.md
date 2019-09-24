```sh
yarn add --dev babel-loader @babel/core @babel/runtime @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties webpack webpack-cli webpack-dev-server

yarn add --dev eslint babel-eslint eslint-plugin-babel prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react
```

```javascript
//webpack.config.js
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
```

```json
//package.json
{
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/plugin-transform-runtime": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-react": "^7.0.0",
    "@babel/runtime": "^7.6.0",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "eslint": "^6.4.0",
    "eslint-config-prettier": "^6.3.0",
    "eslint-plugin-babel": "^5.3.0",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-react": "^7.14.3",
    "prettier": "^1.18.2",
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1"
  },
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack",
    "lint": "eslint ./"
  },
  "dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  }
}
```

```javascript
//.eslintrc.js
module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'prettier', 'react'],
  rules: {
    'no-console': 'off',
    'one-var': 'off'
  },
  settings: {
    react: {
      version: '16.9.0'
    }
  }
}
```

```javascript
// .prettierrc.js
module.exports = {
  singleQuote: true,
  semi: false
}
```

```sh
yarn run start
```
