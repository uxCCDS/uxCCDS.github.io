Title: Guide
Desc: Guide
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
		    time:200,
		    tween:'easeIn'
		},{
			tag: 'List',
		    dom: {},
		    css:[{left:'0px',height:'60px'},
		    {left:'400px',width:'40px'}],
		    delay:100,
		    time:200
		}];

	var ashChartInstance = new AshChart('demo1',ashArgs,{});
	ashChartInstance.start();
	//demo1
```
### Arguments


demo1