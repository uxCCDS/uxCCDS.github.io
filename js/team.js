(function(){
	var DOC,WIN;

	var WorldMap = function(){
		this.Dom = $('#svg_map');
	
		this.init();
	};
	WorldMap.prototype={
		init:function(){
			var me = this;
			me.resize();
			WIN.bind('resize',function(){
				me.resize();
			});
		},
		resize:function(){
			var w = this.Dom.width(),
				h = 650 / 1008 * w >>0;
			this.Dom.css('height',h+'px');
		}
	};

	$(function(){
		DOC = $(document);
		WIN = $(window);

		new WorldMap();
	});

})();