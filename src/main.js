var React = global.React || require('react');

var Warm = {
	"components" : {
		"buttons" : {
			"round" : require('./components/buttons/round.js')
		},
		"headers" : {
			"simple" : require('./components/headers/simple.js')
		},
		"tiles" : {
			"error-tiles" : {
				"simple" : require('./components/tiles/error-tiles/simple.js')
			},
			"login" : require('./components/tiles/login.js')
		}
	},
	"form" : require('./forms/form.js')
}

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
