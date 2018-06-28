
(function(){
	var yuan = document.getElementsByClassName("yuan")[0];
	console.log(yuan);
	var list = true;

	yuan.addEventListener("touchstart",function(){
		// alert(2);
		if(list){
			yuan.classList.add("active");
			yuan.classList.remove("yuan");
			list = false;
		}else{
			yuan.classList.remove("active");
			yuan.classList.add("yuan");
			list = true;
		}
	});
}());