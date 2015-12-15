# Blocks


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.blocks.FilteredSearch !!$Warm.blocks.FilteredSearch!!

###*Props (optionals)*
####-> **customClasses** : *String*
> A string containing classes you want to apply (ex : "toto foo bar").
#####Default = *""*

###**Example**
```
var Warm = require('warm-react');

<Warm.blocks.FilteredSearch />
```


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.blocks.FullSearch !!$Warm.blocks.FullSearch!!

###*Props (optionals)*
####-> **customClasses** : *String*
> A string containing classes you want to apply (ex : "toto foo bar").
#####Default = *""*

###*Example*

```
var Warm = require('warm-react');

<Warm.blocks.FullSearch />
```


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.blocks.Login !!$Warm.blocks.Login!!

###*Props (optionals)*
####-> **loginRequestMethod** : *Function*
> A method that this component will call if the form returns no errors. see example for details.
#####Default = *function(){}*
####-> **boldTitle** : *String*
> The bold part of the title.
#####Default = *"Warm"*
####-> **lightTitle** : *String*
> The light part of the title.
#####Default = *"Login"*
####-> **description** : *String*
> Adds a little description underneath the photo.
#####Default = *""*
####-> **customClasses** : *String*
> A string containing classes you want to apply (ex : "toto foo bar").
#####Default = *""*

###Example

```
var Warm = require('warm-react');

var loginRequestMethod = function(formData, cb){
    userAPI.signIn({
        "emailLogin" : formData.emailLogin.value,
        "passwordLogin" : formData.passwordLogin.value,
        "rememberMeLogin" : formData.rememberMeLogin.value
    }, function(response) {
        if (response.error === null && response.user !== null) {
            UserActions.userVerified();
        } else {
            cb({error: response.error});
        }
    });
};

<Warm.blocks.Login
    loginRequestMethod={loginRequestMethod}
    customClasses="centered"
    boldTitle="Warm"
    lightTitle="login"
    description="Here you can put a little description."/>
```


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.blocks.SearchBar !!$Warm.blocks.SearchBar!!

###*Props (optionals)*
####-> **content** : *ReactClass*
> A react class to be displayed before the placeholder.
#####Default = *<div></div>*
####-> **onSubmit** : *Function*
> A function to be triggered when the field is submitted.
#####Default = *function(){}*
####-> **placeholder** : *String*
> A string to be displayed as placeholder in the field.
#####Default = *""*
####-> **customClasses** : *String*
> A string containing classes you want to apply (ex : "toto foo bar").
#####Default = *""*

###*Example*
```
var Warm = require('warm-react');

<Warm.blocks.SearchBar
    customClasses="toto foo bar"/>
```


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.blocks.Surface !!$Warm.blocks.Surface!!

###*Props (optionals)*
####-> **title** : *String*
> Set a title to your surface.
#####Default = *""*
####-> **titleLoading** : *Boolean*
> If sat to true, replace the title by a loader.
#####Default = *false*
####-> **contentLoading** : *Boolean*
> The react class to be displayed on top right of the surface.
#####Default = *false*
####-> **details** : *ReactClass*
> The react class to be displayed on top right of the surface.
#####Default = *<div></div>*
####-> **content** : *ReactClass*
> The react class to be displayed in the surface's body.
#####Default = *<div></div>*
####-> **customClasses** : *String*
> A string of classes you want to apply (ex : "toto foo bar")
#####Default = *""*

###*Example*
```
var Warm = require('warm-react');

<Warm.blocks.Surface
    title="Hello Warm"
    customClasses="toto foo bar"/>
```
