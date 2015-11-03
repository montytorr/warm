var React = global.React || require('react');

var Warm = {};

//headers
Warm.headers= {};

//loaders
Warm.loaders = {};
Warm.loaders.FullScreen = require('./components/loaders/fullScreen.js');

//buttons
Warm.buttons = {};
Warm.buttons.Round = require('./components/buttons/round.js');
Warm.buttons.Dot = require('./components/buttons/Dot.js');
Warm.buttons.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/buttons/readme.md";

//blocks
Warm.blocks = {};
Warm.blocks.Login = require('./components/blocks/login.js');
Warm.blocks.Panel = require('./components/blocks/panel.js');
Warm.blocks.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/blocks/readme.md";
//lists
Warm.lists = {};
Warm.lists.Dot = require('./components/lists/dot.js');
Warm.lists.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/lists/readme.md";

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
