# Arrays
> An array is a component used to display ordered data in different ways.

!!£column!!

##Warm.arrays.Column !!$Warm.arrays.Column!!

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
