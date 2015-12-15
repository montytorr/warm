# Arrays


<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
##Warm.arrays.Column !!$Warm.arrays.Column!!

###*Props (optional)*
####-> **array** : *Object*
> Set a title to your surface.
#####Default = *{titles: ["Alpha", "Beta", "Gamma", "Teta"], content:[["Lorepsum", "Ipsum", "Lorace", "3290"],["Hypnal", "Yolemu", "Ceinale", "3290"]]}*

####-> **titleLoading** : *Boolean*
> If sat to true, replace the title by a loader.
#####Default = *false*

###*Example*

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
