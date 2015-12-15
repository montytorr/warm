# Forms


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.forms.Form !!$Warm.forms.Form!!

###*Props (optionals)*
- onFormSubmit: Function

> A function trigged when Form is submitted.
> Default value is an empty function.

- formComponents: Array

> An array containing a list of components (inputs or buttons) to be used in the form.
> Default value is a components array like formComponentsConfig below in the example.

- error: Object

> The error object.
> Default value is an empty object.

- autocomplete: Boolean

> I don't know...
> Default value is .

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###*Example*
```
var Warm = require('warm-react');

var handleSubmit = function(){
    alert("Hello Warm!")
};

var formComponentsConfig = [
    {
        "kind" : "input",
        "type" : "search",
        "name" : "searchBar",
        "placeholder" : "Search on Youtube or Soundcloud",
        "required" : false
    }
];

<Warm.forms.Form
    onFormSubmit={handleSubmit}
    formComponents={formComponentsConfig}
    custromClasses={toto foo bar}/>
```
