// JavaScript Document
window.onload = function(){
	var  one = document.getElementsByClassName("singer_tag_item_one");
	var two = document.getElementsByClassName("singer_type2_type");
	for(var i=0;i<one.length;i++){
	    (function(i){
				one[i].onclick = function(){
				     
					 for(var j=0;j<two.length;j++){
						 if(i==j){
							 two[j].style.display ='block';						 
						  }
					 }
					
				}
		 })(i)
	}
	
}
  
var two = document.getElementsByClassName("singer_type2_type");
    document.onmousedown = function(){
		 for(var j=0;j<two.length;j++){
			  if(two[j].style.display == 'block'){
				  two[j].style.display = 'none';  
			  }	
		 } 	 
		
	 }
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle(attr):getComputedStyle(obj,false)[attr];	
}

