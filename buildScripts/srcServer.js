/* this sets up express
   - understand these require's

*/
// ES5:
//var express = require('express');
//var path = require('path');
//var open = require('open');
// ES6:
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// ES6 const
const port = 3000;      /* use another port, if a collision */
const app = express();  /* create an instance of express */
const compiler = webpack(config);

/* tell Express to use Webpack */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

/* declare routing */
/* tell express what routes it should handle; (req,res) = request and response */
/* __dirname is a special var giving us name of the current directory we're running in  */
/* below, if user agent request the root (/) then give them index.html - routing  */

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
})

/* now listen */
app.listen(port,function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
