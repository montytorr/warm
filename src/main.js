var React = global.React || require('react');

var Warm = [
	components : [
		buttons : [
			round : require('components/buttons/round')
		],
		headers : [
			simple : require('components/headers/simple')
		],
		tiles : [
			error-tiles : [
				simple : require('components/tiles/error-tiles/simple')
			],
			login : require('components/tiles/login')
		]
	],
	form : require('forms/form')
]

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
