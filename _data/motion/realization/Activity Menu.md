Title: Activity Menu
Desc: Activity Menu
---
# Activity Menu

#### Desktop

#### Mobile

```
<!--demo1-->
	<div id="demo1"></div>
<!--demo1-->
```

```
	//demo1
	var ashArgs = [{
			tag: 'Hand',
		    dom: {},
		    css:[{left:'0px',width:'60px',height:'60px'},
		    {left:'400px',width:'40px',height:'40px'}],
		    time:20,
		    tween:'bounceEaseIn'
		},{
			tag: 'List',
		    dom: {},
		    css:[{left:'0px',height:'60px'},
		    {left:'400px',width:'40px'}],
		    delay:10,
		    time:20
		}];

	var ashChartInstance = new AshChart('demo1',ashArgs,{});
	//demo1
```
### Arguments


demo1