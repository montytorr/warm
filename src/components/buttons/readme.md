# Buttons


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.Colored !!$Warm.buttons.Colored!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **content** : *String*
> A string containing the title of your button.
#####Default = *""*
####-> **isActive** : *Boolean*
> Defines the state of the button : true is active.
#####Default = *false*
####-> **color** : *String*
> A string containing the color of the button in HEX (ex : #444).
#####Default = *""*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*

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


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.Dot !!$Warm.buttons.Dot!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*

```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Dot
    onClick={handleClick}
    customClasses="toto foo bar"/>
```


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.LoadingSubmit !!$Warm.buttons.LoadingSubmit!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **text** : *String*
> A simple text to be displayed in the button.
#####Default = *""*
####-> **isLoading** : *Boolean*
> If set to true : text is replaced by a loader.
#####Default = *false*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*

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


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.Round !!$Warm.buttons.Round!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **text** : *String*
> A simple text to be displayed in the button.
#####Default = *""*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*

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


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.Search !!$Warm.buttons.Search!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*


```
var Warm = require('warm-react');

var handleClick = function(){
    alert("Hello Warm!")
};

<Warm.buttons.Search
    onClick={handleClick}
    customClasses="toto foo bar"/>
```


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.Simple !!$Warm.buttons.Simple!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **text** : *String*
> A simple text to be displayed in the button.
#####Default = *""*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*

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


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.buttons.Spoiler !!$Warm.buttons.Spoiler!!

###*Props (optionals)*
####-> **onClick** : *Function*
> A function to trigger onClick event.
#####Default = *function(){alert("Hello Warm!")}*
####-> **isActive** : *Boolean*
> Defines the state of the button : true is active.
#####Default = *false*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*

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
