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
		me.initClass();
	},
	switchClass:function(dom,className){
		if(dom.className !== className){
			dom.className = className;
			this.localData('listView',className);
		}
	},
	initClass:function(){
		var _val = this.localData('listView');
		if(_val){
			this.switchClass(this.Con[0],_val);
		}
	},
	localData:function(key,value){
		if(localStorage && localStorage.setItem){
			if(value!==undefined){
				return localStorage.setItem(key,value);
			}else{
				return localStorage.getItem(key);
			}
		}
		return none;
	}
};

//Dom ready
$(function(){
	new List();
});

})();