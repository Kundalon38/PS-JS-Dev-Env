/* this uses ES6 features, so it must be transpiled

  the webpack docs show a large set of options, this is simple for this course
  - it's one large exported object
  - debug: show messages
  - devtool: there are a large set of choices, tradeoff is speed vs quality
  - noInfo:false = (Bad name), show a list of files being bundled - turn off during real development, much noise
  - entry = the entry point for the application, you could inject interesting middle ware here for hot reloading
        the magical __dirname is used to resolve the path, it's part of Node path package
  - target = web or node; electron could be stated here (desktop apps)
  - output, where it geneates the bundle
      needed, but in dev, we will be using it to serve a (bundle) in memory for the browser, not create a file
  - plugins could be defined, eg hot reloading, catching errors, linting styles - for now not needed
  - loaders define the file types we want handled - there alternative syntaxes for this

  This is very basic. PS has a good course just on Webpack.
*/

import path from 'path';

// note that the entry point, defined as src/index refers to index.js

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
