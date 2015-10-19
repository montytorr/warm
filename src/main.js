var React = global.React || require('react');

var Warm = {};

Warm.loaders = {};
Warm.components = {};

Warm.loaders.FullScreenLoader = require('./components/loaders/fullScreenLoader.js');
Warm.components.LoginTile = require('./components/tiles/loginTile.js');
if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
