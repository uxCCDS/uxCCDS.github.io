(function(){
var WIN;

var Banner = function(dom){
	this.Dom = $(dom);
	this.Con = $(dom.parentNode);

	this.BigSignal = 600;
	this.SmallSignal = 350;

	this.init();
};
Banner.prototype = {
	init:function(){
		var me=this,
			viewbox = this.Dom[0].viewBox.baseVal,
			vw = viewbox.width,
			vh = viewbox.height;

		this.IsBig = vw >700;

		this.wh = vw/vh;

		WIN.bind('resize',function(){
			me.resize();
		});
		me.resize();
	},
	resize:function(){
		var cw = this.Con.width(),
			ch = this.Con.height(),
			w,h,l,t;
		if((cw<this.BigSignal && this.IsBig) || cw < this.SmallSignal){
			this.resizeCover(cw,ch);
		}else{
			this.resizeContain(cw,ch);
		}

	},
	resizeContain:function(cw,ch){
		if(cw/ch>this.wh){
			h = ch;
			w = h*this.wh>>0;
		}else{
			w = cw;
			h = w/this.wh>>0;
		}
		l = (cw-w)/2>>0;
		t = (ch-h)/2>>0;
		this.Dom.css('width',w+'px').css('height',h+'px').css('left',l+'px').css('top',t+'px');
	},
	resizeCover:function(cw,ch){
		if(cw/ch>this.wh){
			w = cw-40;
			h = w/this.wh>>0;
		}else{
			h = ch-30;
			w = h*this.wh>>0;
		}
		l = this.IsBig ? cw * 0.05 >>0 : (cw-w)/2>>0;
		t = (ch-h)/2>>0;
		this.Dom.css('width',w+'px').css('height',h+'px').css('left',l+'px').css('top',t+'px');
	}
};

var BannerAnimation = function(con,initAsh){
	this.Con = con;
	this.Ashes = initAsh();
	this.init();
};
BannerAnimation.prototype={
	init:function(){
		var me=this;
		this.Con.bind('mouseenter',function(){
			me.play();
		});
		this.Con.bind('mouseleave',function(){
			me.pause();
		});
	},
	play:function(){
		var func;
		if(this.HasStart){
			func = 'continue';
		}else{
			this.HasStart = true;
			func = 'repeat';
		}
		for(var i=0,l=this.Ashes.length;i<l;i++){
			this.Ashes[i][func](Infinity);
		}
	},
	pause:function(){
		for(var i=0,l=this.Ashes.length;i<l;i++){
			this.Ashes[i].stop();
		}
	}
};

window.BannerAnimation = BannerAnimation;


$(function(){
	WIN = $(window);

	var svgs = document.querySelectorAll('[data-svg]');
	for(var i=0,l=svgs.length;i<l;i++){
		new Banner(svgs[i]);
	}
});

})();