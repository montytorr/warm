var React = global.React || require('react');
var requireDir = require('require-dir');

var Warm = requireDir('./components', {recurse: true});
console.log(warm)
if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
