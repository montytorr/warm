#Lists!
> A list is used to orderly display elements: here are different ways to do this.


!!£dot!!
##The Dot List
###Demo
!!$Warm.lists.Dot!!
###How to use it?
- First :
```
var Warm = require('Warm');
```

- And then just simply call:
```
<Warm.lists.Dot />;
```

###What props can I use?
####Example
```
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
/>
```
####List of props
- list : an array that contain the list main informations and also the informations to be displayed when the dot is clicked.
