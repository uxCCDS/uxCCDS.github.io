Title: Collapse List
Desc: Collapse List
---

#### Desktop

```
<!--demo3-->
	<video preload="auto" autoplay loop src='../../img_data/motion/realization/CollapseList-MacOS.mov' ></video>
<!--demo3-->
```

demo3

# Description

## Hover On Hand


```
<!--demo2-->
	<div id="demo2"></div>
<!--demo2-->
```

```
	//demo2
	var ashArgs2 = [{
			tag: 'List',
		    dom: {},
		    css:[{'Position X':'0px'},
		    {'Position X':'13px'}],
		    time:30,
		    msTime:500,
		    tween:'easeInOut'
		}];

	var ashChartInstance2 = new AshChart('demo2',ashArgs2,{
		IfToMS:true,
		waitTime:40
	});
	ashChartInstance2.start();
	//demo2
```

demo2


## Collapse List


```
<!--demo1-->
	<div id="demo1"></div>
<!--demo1-->
```

```
	//demo1
	var ashArgs = [{
			tag: 'List',
		    dom: {},
		    css:[{width:'400px'},
		    {width:'0px'}],
		    time:18,
		    msTime:300,
		    tween:'easeOut'
		}];

	var ashChartInstance = new AshChart('demo1',ashArgs,{
		IfToMS:true,
		colors:['#BD10E0','#4A90E2'],
		waitTime:60
	});
	ashChartInstance.start();
	//demo1
```

demo1