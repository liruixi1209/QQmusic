// JavaScript Document
window.onload = function(){
      var wz1=document.getElementsByClassName("inputStyle")[0];
	  var wz2=document.getElementsByClassName("inputStyle")[1];
      wz1.onfocus = function(){
		  wz1.style.opacity = 0.3;
	   }
	   wz1.onblur = function(){
		  wz1.style.opacity = 0.7;
	   }
	  wz2.onfocus = function(){
		  wz2.style.opacity = 0.3;
	   }
	    wz2.onblur = function(){
		  wz2.style.opacity = 0.7;
	   }
}