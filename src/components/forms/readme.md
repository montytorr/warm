# Forms
> Forms desc...

!!£forms!!
##Warm.forms.Form !!$Warm.forms.Form!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.

###Example

```
var Warm = require('warm');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Dot
    onClick={handleClick}/>
```


!!£format!!
##Warm.forms.Format !!$Warm.forms.Format!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.

- text: String

> A simple text to be displayed in the button.

- customClass: String

> A string containing classes to be applied.

###Example

```
var Warm = require('warm');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Round
    onClick={handleClick}
    test="Click Me"
    customClasses="my-button blue"/>
```

!!£validation!!
##Warm.forms.Validation !!$Warm.forms.Validation!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.

- text: String

> A simple text to be displayed in the button.

- customClass: String

> A string containing classes to be applied.

###Example

```
var Warm = require('warm');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Round
    onClick={handleClick}
    test="Click Me"
    customClasses="my-button blue"/>
```
