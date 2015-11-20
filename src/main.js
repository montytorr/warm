var React = global.React || require('react');

var Warm = {};

//blocks
Warm.blocks = {};
Warm.blocks.Login = require('./components/blocks/login.js');
Warm.blocks.Modal = require('./components/blocks/modal.js');
Warm.blocks.Panel = require('./components/blocks/panel.js');
Warm.blocks.Search = require('./components/blocks/search.js');
Warm.blocks.Surface = require('./components/blocks/surface.js');
Warm.blocks.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/blocks/readme.md";

//buttons
Warm.buttons = {};
Warm.buttons.Colored = require('./components/buttons/colored.js');
Warm.buttons.Dot = require('./components/buttons/dot.js');
Warm.buttons.Round = require('./components/buttons/round.js');
Warm.buttons.Search = require('./components/buttons/search.js');
Warm.buttons.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/buttons/readme.md";

//errors
Warm.errors = {};
Warm.errors.Simple = require('./components/errors/simple.js');
Warm.errors.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/errors/readme.md";

//forms
Warm.forms = {};
Warm.forms.Form = require('./components/forms/standard/form.js');
Warm.forms.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/forms/readme.md";

//lists
Warm.lists = {};
Warm.lists.Dot = require('./components/lists/dot.js');
Warm.lists.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/lists/readme.md";

//loaders
Warm.loaders = {};
Warm.loaders.FullScreen = require('./components/loaders/fullScreen.js');
Warm.loaders.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/loaders/readme.md";

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
