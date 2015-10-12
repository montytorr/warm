var React = global.React || require('react');
var requireDir = require('require-dir');

var Warm = requireDir('./forms', {recurse: true});
if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
