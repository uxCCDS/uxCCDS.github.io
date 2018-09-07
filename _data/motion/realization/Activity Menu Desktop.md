Title: Activity Menu Desktop
Desc: Activity Menu Desktop
---

## Open Activity Menu

```
<!--demo1-->
	<div class='desktop_wt_con flex_none' id='desktop_con'>
        <div class='desktop_bg_call'></div>
        <div class="desktop_wt_status_bar desktop_wt_status_bar_absolute"></div>
        <div class='desktop_activity_balls_con' id='desktop_activity_balls_con'>
            <div class='desktop_activity_balls_message'><a><i></i></a><span>Message</span></div>
            <div class='desktop_activity_balls_call'><a><i></i></a><span>Call</span></div>
            <div class='desktop_activity_balls_whiteboard'><a><i></i></a><span>Whiteboard</span></div>
            <div class='desktop_activity_balls_meetings'><a><i></i></a><span>Meetings</span></div>
            <div class='desktop_activity_balls_people'><a><i></i></a><span>People</span></div>
            <div class='desktop_activity_balls_files'><a><i></i></a><span>Files</span></div>
        </div>
        <div class='desktop_btn_activity_bg' id='desktop_btn_activity_bg'></div>
        <div class='desktop_btn_activity_back' id='desktop_btn_activity_back'></div>
        <div class='desktop_btn_activity_menu' id='desktop_btn_activity_menu'></div>
    </div>
    <div id="demo1" class='flex_none'></div>
<!--demo1-->
```

```
	//demo1
    var desktop_btn_activity_menu = $('#desktop_btn_activity_menu'),
        desktop_btn_activity_back = $('#desktop_btn_activity_back'),
        desktop_activity_balls_con = $('#desktop_activity_balls_con'),
        ballsCon = desktop_activity_balls_con.find('>DIV'),
        balls = desktop_activity_balls_con.find('>DIV>A'),
        ballsText = desktop_activity_balls_con.find('>DIV>SPAN'),
        desktop_con = $('#desktop_con')[0],
        ballsTag = ['message','call','whiteboard','meetings','people','files'];

    var AshBallsEnter = [],
        _delay=0,
        _ballDelay={
            0:2,
            1:1,
            2:0,
            3:3,
            4:2,
            5:1
        };

    for(var _i=0 ;_i<ballsTag.length;_i++){
        _delay = _ballDelay[_i]*4+16;
        AshBallsEnter = AshBallsEnter.concat([{
            tag:ballsTag[_i]+'_ball',
            dom:balls[_i],
            css:[{transform:'scale(0.4)'},{transform:'scale(1)'}],
            time:72,
            delay:_delay,
            tween:'elasticEaseOut'
        },{
            tag:ballsTag[_i]+'_container',
            dom:balls[_i],
            css:[{opacity:0},{opacity:1}],
            time:24,
            delay:_delay,
        },{
            notRender:true,
            dom:ballsText[_i],
            css:[{opacity:0},{opacity:1}],
            time:24,
            delay:_delay,
        },{
            notRender:true,
            dom:balls[_i],
            css:[{opacity:0},{opacity:0}],
            time:1
        },{
            notRender:true,
            dom:ballsText[_i],
            css:[{opacity:0},{opacity:0}],
            time:1
        }]);
    }

	var MenuBtn = function(dom,closeDelay,needRender){
        this.Dom = dom;

        this.init();
    };
    MenuBtn.prototype={
        init:function(){
            var me = this;

            
        },

    };

    var SecondClickTime = 120;


    var ashOpen = AshBallsEnter.concat([{
            notRender:true,
            tag:'button_menu',
            dom:desktop_btn_activity_menu,
            css:[{opacity:0},{opacity:1}],
            time:1
        },{
            notRender:true,
            tag:'button_back',
            dom:desktop_btn_activity_back,
            css:[{opacity:1},{opacity:0}],
            time:1
        },{
            tag:'container_balls',
            dom:desktop_activity_balls_con,
            css:[{right:'-346px'},{right:'0px'}],
            time:20,
            tween:'easeInOut'
        }]);
    var ashClose = [{
            notRender:true,
            tag:'button_menu',
            dom:desktop_btn_activity_menu,
            css:[{opacity:1},{opacity:0}],
            time:1,
            delay:SecondClickTime
        },{
            notRender:true, 
            tag:'button_back',
            dom:desktop_btn_activity_back,
            css:[{opacity:0},{opacity:1}],
            time:1,
            delay:SecondClickTime
        },{
            tag:'container_balls',
            dom:desktop_activity_balls_con,
            css:[{right:'0px'},{right:'-346px'}],
            time:20,
            tween:'easeInOut',
            delay:SecondClickTime
        }];

    var ashArgs = ashOpen.concat(ashClose);

    var ashChartInstance = new AshChart('demo1',ashArgs,{
            canvasWidth:1000,
            IfRow:false,
            actionsCon:desktop_con,
            actions:{
                click:[{
                    delay:0,
                    position:{
                        x:1042,
                        y:19
                    }
                },{
                    delay:SecondClickTime,
                    position:{
                        x:1042,
                        y:19
                    }
                }]
            }
        });
    ashChartInstance.sync({},undefined,true);
    ashChartInstance.start();

	//demo1
```

demo1



