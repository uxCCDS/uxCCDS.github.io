Title: Activity Menu
Desc: Activity Menu
---
# Activity Menu

#### Mobile

```
<!--demo1-->
	<div class='mobile_wt_con'>
		<div class='mobile_wt_status_bar mobile_wt_status_bar_absolute'></div>
        <div class='mobile_wt_title_bar mobile_wt_title_bar_absolute'>
            <a  class='transpart_back' ></a>
            <span id='mobile_wt_title_bg'><h1 class="sub_call"></h1>Prototype Team<i class='arrow' id='mobile_wt_title_arrow'></i></span>
        </div>  
		<div class='mobile_wt_card' id='mobile_wt_card'></div>
		<div class='mobile_wt_card_shadow' id='mobile_wt_card_shadow'></div>
		<div class='mobile_wt_message_content' id='mobile_wt_message_content'></div>
	</div>
	<div id="demo1"></div>
<!--demo1-->
```

```
	//demo1
	var mobile_tBg= document.getElementById('mobile_wt_title_bg'),
		mobile_tArrow = document.getElementById('mobile_wt_title_arrow'),
		mobile_card = document.getElementById('mobile_wt_card'),
		mobile_shadow = document.getElementById('mobile_wt_card_shadow'),
		mobile_content = document.getElementById('mobile_wt_message_content');

	var ashArgs = [{
			tag:'ball_container',
            dom:mobile_card,
            css:[{top:'-641px'},{top:'0px'}],
            time:30,
            tween:"easeOut"
        },{
			tag:'title_container',
            dom:mobile_tBg,
            css:[{'background-color':'rgba(255,255,255,0.4)'},{'background-color':'rgba(231,235,235,1)'}],
            time:30,
            tween:'rgbaLinear'
        },{
        	tag:'ball_container',
            dom:mobile_card,
            css:[{opacity:0},{opacity:1}],
            time:20
        },{
        	tag:'arrow',
            dom:mobile_tArrow,
            css:[{'transform':'rotateX(0deg)'},{'transform':'rotateX(180deg)'}],
            time:10
        },{
        	tag:'call_panel',
            dom:mobile_content,
            css:[{transform:'scale(1)'},{transform:'scale(0.96)'}],
            time:20,
            delay:10,
            tween:"easeIn"      
        },{
        	tag:'shadow',
            dom:mobile_shadow,
            css:[{opacity:0},{opacity:1}],
            delay:10,
            time:20  
        },{
        	notRender:true,
        	tag:'shadow',
            dom:mobile_shadow,
            css:[{opacity:0},{opacity:0}],
            time:0
        },{
        	notRender:true,
        	tag:'arrow',
            dom:mobile_tArrow,
            css:[{'transform':'rotateX(0deg)'},{}],
            time:0
        }];

	var ashChartInstance = new AshChart('demo1',ashArgs,{});
	ashChartInstance.sync();
	ashChartInstance.start();
	//demo1
```

demo1