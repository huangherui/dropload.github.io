//	取消搜索栏内容

(function(){

	var del = document.querySelector(".delete-search");
	var input = document.querySelector(".search-input");

	del.addEventListener("touchstart",function(){
		input.value = '';
	})

}());


/* 商品列表的无限加载 */

(function(){

	var content = $(".content");
	var winh = $(window).height();
	var ul = $("#like-ul");

	/*
	 * describe: 创建加载的文档碎片，并且插入到content
	 * arguments : content , 要插入到的容器
	 * return ：返回插入的div jq对象
	*/

	function appendLoading(content){

		var html = "";
		var wrap;

		html += '<div class="loading">';
		html += '<img src="img/icon_loading.png">';
		html += '<span>正在加载</span>';
		html += '</div>';
		
		wrap = $(html)

		$(content).append(wrap);

		return wrap;
	}

	var loading = appendLoading(content)[0];
	var loadTop = 0;
	var isFinish = false;

	$(window).on("scroll",function(){

		//获取新添加的div到屏幕顶部的高度
		loadTop = loading.getBoundingClientRect().top;


		if(loadTop < winh && !isFinish){
			ajaxLoad();
			isFinish = true;
		}
	})
	
	function ajaxLoad(){
		$.ajax({
		  type: "GET",
		  url: "goods.json",
		  //data: { name: "John", location: "Boston"}
		}).done(function( obj ) {
		  
			var html = "";

			for(var key in obj){
				html += '<li><a href="#"><img src=" '+ obj[key]["img"] +' "><p>'+ obj[key]["describe"] +'</p><span><i>￥</i>'+ obj[key]["price"] +'</span><s>￥'+ obj[key]["s"] +'</s></a></li>';
			}

			// setTimeout为了测试作用，真正开发不需要
			setTimeout(function(){
				ul.append(html)
				isFinish = false;
			},500);
		});
	}
	
}());


// 价格的显示隐藏
!function(){

	$(".price").on("touchstart",function(){
		$(".price-layer").toggle();
	});

	$(".to-top").on("touchstart",function(){
		 $('body,html').animate({ scrollTop: 0 }, 500); 
	})

}();


!function(){

	var select = $(".select");
	var aside = $(".side");
	var body = $("body");
	var enter = $(".enter");

	select.on("touchstart",function(){
		aside.css({
			left : 0
		});
		body.toggleClass("overflow");
	});

	//隐藏side
	function sideHidden(){
		body.toggleClass("overflow");
		aside.css({
			left : "100%"
		});
	}

	var curX;
	var tarX;
	var sidew = $(".side").width();
	var smain = $(".side-main").width();
	var figure = sidew - smain;
	
	aside.on("touchstart",function(e){

		// 获取第一个手指的事件对象changedTouches[0]
		// 获取第一个手指的x轴
		//console.log(e.changedTouches[0])

		curX = e.changedTouches[0].pageX;

		//绑定的触摸移动时间
		aside.on("touchmove",function(e){
			tarX = e.changedTouches[0].pageX;

			//判断x轴移动超过了30像素
			if(tarX - curX > 30){
				sideHidden();
			}
		});

		//点击半透明筛选层消失
		if(figure > curX){
			sideHidden();
		}
	});
}();