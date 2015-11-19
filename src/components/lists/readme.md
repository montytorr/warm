# Lists
> A list is used to orderly display elements: here are different ways to do this.

!!£dot!!
##Warm.lists.Dot !!$Warm.lists.Dot!!

###Props (optional)
- list: Function

> Nn array that contain the list main informations and also the informations to be displayed when the dot is clicked.
> Default value is an array like the "list" array below.

- customClasses: String

> A string of classes you want to apply (ex : "toto foo bar")
> Default value is "".

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
	customClasses="toto foo bar"/>
```
