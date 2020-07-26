// this file isn't transpiled, so must use CommonJS and ES5

// register babel-register to transpile our tests before they're run
require('babel-register')();

// disable webpack features (css) that Mocha doesn't understand
require.extensions['.css'] = function() {};
