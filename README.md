# Ignore @babel/typescript type warnings in Webpack

> WARNING in ./an_awesome_pathname/awesome_file.ts 406:0-198
> "export 'EpicInterface' was not found in './interfaces'

Get rid of this ?

## Usage

In your `webpack.config.js`

```js
const IgnoreBabelTypescriptTypeWarnings = require("ignore-babel-typescript-type-warnings-webpack-plugin");

const config = {
  entry: "entry",
  output: "output",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-typescript",
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new IgnoreBabelTypescriptTypeWarnings()
  ]
}
```

## License

[Mozilla Public License 2.0](./LICENSE.md)
