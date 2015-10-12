var React = global.React || require('react');

var Warm = require('require-all')({
  dirname     :  __dirname + '/forms',
  filter      :  /(.+)\.js$/,
  excludeDirs :  /^\.(git|svn)$/
});

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
