# Buttons
> A button is just... a button... here is our gallery of avaliables models.

!!£colored!!
##Warm.buttons.Colored !!$Warm.buttons.Colored!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an empty function.

- content: String

> A string containing the title of your button.
> Default value is "".

- isActive: Boolean

> Defines the state of the button : true is active.
> Default value is false.

- color: String

> A string containing the color of the button in HEX (ex : #444).
> Default value is the default warm theme color.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar").
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Colored
    content={elem}
    color="#444"
    onClick={handleClick}
    customClasses="list-button"/>
```


!!£dot!!
##Warm.buttons.Dot !!$Warm.buttons.Dot!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an Hello Warm function.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Dot
    onClick={handleClick}
    customClasses="toto foo bar"/>
```

!!£loadingsubmit!!
##Warm.buttons.LoadingSubmit !!$Warm.buttons.LoadingSubmit!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an Hello Warm function.

- text: String

> A simple text to be displayed in the button.
> Default value is "".

- isLoading: Boolean

> If set to true : text is replaced by a loader.
> Default value is false.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.LoginSubmit
    text="Go"
    isLoading={true}
    onClick={handleClick}
    customClasses="toto foo bar"/>
```


!!£round!!
##Warm.buttons.Round !!$Warm.buttons.Round!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an Hello Warm function.

- text: String

> A simple text to be displayed in the button.
> Default value is "".

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Round
    onClick={handleClick}
    test="Click Me"
    customClasses="toto foo bar"/>
```

!!£search!!
##Warm.buttons.Search !!$Warm.buttons.Search!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an Hello Warm function.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Search
    onClick={handleClick}
    customClasses="toto foo bar"/>
```

!!£simple!!
##Warm.buttons.Simple !!$Warm.buttons.Simple!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an Hello Warm function.

- text: String

> A string to be displayed in the button.
> Default value is "".

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Simple
    onClick={handleClick}
    text="Click Me"
    customClasses="toto foo bar"/>
```

!!£spoiler!!
##Warm.buttons.Spoiler !!$Warm.buttons.Spoiler!!

###Props (optional)
- onClick: Function

> A function to trigger onClick event.
> Default value is an Hello Warm function.

- isActive: Boolean

> A value to define the state of the button.
> Default value is false.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

###Example

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Spoiler
    onClick={handleClick}
    isActive=true
    customClasses="toto foo bar"/>
```
