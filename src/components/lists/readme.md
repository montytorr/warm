# Lists

<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.lists.Dot !!$Warm.lists.Dot!!

###*Props (optionals)*
- list: Array

> An array that contain the list main informations and also the informations to be displayed when the dot is clicked.
> Default value is an array like the "list" array below.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

####*Example*
```
var Warm = require('warm-react');

<Warm.lists.Dot
    list=
    [
        {
            title : "First list element",
            subTitle: "Some details about it"
        },
        {
            title : "Another element",
            subTitle: "More details?"
        },
        {
            title : "Last element",
            subTitle: "Ok that was the last"
        }
    ]
    customClasses="toto foo bar"/>
```

<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.lists.Accordion !!$Warm.lists.Accordion!!

###*Props (optionals)*
- listData: Array

> An array that contain the list main informations and also the informations to be displayed.
> Default value is an array like the "data" array below.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

####*Example*
```
var Warm = require('warm-react');

<Warm.lists.Accordion
    data=[toto, foo, bar]
    customClasses="toto foo bar"/>
```

<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.lists.Horizontal !!$Warm.lists.Horizontal!!

###*Props (optionals)*
- listElements: Array

> An array that contain the list informations to be displayed.
> Default value is an array like the "listElements" array below.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

####*Example*
```
var Warm = require('warm-react');

<Warm.lists.Horizontal
    listElements=
    [
        {
            "name" : "All",
            "label" : "All",
            "isActive" : true
        },
        {
            "name" : "Alpha",
            "label" : "Alpha",
            "isActive" : false
        },
        {
            "name" : "Beta",
            "label" : "Beta",
            "isActive" : false
        }
    ],
    customClasses="toto foo bar"/>
```