(function(){

	var username = document.getElementsByName("username")[0];
	var password = document.getElementsByName("password")[0];
	var vcode = document.getElementsByName("vcode")[0];
	var submit = document.getElementsByClassName("submit")[0];

	 username.addEventListener("change",function(){
		hasValue();
	});

	 password.addEventListener("change",function(){
		hasValue();
	});

	 vcode.addEventListener("change",function(){
	 	hasValue();
	 });

	 // 判断用户名和密码
	 submit.addEventListener("touchstart",function(e){
	 	if(!user() || !psw()){
	 		e.preventDefault();
	 	}
	 });


	// 用户名验证
	function user(){

		var val = username.value;

		// 邮箱正则
		var reg = /^[\w]+@.+\.[a-zA-Z]+/;

		// 手机正则
		var regPhone = /1[3-9]{10}/;

		if(reg.test(val) || regPhone.test(val)){
			return true;
		}
		return false;
	}
		function psw(){

			var val = password.value;

				// 密码正则
				var reg = /^[\w_\-@\#\$]{8,16}/;

				if(reg.test(val)){
					return true;
				}
				return false;
		}
}());

// 判断用户名和密码,验证码是否有字符，添加class "active"
	function hasValue(){
		if(username.value.trim() && password.value.trim() && vcode.value.trim()){
			submit.classList.add("active");
		}
	}

	// 控制密码password的显示隐藏
	(function(){

		var password = document.getElementsByName("password")[0];
		var ctrl = document.getElementsByClassName("psw-ctrl")[0];
		var span = ctrl.getElementsByTagName("span")[0];
		var off = false;

		ctrl.addEventListener("touchstart",function(){

			off = off ? false : true;

			ctrl.classList.toggle("active");
			
			if(off){
				password.setAttribute("type","text");
			}else{
				password.setAttribute("type","password");
			}

		})

	}());