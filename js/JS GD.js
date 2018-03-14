// JavaScript Document
window.onload = function(){
	var iteams = document.getElementsByClassName("goods_items");
	var pic = document.getElementsByClassName("goods_items_pic");
	var sp3 = document.getElementsByClassName("sp3");
      // console.log(typeof(sp3));
	var wxMoney = document.getElementsByClassName("wxMoney")[0];
	for(var i=0;i<iteams.length;i++){
	        (function(i){
	             iteams[i].onclick = function(){
		                  for(var j=0;j<iteams.length;j++){
							  if(i==j){
								  iteams[j].style.border = '1px solid #3387ef';
								  pic[j].style.display = 'block';
								  wxMoney.innerHTML = sp3[j].innerHTML*0.95;
							  }else{
								  iteams[j].style.border = '1px solid #e5e5e5';
								  pic[j].style.display = 'none';
							   }
							   
						   }
		          }
	       })(i)
	}

	
	
	/*var sp3 = document.getElementsByClassName("sp3");
      // console.log(typeof(sp3));
	var wxMoney = document.getElementsByClassName("wxMoney")[0];
	for(var i=0;i<iteams.length;i++){
	        (function(i){
	             iteams[i].onclick = function(){
		                  for(var j=0;j<iteams.length;j++){
							  if(i==j){
								   wxMoney.innerHTML = sp3[j].innerHTML*0.95;
							  }
						   }
		          }
	       })(i)
	}*/
	
	var ways = document.getElementsByClassName("way");
	var pics = document.getElementsByClassName("payWay_pic");
	for(var i=0;i<iteams.length;i++){
	        (function(i){
	             ways[i].onclick = function(){
		                  for(var j=0;j<iteams.length;j++){
							  if(i==j){
								  ways[j].style.border = '1px solid #3387ef';
								  pics[j].style.display = 'block';
							  }else{
								  ways[j].style.border = '1px solid #e5e5e5';
								  pics[j].style.display = 'none';
							   }
						   }
		          }
	       })(i)
	}
	var red = document.getElementsByClassName("reduce")[0];
	var add = document.getElementsByClassName("add")[0];
	var changeMonth = document.getElementsByClassName("input_area_txt")[0];
	var changeMoney = document.getElementsByClassName("changeMoney")[0];
	var wxMoney = document.getElementsByClassName("wxMoney")[0];
	red.onclick = function(){
		if(changeMonth.value!=1){
		    changeMonth.value--;
		    changeMoney.innerHTML =parseInt(changeMonth.value*15);
			wxMoney.innerHTML =  parseInt(changeMonth.value*15)*0.95;		
		}
		
	}
	red.onmouseover = function(){
		if(changeMonth.value==1){
			red.style.cursor = 'not-allowed';
			
		}
		else{
			red.style.cursor = 'pointer';
		}
    }
	add.onclick = function(){
		changeMonth.value++;
		changeMoney.innerHTML = parseInt(changeMonth.value*15);
		wxMoney.innerHTML =  parseInt(changeMonth.value*15)*0.95;

	}
} 