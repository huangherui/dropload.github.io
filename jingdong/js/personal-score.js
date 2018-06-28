

(function(){

	var pic = document.querySelector(".pic-back");
	var uls = document.querySelector("ul");
	var btn = uls.querySelector("a");
	var clothes = document.querySelectorAll(".clothes");

	for(var i = 0; i < btn.length; i++){
		btn[i].index = i;
		btn[i].addEventListener("touchastart",function(){

			for(var j = 0; j < btn.length; j++){
				btn[j].classList.remove("active");
				clothes.classList.remove("hidden");
			}

			btn[this.index].classList.add("active");
			clothes[this.index].classList.add("hidden");
		});
	}
}());