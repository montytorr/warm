var React = global.React || require('react');
var DefaultComponent = require('./components/default.js');

var Warm = {
    tiles : [
        login : require('./components/tiles/login.js') || DefaultComponent
    ],
    headers : [
        simple : require('./components/headers/simple.js') || DefaultComponent
    ]
};


if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
