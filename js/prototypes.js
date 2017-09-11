(function(){
var AExperimental = function() {
	new BannerAnimation($('#con_experimental'),function() {
		var Ashes=[];
		var svgEye = $('#svgEye'),
			t1 = 80;
		Ashes.push(new Ash.S([{
			dom:svgEye,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(241,84,36)'}],
			time:t1,
			tween:'easeInOutInt'
		},{
			dom:svgEye,
			attr:[{'fill':'rgb(241,84,36)'},{'fill':'rgb(22,198,204)'}],
			delay:t1,
			time:t1,
			tween:'easeInOutInt'
		}]));

		return Ashes;
	});
};

var ACurrent = function() {
	new BannerAnimation($('#con_current'),function() {
		var Ashes=[];
		var editBg = $('#editBg'),
			svgr = $('[data-svgr]'),
			svgl = $('[data-svgl]');
			t1 = 80,
			t2 = 80;
		Ashes.push(new Ash.S([{
			dom:editBg,
			attr:[{'fill':'rgb(36,45,60)'},{'fill':'rgb(0,0,0)'}],
			time:t1,
			tween:'easeInOutInt'
		},{
			dom:editBg,
			attr:[{'fill':'rgb(0,0,0)'},{'fill':'rgb(36,45,60)'}],
			delay:t1,
			time:t1,
			tween:'easeInOutInt'
		}]));

		Ashes.push(new Ash.S([{
			dom:svgr,
			css:[{transform: 'translate(0px)'},{transform: 'translate(20px)'}],
			time:t2
		},{
			dom:svgr,
			css:[{transform: 'translate(20px)'},{transform: 'translate(-20px)'}],
			delay:t2,
			time:t2*2
		},{
			dom:svgr,
			css:[{transform: 'translate(-20px)'},{transform: 'translate(0px)'}],
			delay:t2*3,
			time:t2
		}]));

		Ashes.push(new Ash.S([{
			dom:svgl,
			css:[{transform: 'translate(0px)'},{transform: 'translate(-20px)'}],
			time:t2
		},{
			dom:svgl,
			css:[{transform: 'translate(-20px)'},{transform: 'translate(20px)'}],
			delay:t2,
			time:t2*2
		},{
			dom:svgl,
			css:[{transform: 'translate(20px)'},{transform: 'translate(0px)'}],
			delay:t2*3,
			time:t2
		}]));

		return Ashes;
	});
};

var AAchiving = function() {
	new BannerAnimation($('#con_archiving'),function() {
		var Ashes=[];
		var svgST = $('#svgST'),
			t1 = 80;
		Ashes.push(new Ash.S([{
			dom:svgST,
			attr:[{'fill':'rgb(240,84,36)'},{'fill':'rgb(22,198,204)'}],
			time:t1,
			tween:'easeInOutInt'
		},{
			dom:svgST,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(240,84,36)'}],
			delay:t1,
			time:t1,
			tween:'easeInOutInt'
		}]));

		var lines = $('[data-line]'),
			t2= 50;

		Ashes.push(new Ash.S([{
			dom:lines,
			attr:[{'fill':'rgb(71,79,89)'},{'fill':'rgb(22,198,204)'}],
			time:t2,
			tween:'easeInOutInt'
		},{
			dom:lines,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(71,79,89)'}],
			delay:t2,
			time:t2,
			tween:'easeInOutInt'
		}]));

		return Ashes;
	});
};

var AFaq = function() {
	new BannerAnimation($('#con_faq'),function() {
		var Ashes=[];
		var svgST = $('#svg_faq_bar1'),
			svg_faq_bg1 = $('#svg_faq_bg1')
			t1 = 80,
			t2 = 40;
		Ashes.push(new Ash.S([{
			dom:svgST,
			attr:[{'fill':'rgb(255,109,59)'},{'fill':'rgb(22,198,204)'}],
			time:t1,
			tween:'easeInOutInt'
		},{
			dom:svgST,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(255,109,59)'}],
			delay:t1,
			time:t1,
			tween:'easeInOutInt'
		}]));

		Ashes.push(new Ash.S([{
			dom:svg_faq_bg1,
			attr:[{'fill':'rgb(242,242,242)'},{'fill':'rgb(255,109,59)'}],
			time:t2,
			tween:'easeInOutInt'
		},{
			dom:svg_faq_bg1,
			attr:[{'fill':'rgb(255,109,59)'},{'fill':'rgb(255,187,51)'}],
			delay:t2,
			time:t2,
			tween:'easeInOutInt'
		},{
			dom:svg_faq_bg1,
			attr:[{'fill':'rgb(255,187,51)'},{'fill':'rgb(22,198,204)'}],
			delay:t2*2,
			time:t2,
			tween:'easeInOutInt'
		},{
			dom:svg_faq_bg1,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(242,242,242)'}],
			delay:t2*3,
			time:t2,
			tween:'easeInOutInt'
		}]));

		return Ashes;
	});
};

$(function(){
	new ACurrent();
	new AExperimental();
	new AAchiving();
	new AFaq();
});

})();