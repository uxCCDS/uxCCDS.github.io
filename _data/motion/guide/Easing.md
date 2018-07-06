Title: Easing
Desc: Easing
---
# Easing

```
<!--demo1-->
	<div id="demo1"></div>
<!--demo1-->
```

```
	//demo1
	var arr=[],
		regTest = /int|rgb/gi,
		regCaps = /\b(\w)|\s(\w)/,
		fnCaps=function(m){
			return m.toUpperCase();
		};
	for(var name in Ash.Tween){
		if(!regTest.test(name)){
			arr.push({
				tag:name.replace(regCaps,fnCaps),
				dom:{},
				css:[{width:0},{width:100}],
				time:100,
				tween:name
			});
		}
	}

	var ashChartInstance = new AshChart('demo1',arr,{});
	ashChartInstance.start();
	//demo1
```
### Arguments


demo1