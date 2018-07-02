/* require ash.js */
(function(){
    var extend=function(target,source){
        var args=[].slice.call(arguments),
            i=1,
            key,
            ride= typeof args[args.length-1] == 'boolean' ? args.pop() : true;
        if(args.length==1){
            target = !this.window ? this: {};
            i=0;
        }
        while((source=args[i++])){
            for(key in source){
                if(ride || !(key in target)){
                    target[key] =source[key];
                }
            }
        }
        return target;
    };

	var DefaultColors = ['rgba(33,150,243,1)','rgba(13,71,161,1)',
	'rgba(233,30,99,1)','rgba(136,14,79,1)',
	'rgba(103,58,183,1)','rgba(49,27,146,1)',
	'rgba(244,67,54,1)','rgba(0,96,100,1)',
	'rgba(0,188,212,1)','rgba(13,71,161,1)',
	'rgba(205,220,57,1)','rgba(130,119,23,1)',
	'rgba(255,193,7,1)','rgba(255,111,0,1)',
	'rgba(121,85,72,1)','rgba(62,39,35,1)',
	'rgba(96,125,139,1)','rgba(38,50,56,1)'];

	var regNum=/(-?\d+)(\.\d+)?/g;

	var ChartMotion = function(){

	};
	ChartMotion.prototype ={

	};
	/*
		settings ={
			maxWidth:800,
			lineH:4,
			lineGap:10,
			fontSizeLine:13,
			fontSizeChart:15,
			colorList:[]
		}
	*/
	var AshChart = function(id,ashArr,settings){
		this.Id = id;
		this.AshArr = ashArr;
		this.Settings = extend({
			canvasWidth:800,
			contentPadding:[60,30,60,30],
			chartPadding:[14,14,14,14],
			lineWidth:2,
			lineGap:50,
			fontLine:13,
			fontTitle:15,
			fontGap:4,
			colors:[],
			xIndexUnitNum:4,
			bgFillStyle:'#9B9B9B',
			IfToMS:false
		},settings,true);

		this.Data={
			El:{},
			HeadTags:{}
		};
		this.Con = document.getElementById(id);
		this.Con.style.minWidth = this.Settings.canvasWidth+'px';
		this.Con.style.marginTop = '40px';
		this.CanvasCon = document.createElement('DIV');
		this.CanvasCon.className = 'ash_chart_con';

		this.Canvas = document.createElement('CANVAS');
		this.Canvas.className = 'motionCanvas';
		this.Ctx = this.Canvas.getContext('2d');
		this.BgCanvas = document.createElement('CANVAS');
		this.BgCtx = this.Canvas.getContext('2d');

		this.Canvas.width = this.BgCanvas.width = this.Settings.canvasWidth;
		this.Canvas.style.width = this.BgCanvas.style.width = this.Settings.canvasWidth+'px';

		this.TagCon = document.createElement('DIV');
		this.TagCon.className = 'ash_chart_tag_con';
		this.Con.appendChild(this.TagCon);
		this.Con.appendChild(this.CanvasCon);
		this.CanvasCon.appendChild(this.Canvas);
		this.CanvasCon.appendChild(this.BgCanvas);
	
		this.init();
	};
	AshChart.prototype={
		init:function(){
			this._prepare(this.AshArr);

			var settings = this.Settings,
				canvasHeight = settings.contentPadding[3]+this.Data.TimelineX.y+this._getFontSize('1',settings.fontTitle).h;
			this.Canvas.height =  this.BgCanvas.height = canvasHeight;
			this.Canvas.style.height = this.BgCanvas.style.height = canvasHeight+'px';

			this.generateTitle();
			this.generateBg();
		},
		static:function(){

		},
		sync:function(){

		},
		start:function(){

		},
		stop:function(){

		},
		generateTitle:function() {
			// body...
			var tags = this.Data.HeadTags,
				fontSize = this.Settings.fontTitle,
				li;
			for(var name in tags){
				li = document.createElement('A');
				li.style.color = tags[name].color;
				li.style.fontSize = fontSize;
				li.innerHTML=['<i style=\'background-color:',tags[name].color,'\'></i>',name].join('');
				this.TagCon.appendChild(li);
			}
		},
		generateBg:function() {
			var ctx = this.BgCtx,
				data = this.Data,
				settings = this.Settings,
				unit = data.Unit,
				tags = data.HeadTags,
				el = data.El;
			ctx.beginPath();
			//ctx.lineCap="round";
			ctx.textBaseline="top";
			ctx.fillStyle =  settings.bgFillStyle;
			ctx.font = settings.fontTitle + "px Arial";
			ctx.textAlign="left";
			ctx.fillText("Property",data.TimelineYTitle.x,data.TimelineYTitle.y);
			ctx.fillText((settings.IfToMS ? 'Timeline / frame':'Timeline / ms'),data.TimelineXTitle.x,data.TimelineXTitle.y);
			ctx.textAlign="center";
			for(var _name in unit){
				ctx.fillText(_name,unit[_name].x,unit[_name].y);
			}
			ctx.strokeStyle=settings.bgFillStyle;
			ctx.lineWidth = settings.lineWidth;
			ctx.moveTo(data.TimelineX.x,data.TimelineX.y);
			ctx.lineTo(data.TimelineX.x+data.TimelineX.l,data.TimelineX.y);
			ctx.moveTo(data.TimelineY.x,data.TimelineY.y);
			ctx.lineTo(data.TimelineY.x,data.TimelineY.y+data.TimelineY.l);
			ctx.stroke();
			ctx.closePath();

			//x title
			var _eName,
				_pName,
				_pProperty,
				_pPropertyArrObj,
				_x0= data.TimelineX.x,
				_txtHeight = this._getFontSize('1', settings.fontLine).h;

			for(_eName in el){
				ctx.beginPath();
				ctx.strokeStyle = tags[_eName].color;
				ctx.fillStyle =tags[_eName].color;
				ctx.font = settings.fontLine + "px Arial";
				for(_pName in el[_eName]){
					_pProperty = el[_eName][_pName];
					ctx.textAlign="right";
					ctx.fillText(_pName, _x0-settings.chartPadding[3],_pProperty.y-(_txtHeight/2>>0));
					for(var _i in _pProperty.arr){
						_pPropertyArrObj = _pProperty.arr[_i];
						//drawline
						if(_pPropertyArrObj.rawData0!==undefined && _pPropertyArrObj.rawData1!==undefined){
							this._drawLine(ctx,_pPropertyArrObj,_pProperty.y,_txtHeight,settings.fontGap);
						//draw dot
						}else if(_pPropertyArrObj.rawData0!==undefined){
							this._drawDot(ctx,_pPropertyArrObj.rawData0,_pPropertyArrObj.x,_pProperty.y,_txtHeight,settings.fontGap);
						//draw dot
						}else{
							this._drawDot(ctx,_pPropertyArrObj.rawData1,_pPropertyArrObj.x+_pPropertyArrObj.w,_pProperty.y,_txtHeight,settings.fontGap);
						}
					}
				}
				ctx.closePath();
				//for(var )
			}

		},
		_drawDot:function(ctx,rawData,x,y,txtHeight,txtGap) {
			ctx.textAlign="center";
			ctx.fillText(rawData,x,y- txtHeight);
			ctx.moveTo(x,y);
			ctx.lineTo(x+this.Settings.lineWidth,y);
			ctx.stroke();
		},
		_drawLine:function(ctx,obj,y,txtHeight,txtGap){
			var middleX = obj.x+obj.w/2>>0,
				bottomY = y + txtGap;
			ctx.textAlign="left";
			ctx.fillText(obj.rawData0,obj.x+txtGap,y - txtHeight -txtGap);
			ctx.textAlign="center";
			ctx.fillText(obj.tween,middleX,bottomY);
			ctx.textAlign="right";
			ctx.fillText(obj.rawData1,obj.x+obj.w-txtGap,y - txtHeight);
			ctx.moveTo(obj.x,y);
			ctx.lineTo(obj.x+obj.w,y);
			ctx.stroke();
		},
		generateFront:function(second,opacity) {
			// body...
		},
		_getPropertyInfo:function(css,attr,prop) {
			var longestWording= css.longestWording.length > attr.longestWording.length ? css.longestWording : attr.longestWording;
			if(prop.longestWording.length>longestWording){
				longestWording = prop.longestWording;
			}
			return {
				count:css.count+attr.count+prop.count,
				longestWording:longestWording
			}
		},
		//css[{},{}], {css:..dom:...} ,this.Data.El[_p.tag]
		_getPCount:function(css,op,el){
			var count =0,
				longestWording='',
				name;//height width...
			if(css && css.length>1){
				for(name in css[0]){
					if(el[name]===undefined){
						el[name]={
							arr:[]
						};
						if(name.length>longestWording.length){
							longestWording = name;
						}
						count++;
					}
					//el[name]._arr.push([css[0][name]]);
					el[name].arr.push({
						rawData0:css[0][name],
						delay:op.TagDelay,
						time: css[1][name]===undefined ? 0: op.TagTime,
						tween:op.tween
					});
				}
				for(name in css[1]){
					if(el[name]===undefined){
						el[name]={
							arr:[]
						};
						if(name.length>longestWording.length){
							longestWording = name;
						}
						count++;
					}
					if(css[0][name]===undefined){
						el[name].arr.push({
							rawData1:[css[1][name]],
							delay:op.TagDelay+op.TagTime,
							time:0,
							tween:op.tween
						});
					}else{
						el[name].arr[el[name].arr.length-1].rawData1 = css[1][name];
					}
				}
			}
			return {
				count:count,
				longestWording:longestWording
			};
		},
		_getFontSize:function(str,size) {
			this.Ctx.font = size + "px Arial";
			return {
				w:Math.ceil(this.Ctx.measureText(str).width),
				h:size*1.5>>0
			};
		},
		_prepare:function(arr){
			var deadTime = 0,
				count = 0,
				tempP,
				longestWording='',
				_p;
			for(var n in arr){
				_p = arr[n];
				if(this.Data.El[_p.tag]===undefined){
					this.Data.El[_p.tag]={};
				}	
				_p.TagDelay = _p.delay = _p.delay || 0;
				_p.TagTime = _p.time;
				_p.tween = _p.tween || 'linear';
				deadTime = Math.max(_p.delay+_p.time);
				tempP = this._getPropertyInfo(this._getPCount(_p.css,_p,this.Data.El[_p.tag]),this._getPCount(_p.attr,_p,this.Data.El[_p.tag]),this._getPCount(_p.prop,_p,this.Data.El[_p.tag]));
				count = count + tempP.count;
				if(tempP.longestWording.length>longestWording.length){
					longestWording = tempP.longestWording;
				}
			}
			this.ECount = arr.length || 0;
			this.TagDeadTime = this.DeadTime = deadTime;
			this.PLongestWording = longestWording;
			this.PCount = count;

			this._prepareColor();
			this._prepareTimeline(arr);
			this._preparePosition();
		},
		_prepareColor:function(){
			if(this.Settings && this.Settings.colors && this.Settings.colors.length>=this.ECount){
				this.Colors = this.Settings.colors;
			}else if(DefaultColors.length>= this.ECount){
				this.Colors = DefaultColors;
			}else{//>3
				var step = 750/this.ECount/2 >>0;
				this.Colors=[];
				for(var i=0;i<this.ECount;i++){
					this.Colors.push(['rgba(',5+((i+2)/3>>0)*step,',',5+((i+1)/3>>0)*step,',',5+(i/3>>0)*step,',1)'].join(''));
				}
			}
		},
		_prepareTimeline:function(arr){
			if(this.Settings.IfToMS){
				var _p;
				for(var n in arr){
					_p = arr[n];
					_p.TagDelay = Math.round(_p.delay * 16.7/10)*10;
					_p.TagTime = Math.round(_p.time * 16.7/10)*10;
				}
				this.TagDeadTime = Math.round(this.DeadTime * 16.7/10)*10;
			}
		},
		_sortProperty:function(a,b){
			if(a.time<b.time) return -1;
			else if(a.time>b.time) return 1;
			else return 0;
		},
		_preparePosition:function() {
			var settings = this.Settings,
				fontTitleH = this._getFontSize('1',settings.fontTitle).h,
				fontLineH = this._getFontSize('1',settings.fontLine).h,
				xIndexTitleW = settings.IfToMS ? this._getFontSize('Timeline / ms',settings.fontTitle).w : this._getFontSize('Timeline / frame',settings.fontTitle).w,
				maxPwordingLen = Math.max(this._getFontSize('Property',settings.fontTitle).w,this._getFontSize(this.PLongestWording,settings.fontLine).w),
				xIndexLen = settings.canvasWidth-settings.chartPadding[1]-settings.chartPadding[3]-settings.contentPadding[1]-settings.contentPadding[3]-xIndexTitleW-maxPwordingLen;
			/*
			var unitLen = (xIndexLen-20)/this.TagDeadTime;
			this.UnitLen = unitLen;
			*/

			// body...
			this.Data.TimelineY={
				x:settings.contentPadding[3]+ maxPwordingLen +settings.chartPadding[3],
				y:settings.contentPadding[0]+ fontTitleH +settings.chartPadding[0],
				l:this.PCount*(settings.lineGap+settings.lineWidth)+settings.lineGap+settings.lineWidth
			};
			this.Data.TimelineX={
				x:settings.contentPadding[3]+ maxPwordingLen +settings.chartPadding[3],
				y:this.Data.TimelineY.y+this.Data.TimelineY.l,
				l:xIndexLen
			};
			this.Data.TimelineYTitle = {
				x:settings.contentPadding[3],
				y:settings.contentPadding[0]
			};
			this.Data.TimelineXTitle = {
				x:this.Data.TimelineX.x+this.Data.TimelineX.l+settings.chartPadding[1],
				y:this.Data.TimelineX.y+settings.chartPadding[2]
			};
/*
EL:{
	hander:{
		height{
			arr:[{
				rawData:[css[1][name]],
				delay:op.TagDelay,
				time:0,
				tween:op.tween,
				x,
				w
			}],
			y:3
		},
		width:{
			arr:[{x:0,w:10}],
		}
	}
}
*/
			var el = this.Data.El,
				tags = this.Data.HeadTags,
				pEl,
				_yi=0,
				_ei=0,
				_ecolor,
				_x0 = this.Data.TimelineX.x,
				_y0 = this.Data.TimelineX.y,
				_yStep = settings.lineGap+settings.lineWidth,
				_eName,
				_pName,
				_pProperty,
				_pPropertyArrObj,
				_i,_l;

			var maxUnitRate = settings.IfToMS ? 100 : 10,
				maxUnit = (this.TagDeadTime/maxUnitRate>>0)*maxUnitRate,
				xIndexUnitNum = Math.min(settings.xIndexUnitNum,Math.ceil(maxUnit/maxUnitRate)),
				xUnit = maxUnit/xIndexUnitNum>>0,
				xUnitStep = (this.Data.TimelineX.l - 20)/ xIndexUnitNum >>0,
				y0Tag=_y0+settings.chartPadding[2],
				unitLen = xUnitStep/xUnit;

			//generate unit
			this.Data.Unit={
				0:{
					x:_x0,
					y:y0Tag
				}
			};
			for(var ui=1;ui<=xIndexUnitNum;ui++){
				this.Data.Unit[ui*xUnit]={
					x:_x0+ui*xUnitStep,
					y:y0Tag
				}
			}

			for(_eName in el){
				pEl = el[_eName];//--->element point
				_ecolor = this.Colors[_ei];
				tags[_eName]={color:_ecolor};
				for(_pName in pEl){ 
					_pProperty = pEl[_pName]// property point
					//->
					_pProperty.y = _y0-_yStep*(_yi+1);
					_yi++;
					_i=0;
					_l=_pProperty.arr.length;
					//sort
					_pProperty.arr.sort(this._sortProperty);
					for(;_i<_l;_i++){
						_pPropertyArrObj=_pProperty.arr[_i];
						_pPropertyArrObj.x = _x0+_pPropertyArrObj.delay * unitLen >>0;
						_pPropertyArrObj.w = _pPropertyArrObj.time * unitLen >>0;
					}
				}
				_ei++;
			}

			
			
		}
	};

	window.AshChart = AshChart;

})();