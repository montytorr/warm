# Buttons
> A button is just... a button... here is our gallery of avaliables models.

!!£dot!!
##Warm.buttons.Dot !!$Warm.buttons.Dot!!

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


!!£round!!
##Warm.buttons.Round !!$Warm.buttons.Round!!

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
