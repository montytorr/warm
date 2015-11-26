# Arrays
> An array is a component used to display ordered data in different ways.

!!£column!!

##Warm.arrays.Column !!$Warm.arrays.Column!!

###Props (optional)
- array: Object

> An array to be displayed based on the model of the example below.
> Default is the object of the example.

- customClasses: String

  > A string of classes you want to apply (ex : "toto foo bar").
  > Default is "".

###Example

```
var Warm = require('warm');

var array = {
    titles: ["Alpha", "Beta", "Gamma", "Teta"],
    content:[
        ["Lorepsum", "Ipsum", "Lorace", "3290"],
        ["Hypnal", "Yolemu", "Ceinale", "3290"]
    ]
}

<Warm.arrays.Column
    array={array}
    customClasses="centered"/>
```
