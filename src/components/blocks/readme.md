#Blocks!
> A block is a complex component that contain other warm components or just simples react classes, and make interactions easier between these components.


!!£login!!
##The login block
!!$Warm.blocks.Login!!
###How to use it?
- First :
```
var Warm = require('Warm');
```

- And then just simply call:
```
<Warm.blocks.Login />;
```

###What props can I use?
####Example
```
<Warm.blocks.Login
	oidjoizjdzjdlz
	zefzefezfezf
	zfz
	fzfzfezeefezefzf
	zefzfezfzefezfezf
	zfezfezf
	ezfzefzefezfzefz
/>
```
####List of props
- Lorepsum
- Ipsum
- Tamer

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
