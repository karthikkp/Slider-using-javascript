//function passes the pics one by one at an interval of 3 seconds ,
//which is approx time a pic that is already passed takes to slide away

var slidePic = function(){
	var pics = [document.getElementById("pic1"),document.getElementById("pic2"),document.getElementById("pic3")];
	
	var i =0;
	var int = setInterval(function(){
		if(i > 2){
			i = 0;
		}
			pics[i].style.zIndex = 99;
			
			slide(pics[i]);
			i++;
		
	},3000);
}
//function to slide an element that is passed on to it
var slide = function(picture){
	
	'use strict';
	
	var pixel = -150;
	
	var interval = setInterval(function(){
		if(picture.style.left != '150px'){
			picture.style.left = pixel.toString() + 'px';
		}
		
		pixel += 1;
		//pixel2 +=1;
		
		if(picture.style.left == '150px'){
			picture.style.left = '-150px';
			pixel = -150;
			picture.style.zIndex = 0;
			clearInterval(interval);
		}
	},16.66);
	
}


window.onload = slidePic;
	

	
		


	

	