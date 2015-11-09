# Blocks
> A block is a complex component that contain other warm components or just simples react classes, and make interactions easier between these components.

!!£login!!

##Warm.blocks.Login !!$Warm.blocks.Login!!

>  A block is a complex component that contain other warm components or just simples react classes, and make interactions easier between these components.

###Props (optional)
- loginRequestMethod: React.PropTypes.func

> A method that this component will call if the form returns no errors. see example for details

- boldTitle: React.PropTypes.string

  > The bold part of the title (ex : "R")

- lightTitle: React.PropTypes.string

  > The light part of the title (ex : "eact")

- customClasses: React.PropTypes.string

  > A string of classes you want to apply (ex : "toto foo bar")

- description: React.PropTypes.string

  > Adds a little description underneath the photo

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

>  A block is a complex component that contain other warm components or just simples react classes, and make interactions easier between these components.

###Props (optional)
- loginRequestMethod: React.PropTypes.func

> A method that this component will call if the form returns no errors. see example for details

- boldTitle: React.PropTypes.string

  > The bold part of the title (ex : "R")

- lightTitle: React.PropTypes.string

  > The light part of the title (ex : "eact")

- customClasses: React.PropTypes.string

  > A string of classes you want to apply (ex : "toto foo bar")

- description: React.PropTypes.string

  > Adds a little description underneath the photo

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


!!£panel!!

##The Panel block

###Demo

###How to use it?
- First :

  ```
  var Warm = require('Warm');
  ```

- And then just simply call:

  ```
  <Warm.blocks.Panel />;
  ```

###What props can I use?

####Example

```
<Warm.blocks.Panel
    menu=[
        {
            name: 'Infos',
            target: mockInfo,
            img: "/myPic.png"
        },
        {
            name: 'Params',
            target: mockParams,
            img:""
        }
    ]
/>
```

####List of props
- menu : its a simple array of objects containing informations for the dynamic panel menu. You can specify an image to be displayed, or simply set img to "" so that the name will be use as menu element. The targed is a react class or another warm component to be displayed on click.
