# Toasters
> A toaster is a container for displaying toasts.

!!£simple!!
##Warm.toasters.Simple !!$Warm.toasters.Simple!!

###Props (optional)
- toasts: Array

> A array of the toasts to be displayed.
> Default value is the array in the example below.

- dismissAction: Function

> A function to be triggered when...
> Default value is an empty function.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

####Example
```
toasts = [
    {
        'type' : 'api-deconnection',
        'canStack' : true,
        'template' : 'error',
        'canDismiss' : false,
        'message' : "Lost connexion"
    },
    {
        'type' : 'api-connection-attempt',
        'canStack' : true,
        'template' : 'warning',
        'canDismiss' : false,
        'message' : "Try to reconnect"
    },
    {
        'type' : 'api-reconnected',
        'canStack' : true,
        'template' : 'success',
        'canDismiss' : false,
        'message' : "Reconnected sucessfuly",
    },
    {
        'type' : 'api-reconnected',
        'canStack' : true,
        'template' : 'info',
        'canDismiss' : false,
        'message' : "Toaster info"
    }
]
<Warm.toasters.Simple
    toasts={toasts}/>
```
