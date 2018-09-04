Title: Activity Menu Mobile
Desc: Activity Menu Mobile
---

## Open Activity Menu

```
<!--demo1-->
	<div class='mobile_wt_con flex_none' id='mobile_con'>
        <div class='mobile_bg_call'></div>
        <div class="mobile_wt_status_bar mobile_wt_status_bar_absolute"></div>
        <div class='mobile_activity_balls_con' id='mobile_activity_balls_con' style='opacity:0'>
            <div class='mobile_activity_balls_message'><a><i></i></a><span>Message</span></div>
            <div class='mobile_activity_balls_call'><a><i></i></a><span>Call</span></div>
            <div class='mobile_activity_balls_whiteboard'><a><i></i></a><span>Whiteboard</span></div>
            <div class='mobile_activity_balls_meetings'><a><i></i></a><span>Meetings</span></div>
            <div class='mobile_activity_balls_files'><a><i></i></a><span>Files</span></div>
            <div class='mobile_activity_balls_info'><a><i></i></a><span>Info</span></div>
        </div>
        <div class='btn_activity_back' id='btn_activity_back'></div>
        <div class='btn_activity_menu' id='btn_activity_menu'></div>
    </div>
    <div id="demo1" class='flex_none'></div>
<!--demo1-->
```

```
	//demo1
    var btn_activity_menu = $('#btn_activity_menu'),
        btn_activity_back = $('#btn_activity_back'),
        mobile_activity_balls_con = $('#mobile_activity_balls_con'),
        ballsCon = mobile_activity_balls_con.find('>DIV'),
        balls = mobile_activity_balls_con.find('>DIV>A'),
        ballsText = mobile_activity_balls_con.find('>DIV>SPAN'),
        mobile_con = $('#mobile_con')[0],
        ballsTag = ['message','call','whiteboard','meetings','files','info'];

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
        _delay = _ballDelay[_i]*4;
        AshBallsEnter = AshBallsEnter.concat([{
            tag:ballsTag[_i]+'_ball',
            dom:balls[_i],
            css:[{transform:'scale(0.4)'},{transform:'scale(1)'}],
            time:16,
            delay:_delay,
            tween:'easeIn'
        },{
            tag:ballsTag[_i]+'_container',
            dom:balls[_i],
            css:[{opacity:0},{opacity:1}],
            delay:_delay,
            time:4
        },{
            notRender:true,
            dom:balls[_i],
            css:[{opacity:0},{opacity:0}],
            time:1
        }]);
    }

	var MenuBtn = function(dom,closeDelay,needRender){
        this.Dom = dom;
        this.Dot =[];
        this.CloseDelay = closeDelay || 0;
        this.W = 44;
        this.H = 44;
        this.DotR = 2;
        this.DotD = 4;
        this.DotMargin = 4;
        this.Margin = this.DotD+this.DotMargin;

        this.NeedRender = !needRender;

        this.XLen = Math.ceil((this.DotD*3+this.DotMargin*2)*Math.sqrt(2));

        var areaLine = 3*this.DotD+2*this.DotMargin;
        this.X = (this.W-areaLine)/2>>0;
        this.Y = (this.H-areaLine)/2>>0;

        this.init();
    };
    MenuBtn.prototype={
        init:function(){
            var me = this;
            for(var i=0;i<9;i++){
                this.createDot(i);
            }

            this.AshArrayEnter = this.getAshE(1).concat(this.getAshE(3)).concat(this.getAshE(5)).concat(this.getAshE(7)).concat([{
                dom:me.Dom,
                tag:'dot_container',
                notRender:me.NeedRender,
                time:8,
                css:[{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}]
            }]);
            this.AshArrayLeave = this.getAshE(1,true).concat(this.getAshE(3,true)).concat(this.getAshE(5,true)).concat(this.getAshE(7,true)).concat([{
                dom:me.Dom,
                time:8,
                notRender:me.NeedRender,
                tag:'dot_container',
                delay:me.CloseDelay,
                css:[{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}]
            }]);
        },
        getAshE:function(i,ifRerverse){
            var me = this,
                dom = me.Dot[i],
                isOnTop = i===1 || i===7,
                t1=10,
                t2=10,
                ret=[],
                func,
                arr1;

            if(isOnTop){
                arr1=[{top:me.getDotTop(i)+'px',opacity:1},{top:me.getDotTop(4)+'px',opacity:0.4}];
            }else{
                arr1=[{left:me.getDotLeft(i)+'px',opacity:1},{left:me.getDotLeft(4)+'px',opacity:0.4}];
            }

            if(ifRerverse){
                arr1.reverse();
                ret.push({
                    tag:'dot_'+i,
                    notRender:me.NeedRender,
                    dom:dom,
                    css:arr1,
                    time:t1,
                    delay:t2+me.CloseDelay,
                    tween:'cubicEaseOut'
                });
                if(isOnTop){
                    ret.push({
                        notRender:me.NeedRender,
                        tag:'dot_'+i,
                        dom:dom,
                        css:[{width:this.XLen+'px'},{width:this.DotD+'px',transform:'translate(0%,0%) rotate(0deg)',top:me.getDotTop(4)+'px',left:me.getDotLeft(4)+'px'}],
                        time:t2,
                        delay:me.CloseDelay,
                        tween:'cubicEaseOut'
                    });
                }
            }else{
                ret.push({
                    notRender:me.NeedRender,
                    dom:dom,
                    css:arr1,
                    time:t1,
                    tag:'dot_'+i,
                    tween:'cubicEaseOut'
                });
                if(isOnTop){
                    var angle = i===1 ? 45:-45;
                    ret.push({
                        notRender:me.NeedRender,
                        tag:'dot_'+i,
                        dom:dom,
                        css:[{transform:'translate(-50%, -50%) rotate('+angle+'deg)',opacity:1,top:me.getDotTop(4)+this.DotR+'px',left:me.getDotLeft(4)+this.DotR+'px',width:this.DotD+'px'},{width:this.XLen+'px'}],
                        time:t2,
                        delay:t1,
                        tween:'cubicEaseOut'
                    });
                    ret.push({
                        tag:'dot_'+i,
                        notRender:me.NeedRender,
                        dom:dom,
                        css:[{top:me.getDotTop(i)+this.DotR+'px',left:me.getDotLeft(i)+this.DotR+'px'},{top:me.getDotTop(i)+this.DotR+'px',left:me.getDotLeft(i)+this.DotR+'px'}],
                        time:1
                    });
                }
            }
            return ret;
        },
        resetDot:function(i){
            var dom = $(this.Dot[i]);
            dom.css('width','4px').css('transform','translate(0%,0%) rotate(0deg)').css('top',this.getDotTop(i)+'px').css('left',this.getDotLeft(i)+'px').css('opacity',1);
        },
        reset:function(){
            this.Dom.css('transform','rotate(0deg)');
            this.resetDot(1);
            this.resetDot(3);
            this.resetDot(5);
            this.resetDot(7);
        },
        createDot:function(i){
            var domI = document.createElement('I'),
                jDomI = $(domI);
            this.Dom[0].appendChild(domI);
            this.Dot.push(jDomI);
            jDomI.css('top',this.getDotTop(i)+'px').css('left',this.getDotLeft(i)+'px');        
        },
        getDotTop:function(i){
            return this.Y+(i/3>>0)*this.Margin;
        },
        getDotLeft:function(i){
            return this.X+(i%3)*this.Margin;
        }
    };

    var SecondClickTime = 60;
    var MBTN = new MenuBtn(btn_activity_menu,SecondClickTime);

    var ashOpen = MBTN.AshArrayEnter.concat(AshBallsEnter).concat([{
            tag:'button_back',
            dom:btn_activity_back,
            css:[{opacity:1},{opacity:0}],
            time:4
        },{
            tag:'container_balls',
            dom:mobile_activity_balls_con,
            css:[{opacity:0},{opacity:1}],
            time:4
        }]);
    var ashClose = MBTN.AshArrayLeave.concat([{
            tag:'button_back',
            dom:btn_activity_back,
            css:[{opacity:0},{opacity:1}],
            time:4,
            delay:SecondClickTime
        },{
            tag:'container_balls',
            dom:mobile_activity_balls_con,
            css:[{opacity:1},{opacity:0}],
            time:4,
            delay:SecondClickTime
        }]);

    var ashArgs = ashOpen.concat(ashClose);

    var ashChartInstance = new AshChart('demo1',ashArgs,{
            actionsCon:mobile_con,
            actions:{
                click:[{
                    delay:0,
                    position:{
                        x:339,
                        y:30
                    }
                },{
                    delay:SecondClickTime,
                    position:{
                        x:339,
                        y:30
                    }
                }]
            }
        });
    ashChartInstance.sync({},undefined,true);
    ashChartInstance.start();

	//demo1
```

demo1

## Motion for the button

```
<!--demo2-->
    <div class='mobile_wt_con flex_none' style='height:64px;'>
        <div class='mobile_bg_call'></div>
        <div class="mobile_wt_status_bar mobile_wt_status_bar_absolute"></div>
        <div class='btn_activity_back' id='btn_activity_back2'></div>
        <div class='btn_activity_menu' id='btn_activity_menu2'></div>
    </div>
    <div id="demo2" class='flex_none'></div>
<!--demo2-->
```

```
    //demo2
    var btn_activity_menu2 = $('#btn_activity_menu2'),
        btn_activity_back2 = $('#btn_activity_back2');

    var MBTN2 = new MenuBtn(btn_activity_menu2,SecondClickTime,true);

    var _ashExtra = [{
            tag:'button_back',
            dom:btn_activity_back2,
            css:[{opacity:1},{opacity:0}],
            time:4
        },{
            tag:'button_back',
            dom:btn_activity_back2,
            css:[{opacity:0},{opacity:1}],
            time:4,
            delay:SecondClickTime
        }];

    var ashChartInstance2 = new AshChart('demo2',MBTN2.AshArrayEnter.concat(MBTN2.AshArrayLeave).concat(_ashExtra),{});
    ashChartInstance2.sync({},undefined,true);
    ashChartInstance2.start();

    //demo2
```

demo2


## Select Activity Menu

```
<!--demo3-->
    <div class='mobile_wt_con flex_none' id='mobile_con3'>
        <div class='mobile_bg_call'></div>
        <div class="mobile_wt_status_bar mobile_wt_status_bar_absolute"></div>
        <div class='mobile_activity_balls_con' id='mobile_activity_balls_con3'>
            <div class='mobile_activity_balls_message'><a><i></i></a><span>Message</span></div>
            <div class='mobile_activity_balls_call'><a id='mobile_activity_balls_call' style='z-index:9999'><i></i></a><span id='mobile_activity_balls_call_txt'>Call</span></div>
            <div class='mobile_activity_balls_whiteboard'><a><i></i></a><span>Whiteboard</span></div>
            <div class='mobile_activity_balls_meetings'><a><i></i></a><span>Meetings</span></div>
            <div class='mobile_activity_balls_files'><a><i></i></a><span>Files</span></div>
            <div class='mobile_activity_balls_info'><a><i></i></a><span>Info</span></div>
        </div>
        <div class='btn_activity_back' id='btn_activity_back3' style='opacity:0'></div>
        <div class='btn_activity_menu' id='btn_activity_menu3'></div>
        <div class='btn_activity_menu' id='btn_activity_menu3_2' style='opacity:0'></div>
    </div>
    <div id="demo3" class='flex_none'></div>
<!--demo3-->
```

```
    //demo3
    var btn_activity_menu3 = $('#btn_activity_menu3'),
        btn_activity_menu3_2 = $('#btn_activity_menu3_2'),
        btn_activity_back3 = $('#btn_activity_back3'),
        mobile_con3 = $('#mobile_con3'),
        mobile_activity_balls_con3 = $('#mobile_activity_balls_con3');

    var MBTN3 = new MenuBtn(btn_activity_menu3,SecondClickTime,true),
        _ashTemp3 = new Ash.S(MBTN3.AshArrayEnter),
        _ball3 = $('#mobile_activity_balls_call'),
        _ball3Icon = _ball3.find('i'),
        _ball3Txt = $('#mobile_activity_balls_call_txt');

    var MBTN3_2 = new MenuBtn(btn_activity_menu3_2,SecondClickTime,true);
    var BigR = Math.ceil(Math.sqrt(375*375+667*667)),
        _r0 = BigR/2>>0,
        _x0 = 375/2-_r0-136>>0,
        _y0 = 667/2-_r0-234>>0;
    _ashTemp3.state(_ashTemp3.DeadTime);

    var ashArgs3 = [{
        tag:'ball_icon',
        dom:_ball3Icon,
        css:[{opacity:1},{opacity:0}],
        time:10
    },{
        tag:'ball_txt',
        dom:_ball3Txt,
        css:[{opacity:1},{opacity:0}],
        time:10
    },{
        tag:'ball',
        dom:_ball3,
        css:[{'background-color':'rgba(46,213,87,1)'},{'background-color':'rgba(255,255,255,1)'}],
        tween:'rgbaLinear',
        time:20,
    },{
        tag:'ball',
        dom:_ball3,
        css:[{width:'68px',height:'68px',left:'13px'},{width:BigR+'px',height:BigR+'px',left:_x0+'px'}],
        time:20
    },{
        tag:'ball',
        dom:_ball3,
        css:[{top:'0px'},{top:_y0+'px'}],
        tween:'easeOut',
        delay:4,
        time:20
    },{
        tag:'balls_con',
        dom:mobile_activity_balls_con3,
        css:[{opacity:1},{opacity:0}],
        delay:24,
        time:10
    },{
        notRender:true,
        dom:btn_activity_back3,
        css:[{opacity:0},{opacity:1}],
        delay:24,
        time:1
    },{
        notRender:true,
        dom:btn_activity_menu3,
        css:[{opacity:1},{opacity:0}],
        delay:24,
        time:1
    },{
        notRender:true,
        dom:btn_activity_menu3_2,
        css:[{opacity:0},{opacity:1}],
        delay:24,
        time:1
    }];

    var ashChartInstance3 = new AshChart('demo3',ashArgs3,{
            actionsCon:mobile_con3[0],
            actions:{
                click:[{
                    delay:0,
                    position:{
                        x:184,
                        y:264
                    }
                }]
            }
        });
    ashChartInstance3.sync();
    ashChartInstance3.start();

    //demo3
```

demo3

