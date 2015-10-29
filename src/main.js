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
Warm.buttons.Dot = require('./components/buttons/DotButton.js');
Warm.buttons.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/buttons/readme.md";

//blocks
Warm.blocks = {};
Warm.blocks.Login = require('./components/blocks/loginBlock.js');
Warm.blocks.Panel = require('./components/blocks/panelBlock.js');
Warm.blocks.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/blocks/readme.md";
//lists
Warm.lists = {};
Warm.lists.Dot = require('./components/lists/dotList.js');
Warm.blocks.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/lists/readme.md";

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
