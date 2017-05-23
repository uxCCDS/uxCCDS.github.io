(function(){
	var DOC,WIN;

	var MapItem = function(dom){
		this.Dom = $(dom);
		this.DomFloat = $('#tf_'+this.Dom .attr('data-tf'));

		this.init();
	};
	MapItem.prototype={
		init:function(){
			var me = this;
			this.Dom.bind('mouseenter',function(){
				me.DomFloat.css('display','');
			});
			this.Dom.bind('mouseleave',function(){
				me.DomFloat.css('display','none');
			});
		}
	};

	var WorldMap = function(){
		this.Dom = $('#svg_map');
		this.Items = $('[data-tf]');
		this.init();
	};
	WorldMap.prototype={
		init:function(){
			var me = this;
			me.resize();
			WIN.bind('resize',function(){
				me.resize();
			});

			me.initItems();
		},
		initItems:function(){
			for(var i=0,l=this.Items.length;i<l;i++){
				new MapItem(this.Items[i]);
			}
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