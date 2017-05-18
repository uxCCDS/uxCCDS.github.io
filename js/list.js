(function(){

var List = function(){
	this.Con = $('#article_con');
	this.BtnList = $('#btn_list');
	this.BtnThumbnail = $('#btn_thumbnail');
	this.init();
};
List.prototype={
	init:function(){
		var me = this;
		me.BtnList.bind('click',function(){
			me.switchClass(me.Con[0],'article_con_list');
		});
		me.BtnThumbnail.bind('click',function(){
			me.switchClass(me.Con[0],'article_con_thumbnail');
		});
	},
	switchClass:function(dom,className){
		if(dom.className !== className){
			dom.className = className;
		}
	}
};

//Dom ready
$(function(){
	new List();
});

})();