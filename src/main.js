var React = global.React || require('react');

var Warm = {};

//headers
Warm.headers= {};

//loaders
Warm.loaders = {};
Warm.loaders.FullScreen = require('./components/loaders/fullScreenLoader.js');

//buttons
Warm.buttons = {};
Warm.buttons.Round = require('./components/buttons/roundButton.js');
Warm.buttons.Mock1 = require('./components/buttons/mock1Button.js');
Warm.buttons.Mock2 = require('./components/buttons/mock2Button.js');
Warm.buttons.readme = "https://github.com/maestro-tech/warm/blob/master/src/components/buttons/readme.md";

//blocks
Warm.blocks = {};
Warm.blocks.Login = require('./components/blocks/loginBlock.js');
Warm.blocks.Login = "https://github.com/maestro-tech/warm/blob/master/src/components/blocks/readme.md";
//lists
Warm.lists = {};

//toasts
Warm.toasts = {};

//errors
Warm.errors = {};

//panels
Warm.panels = {};

//forms
Warm.Form = require('./components/forms/form.js');


if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
