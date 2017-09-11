(function(){

var APrototype = function() {
	var initPdot = function() {
		var dots = $('[data-pDot]'),
			i=0,l=dots.length,
			arr=[],
			delay,
			t= 20;

		for(;i<l;i++){
			delay = i*t;
			arr.push({
				dom:dots[i],
				attr:[{'fill':'rgb(255,255,255)'},{'fill':'rgb(22,198,204)'}],
				time:t,
				delay:delay,
				tween:'easeInOutInt'
			});
			arr.push({
				dom:dots[i],
				attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(255,255,255)'}],
				time:t,
				delay:delay+t,
				tween:'easeInOutInt'
			});
		}
		return new Ash.S(arr);
	};

	new BannerAnimation($('#sectionBlock_prototype'),function() {
		var Ashes=[];
		var tWheel = 300;
		Ashes.push(new Ash.S([{
			dom:$('#wheel'),
			attr:[{'transform':'translate(40,32) rotate(0,35,35)'},{'transform':'translate(40,32) rotate(360,35,35)'}],
			time:tWheel
		},{
			dom:$('#wheel2'),
			attr:[{'transform':'translate(91,0) rotate(0,24,24)'},{'transform':'translate(91,0) rotate(360,24,24)'}],
			time:tWheel
		},{
			dom:$('#wheel3'),
			attr:[{'transform':'translate(128,41) rotate(0,15,15)'},{'transform':'translate(128,41) rotate(360,15,15)'}],
			time:tWheel
		}]));

		var eye = $('#eye'),
			tEye = 30;
		Ashes.push(new Ash.S([{
			dom:eye,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(241,84,36)'}],
			time:tEye,
			tween:'easeInOutInt'
		},{
			dom:eye,
			attr:[{'fill':'rgb(241,84,36)'},{'fill':'rgb(22,198,204)'}],
			delay:tEye,
			time:tEye,
			tween:'easeInOutInt'
		}]));

		Ashes.push(initPdot());

		return Ashes;
	});	
};

var AResearch = function() {
	new BannerAnimation($('#sectionBlock_research'),function() {
		var Ashes=[];
		var point = $('#svgPoint'),
			t1 = 100,
			t2= 40;
		Ashes.push(new Ash.S([{
			dom:point,
			attr:[{'transform':'translate(425.535156, 93.144531) scale(-1, 1) rotate(-270.000000) translate(-425.535156, -93.144531) translate(378.535156, 25.644531)'},{'transform':'translate(441.535156, 93.144531) scale(-1, 1) rotate(-270.000000) translate(-425.535156, -93.144531) translate(378.535156, 25.644531)'}],
			time:t1,
			tween:'bounceEaseIn'
		},{
			dom:point,
			attr:[{'transform':'translate(441.535156, 93.144531) scale(-1, 1) rotate(-270.000000) translate(-425.535156, -93.144531) translate(378.535156, 25.644531)'},{'transform':'translate(425.535156, 93.144531) scale(-1, 1) rotate(-270.000000) translate(-425.535156, -93.144531) translate(378.535156, 25.644531)'}],
			time:t1,
			delay:t1
		}]));

		var svgMicroscope = $('#svgMicroscope');
		Ashes.push(new Ash.S([{
			dom:svgMicroscope,
			attr:[{'transform':'rotate(0,120,63)'},{'transform':'rotate(30,120,63)'}],
			time:t2
		},{
			dom:svgMicroscope,
			attr:[{'transform':'rotate(30,120,63)'},{'transform':'rotate(0,120,63)'}],
			time:t2,
			delay:t2
		}]));

		return Ashes;
	});
};


var ATeam = function() {
	new BannerAnimation($('#sectionBlock_team'),function() {
		var Ashes=[];
		var svgBrain = $('#svgBrain'),
			t1 = 80,
			t2= 16;
		Ashes.push(new Ash.S([{
			dom:svgBrain,
			attr:[{'fill':'rgb(240,84,36)'},{'fill':'rgb(22,198,204)'}],
			time:t1,
			tween:'easeInOutInt'
		},{
			dom:svgBrain,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(255,216,92)'}],
			time:t1,
			tween:'easeInOutInt'
		},{
			dom:svgBrain,
			attr:[{'fill':'rgb(255,216,92)'},{'fill':'rgb(240,84,36)'}],
			delay:t1,
			time:t1,
			tween:'easeInOutInt'
		}]));

		var svgLight = $('[data-light]');
		Ashes.push(new Ash.S([{
			dom:svgLight,
			attr:[{'fill':'rgb(255,255,255)'},{'fill':'rgb(255,216,92)'}],
			time:t2,
			tween:'easeInOutInt'
		},{
			dom:svgLight,
			attr:[{'fill':'rgb(255,216,92)'},{'fill':'rgb(255,255,255)'}],
			delay:t2,
			time:t2,
			tween:'easeInOutInt'
		}]));

		return Ashes;
	});
};


$(function(){
	new APrototype();	
	new AResearch();
	new ATeam();
});

})();