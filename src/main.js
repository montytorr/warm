var React = global.React || require('react');

var Warm = {};

//arrays
Warm.arrays = {};
Warm.arrays.Column = require('./components/arrays/column.js');
Warm.arrays.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/arrays/readme.md";

//blocks
Warm.blocks = {};
Warm.blocks.FilteredSearch = require('./components/blocks/filteredSearch.js');
Warm.blocks.FullSearch = require('./components/blocks/fullSearch.js');
Warm.blocks.Login = require('./components/blocks/login.js');
Warm.blocks.SearchBar = require('./components/blocks/searchBar.js');
Warm.blocks.Surface = require('./components/blocks/surface.js');
Warm.blocks.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/blocks/readme.md";

//buttons
Warm.buttons = {};
Warm.buttons.Colored = require('./components/buttons/colored.js');
Warm.buttons.Dot = require('./components/buttons/dot.js');
Warm.buttons.LoadingSubmit = require('./components/buttons/loadingSubmit.js');
Warm.buttons.Round = require('./components/buttons/round.js');
Warm.buttons.Search = require('./components/buttons/search.js');
Warm.buttons.Simple = require('./components/buttons/simple.js');
Warm.buttons.Spoiler = require('./components/buttons/spoiler.js');
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
Warm.lists.Accordion = require('./components/lists/accordion.js');
Warm.lists.Dot = require('./components/lists/dot.js');
Warm.lists.Horizontal = require('./components/lists/horizontal.js');
Warm.lists.Spoiler = require('./components/lists/spoiler.js');
Warm.lists.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/lists/readme.md";

//loaders
Warm.loaders = {};
Warm.loaders.FullScreen = require('./components/loaders/fullScreen.js');
Warm.loaders.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/loaders/readme.md";

//toasters
Warm.toasters = {};
Warm.toasters.Simple = require('./components/toasters/simple.js');
Warm.toasters.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/toasters/readme.md";

//toasts
Warm.toasts = {};
Warm.toasts.Simple = require('./components/toasts/simple.js');
Warm.toasts.readme = "https://raw.githubusercontent.com/maestro-tech/warm/master/src/components/toasts/readme.md";

if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
  global.Warm = Warm;
}

module.exports = Warm;
