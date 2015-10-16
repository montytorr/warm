var React = global.React || require('react');

var Warm = {};

Warm.loaders = {};
Warm.loaders.FullScreenLoader = require('./components/loaders/fullScreenLoader.js');

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
