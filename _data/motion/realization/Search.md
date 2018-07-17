Title: Search
Desc: Search
---

## Search Bar

```
<!--demo1-->
	<div class='search_con flex_none'>
        <a id='search_avatar' class='avatar'></a>
        <input id='search_input' disabled="disabled" type='text' />
        <a id='search_add' class='search_add'></a>
        <span id='search_cancel'>cancel</span>
        <i id='search_magnifier' class='search_magnifier'></i>
	</div>
	<div id="demo1" class='flex_none'></div>
<!--demo1-->
```

```
    /*demo1*/
    .search_con{width:375px; height:56px; position:relative; background:#3F3943;}
    .search_con>a{position: absolute; top: 6px; display: block; height: 44px; line-height: 44px; text-align: center; width: 44px; border-radius: 50%;}
    .search_con .avatar{left:12px;background:url('../../img/motion/Barbara German.png') no-repeat center; background-size:cover;}
    .search_con .search_add{right:12px; background: transparent url('../../img/motion/global_add.svg') no-repeat center;}
    .search_con input{border:none; width: 239px; height: 36px; line-height: 36px; position: absolute; top: 10px; right: 68px; background-color: rgba(255,255,255,0.24); border: none; text-indent: 18px; border-radius: 18px; color: white; text-align: left; user-select:none;outline:none;}
    .search_con .search_magnifier{ display: block; width: 18px; height: 18px; background: url('../../img/motion/h_search.svg') no-repeat center; position: absolute; top: 19px;  left: 178px;}
    .search_con>span{display: block; width: 60px; height: 56px; line-height: 56px; position: absolute; top: 0px; right: 4px; color: white;text-align: center; font-size: 17px; opacity:0;}
    /*demo1*/
```

```
	//demo1
    var search_avatar = document.getElementById('search_avatar'),
        search_input = document.getElementById('search_input'),
        search_add = document.getElementById('search_add'),
        search_cancel = document.getElementById('search_cancel'),
        search_magnifier = document.getElementById('search_magnifier');

    var ashArgs = [{
            tag:'avatar',
            dom:search_avatar,
            css:[{opacity:1},{opacity:0}],
            time:10
        },{
            tag:'input',
            dom:search_input,
            css:[{'width':'239px'},{'width':'295px'}],
            time:10
        },{
            tag:'magnifier',
            dom:search_magnifier,
            css:[{left:'178px'},{left:'21px'}],
            time:10,
            tween:"easeInOut" 
        },{
            tag:'icon_more',
            dom:search_add,
            css:[{'opacity':1},{'opacity':0}],
            time:10,
            tween:"easeInOut"
        },{
            tag:'btn_cancel',
            dom:search_cancel,
            css:[{opacity:0},{opacity:1}],
            time:10,
            tween:"easeInOut"    
        },{
            notRender:true,
            tag:'avatar',
            dom:search_avatar,
            css:[{opacity:1},{opacity:1}],
            time:20,
            delay:40
        },{
            notRender:true,
            tag:'input',
            dom:search_input,
            css:[{'width':'239px'},{'width':'239px'}],
            time:20,
            delay:40
        },{
            notRender:true,
            tag:'magnifier',
            dom:search_magnifier,
            css:[{left:'178px'},{left:'178px'}],
            time:20,
            delay:40
        },{
            notRender:true,
            tag:'icon_more',
            dom:search_add,
            css:[{'opacity':1},{'opacity':1}],
            time:20,
            delay:40
        },{
            notRender:true,
            tag:'btn_cancel',
            dom:search_cancel,
            css:[{opacity:0},{opacity:0}],
            time:20,
            delay:40  
        }];

    var ashSearchInstance = new AshChart('demo1',ashArgs,{});
    ashSearchInstance.sync();
    ashSearchInstance.start();
	//demo1
```

demo1

