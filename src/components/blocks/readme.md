# Blocks
> A block is a complex component that contain other warm components or just simples react classes, and make interactions easier between these components.

!!£login!!

##Warm.blocks.Login !!$Warm.blocks.Login!!

###Props (optional)
- loginRequestMethod: Function

> A method that this component will call if the form returns no errors. see example for details.
> Default is an empty func.

- boldTitle: String

  > The bold part of the title.
  > Default is "Warm".

- lightTitle: String

  > The light part of the title.
  > Default is "Login".

- description: String

  > Adds a little description underneath the photo.
  > Default is "".

- customClasses: String

  > A string of classes you want to apply (ex : "toto foo bar").
  > Default is "".

###Example

```
var Warm = require('warm');

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

!!£modal!!

##Warm.blocks.Modal !!$Warm.blocks.Modal!!

###Props (optional)
- isActive: Boolean

> A value to change when trigger or not the Modal (true: shown, false: hidden).
> Default is false.

- showTrigger: Boolean

  > When you have a button or whatever to trigger the Modal, you can set the value to false (default is true and set a default clickable trigger module)
  > Default is true.

- width: String

  > Set the modal container width.
  > Default is "".

- height: String

  > Set the modal container height.
  > Default is "".

- content: ReactClass

  > The react class witch is contained in the modal.
  > Default is an empty div returned by a ReactClass.

- customClasses: String

  > A string of classes you want to apply (ex : "toto foo bar")
  > Default is "".

##Example

```
var Warm = require('warm');

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello Warm!</h1>
            </div>
        );
    }
});

<Warm.blocks.Login
    isActive=true
    showTrigger=false
    width="800px"
    height="100px"
    content={HelloWorld}/>
```


!!£panel!!

##Warm.blocks.Panel !!$Warm.blocks.Panel!!

###Props (optional)
- menu: Array

> The array containing your menu elements (see below the construction of a menu element).
> Default is a simple array like in the example below "myMenu".

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default is "".

####Example

```
var Warm = require('warm');

var myMenu = [
    {
        name: 'Infos',
        target: mockInfo,
        img: "/img/myExample.png"
    },
    {
        name: 'Params',
        target: mockParams,
        img:""
    }
];

<Warm.blocks.Login
    menu={myMenu}/>
```

!!£search!!

##Warm.blocks.Search !!$Warm.blocks.Search!!

###Props (optional)
- content: ReactClass

  > A react class to be displayed before the placeholder.
  > Default is an empty div.

- onSubmit: Function

> A function to be triggered when the field is submitted.
> Default is an empty function.

- placeholder: String

> A string to be displayed as placeholder in the field.
> Default is "".

- customClasses: String

  > A string of classes you want to apply (ex : "toto foo bar")
  > Default is "".

####Example

```
var Warm = require('warm');

<Warm.blocks.Search
    customClasses="toto foo bar"/>
```

!!£surface!!

##Warm.blocks.Surface !!$Warm.blocks.Surface!!

###Props (optional)
- title: String

> Set a title to your surface.
> Default is "".

- titleLoading: Boolean

  > If sat to true, replace the title by a loader.
  > Default is false.

- bodyLoading: Boolean

> If sat to true, replace the body by a loader.
> Default is false.

- details: ReactClass

> The react class to be displayed on top right of the surface.
> Default is an empty div returned by a ReactClass.

- content: ReactClass

> The react class to be displayed in the surface's body.
> Default is an empty div returned by a ReactClass.

- customClasses: String

  > A string of classes you want to apply (ex : "toto foo bar")
  > Default is "".

####Example

```
var Warm = require('warm');

<Warm.blocks.Surface
    title="Hello Warm"
    customClasses="toto foo bar"/>
```
