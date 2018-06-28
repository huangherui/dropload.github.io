
(function(){
	var btn = document.querySelectorAll(".address-left");
	// console.log(btn);
	for(var i = 0; i < btn.length; i++){
		btn[i].index = i;
		btn[i].addEventListener("touchstart",function(){
	
			for(var j = 0; j < btn.length; j++){
				btn[j].classList.remove("on");
				btn[j].classList.remove("on-bg");
			}
			btn[this.index].classList.add("on");
			btn[this.index].classList.add("on-bg");
		});
	}
}());