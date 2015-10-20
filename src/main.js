var React = global.React || require('react');

var Warm = {};


Warm = {};
Warm.headers= {};

Warm.loaders = {};
Warm.loaders.FullScreen = require('./components/loaders/fullScreenLoader.js');

Warm.buttons = {};
Warm.buttons.Round = require('./components/buttons/roundButton.js');
Warm.buttons.Mock1 = require('./components/buttons/mock1Button.js');
Warm.buttons.Mock2 = require('./components/buttons/mock2Button.js');

Warm.blocks = {};
Warm.blocks.Login = require('./components/blocks/loginBlock.js');

Warm.lists = {};

Warm.toasts = {};

Warm.errors = {};

Warm.panels = {};

Warm.Form = require('./components/forms/form.js');


if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
