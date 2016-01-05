# Toasts


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.toasts.Simple !!$Warm.toasts.Simple!!

###*Props (optional)*

- toast: Object

> An object containing the toast parameters.
> Default value is the info toast in the example below.

- dismissAction: Function

> A function to be triggered when...
> Default value is an empty function.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

####*Example*
```
var Warm = require('warm-react');

var toast = {
    'type' : 'api-reconnected',
    'canStack' : true,
    'template' : 'info',
    'canDismiss' : false,
    'message' : "Toast info"
}
<Warm.toasts.Simple
    toast={toast}/>
```
