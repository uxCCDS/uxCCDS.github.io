Title: Activity Menu
Desc: Activity Menu
---

## Mobile

```
<!--demo1-->
	<div class='mobile_wt_con flex_none'>
		<div class='mobile_wt_status_bar mobile_wt_status_bar_absolute'></div>
        <div class='mobile_wt_title_bar mobile_wt_title_bar_absolute'>
            <a  class='transpart_back' ></a>
            <span id='mobile_wt_title_bg' class='space_title'><h1 class="sub_call"></h1>Prototype Team<i class='arrow' id='mobile_wt_title_arrow'></i></span>
        </div>  
		<div class='mobile_wt_card' id='mobile_wt_card'></div>
		<div class='mobile_wt_card_shadow' id='mobile_wt_card_shadow'></div>
		<div class='mobile_wt_message_content' id='mobile_wt_message_content'></div>
	</div>
	<div id="demo1" class='flex_none'></div>
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
        }];
        /*
        ,{
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
        }
        */

	var ashChartInstance = new AshChart('demo1',ashArgs,{
        canvasWidth:900,
        IfRow:true,
        actionsCon:mobile_tBg,
        actions:{
            click:[{
                delay:0,
                position:{
                    x:50,
                    y:6
                }
            }]
        }
    });
	ashChartInstance.sync();
	ashChartInstance.start();
	//demo1
```

demo1




## Desktop

```
<!--demo2-->
	<div class='desktop_wt_con fake_chat_con'>
		<div class='desktop_title_con' id='desktop_title_con'>
			<span class='space_title' id='desktop_space_title'><h1 class="sub_chat"></h1>Prototype Team<i class='arrow' id='desktop_space_title_arrow'></i></span>
			<h1>Engineering</h1>
		</div>
		<div class='fake_activity_con' id='fake_activity_con'></div>
	</div>
	<div id="demo2"></div>
<!--demo2-->
```
```
	//demo2
	var desktop_title_con= document.getElementById('desktop_title_con'),
		desktop_space_title = document.getElementById('desktop_space_title'),
		desktop_tArrow = document.getElementById('desktop_space_title_arrow'),
		desktop_activity_con = document.getElementById('fake_activity_con');

	var ashArgs2 = [{
			tag:'ball_container',
            dom:desktop_activity_con,
            css:[{top:'-576px'},{top:'0px'}],
            time:30,
            tween:"easeOut"
        },{
			tag:'title_container',
            dom:desktop_space_title,
            css:[{'background-color':'rgba(255,255,255,0.4)'},{'background-color':'rgba(231,235,235,1)'}],
            time:30,
            tween:'rgbaLinear'
        },{
        	tag:'ball_container',
            dom:desktop_activity_con,
            css:[{opacity:0},{opacity:1}],
            time:20
        },{
        	tag:'arrow',
            dom:desktop_tArrow,
            css:[{'transform':'rotateX(0deg)'},{'transform':'rotateX(180deg)'}],
            time:10
        },{
        	tag:'title_bar',
            dom:desktop_title_con,
            css:[{'border-bottom-color':'rgba(0,0,0,0.08)'},{'border-bottom-color':'rgba(0,0,0,0)'}],
            time:10,
            tween:"rgbaLinear"      
        }];

	var ashChartInstance2 = new AshChart('demo2',ashArgs2,{
            actionsCon:desktop_space_title,
            actions:{
                click:[{
                    delay:0,
                    position:{
                        x:80,
                        y:6
                    }
                }]
            }
        });
	ashChartInstance2.sync();
	ashChartInstance2.start();
	//demo2
```



demo2