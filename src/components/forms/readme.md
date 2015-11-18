# Forms
> A form is a group of inputs or buttons used to collect data from the user.

!!£forms!!
##Warm.forms.Form !!$Warm.forms.Form!!

###Props (optional)
- onFormSubmit: Function

> A function trigged when Form is submitted.

- formComponents: Array

> An array containing a list of components (inputs or buttons) to be used in the form.

- error: Object

> The error object.

- autocomplete: Boolean

> I don't know...

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")

###Example

```
var Warm = require('warm');

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
