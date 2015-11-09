# Blocks
> A block is a complex component that contain other warm components or just simples react classes, and make interactions easier between these components.

!!£login!!

##Warm.blocks.Login !!$Warm.blocks.Login!!

###Props (optional)
- $ loginRequestMethod: Function

> A method that this component will call if the form returns no errors. see example for details

- $ boldTitle: String

  > The bold part of the title (ex : "Warm")

- $ lightTitle: String

  > The light part of the title (ex : "Login")

- $ customClasses: String

  > A string of classes you want to apply (ex : "toto foo bar")

- $ description: String

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

###Props (optional)
- $ isActive: Boolean

> A value to change when trigger or not the Modal (true: shown, false: hidden).

- $ showTrigger: Boolean

  > When you have a button or whatever to trigger the Modal, you can set the value to false (default is true and set a default clickable trigger module)

- $ width: String

  > Set the modal container width.

- $ height: String

  > Set the modal container height.

- $ content: ReactClass

  > The react class witch is contained in the modal.

###Example

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
- $ menu: Array

> The array containing your menu elements (see below the construction of a menu element).

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
