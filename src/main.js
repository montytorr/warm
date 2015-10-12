var React = global.React || require('react');
var bulk = require('bulk-require');

var Warm = bulk(__dirname, ['forms/*.js', 'components/**/*.js'])

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
