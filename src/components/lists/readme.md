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
##Warm.lists.Spoiler !!$Warm.lists.Spoiler!!

###*Props (optionals)*
- list: Array

> An array that contain the list and it's containing.
> Default value is an array like the "list" array below.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

####*Example*
```
var Warm = require('warm-react');

<Warm.lists.Spoiler
	list =
	[
		{
			title : "Alpha",
			content: Warm.array.Column,
			isActive: true,
			color: "#63AFFF"
		},
		{
			title : "Beta",
			content: Warm.array.Column,
			isActive: false
		},
		{
			title : "Gamma",
			content: Warm.array.Column,
			isActive: false,
			color: "#50D86E"
		}
	]
	customClasses="toto foo bar"/>
```
