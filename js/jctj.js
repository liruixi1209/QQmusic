// JavaScript Document

   window.onload = function(){
	   
	   //getStyle函数
	   
	   function getStyle(obj,attr){
		  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
       }
	   


       //下拉列表
	   var inp = document.getElementsByClassName("search_input__input")[0];
	   var btn = document.getElementsByClassName("js-box")[0];
	   inp.onfocus = function(){
		   btn.style.display = 'block';
	   }
	   inp.onblur	= function(){
		   btn.style.display = 'none';
	   }
   
   
        //目录切换
		var divs = document.getElementsByClassName("mod-index-tab")[0];
		var as = divs.getElementsByTagName("a");
		var panels = document.getElementById("main").getElementsByTagName("ul");
		for(var i=0;i<as.length;i++){
			  (function(i){
				  as[i].onclick= function(){
				
					 for(var j=0;j<panels.length;j++){
						if(i == j){
							panels[j].style.display = 'block';	
						}else{
							panels[j].style.display = 'none';	
						}
					 }	
				  }
			  })(i)
		  }
		  
		  
		   //图片轮播
		  var arr2 = [];
		  var container = document.getElementsByClassName("jctj-thing")[0];
		  var imgs = document.getElementsByClassName("jctj-pic-img");
		  for(var i=0;i<imgs.length;i++){
			  arr2.push([getStyle(imgs[i],'left'),getStyle(imgs[i],'top'),getStyle(imgs[i],'width'),getStyle(imgs[i],'height'),getStyle(imgs[i],'zIndex')])
		  }
		  var interval = 2000;
          var timer;
		  function play(){
			  timer = setInterval(function(){
				  btn2[1].onclick();
			  },2000);
		  }
		  play();
		  function stop1(){
			  clearInterval(timer);
		  }
		  container.onmouseover = stop1;
		  container.onmouseout = play;
		  var btn2 = document.getElementsByClassName("btn2");
		  btn2[1].onclick = function(){
			  console.log(arr2);
			  arr2.unshift(arr2[arr2.length-1]);
			  arr2.pop();
			  console.log(arr2);
			  for(var i=0;i<imgs.length;i++){
				  imgs[i].style.left = arr2[i][0];
				  imgs[i].style.top = arr2[i][1];
				  imgs[i].style.width = arr2[i][2];
				  imgs[i].style.height = arr2[i][3];
				  imgs[i].style.zIndex = arr2[i][4];
			  }
		  }

		   btn2[0].onclick = function(){
			  arr2.push(arr2[0]);
			  arr2.shift();
			   for(var i=0;i<imgs.length;i++){
				  imgs[i].style.left = arr2[i][0];
				  imgs[i].style.top = arr2[i][1];
				  imgs[i].style.width = arr2[i][2];
				  imgs[i].style.height = arr2[i][3];
				  imgs[i].style.zIndex = arr2[i][4];
			  }
		  }

		
		  
		  
		 //返回顶部
		  window.onscroll = function () {
			var btn=document.getElementsByClassName("return-top")[0];
				if (document.documentElement.scrollTop + document.body.scrollTop >200) {
					btn.style.display = "block";
				}
				else {
					btn.style.display = "none";
				}
	       }
		  
		  
		  
		  //左右切换
		  
		  function getStyle(obj,attr){
		     return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
          }
          var list = document.getElementById('u1');
		  var prev = document.getElementsByClassName('btn-left')[0];
		  var next = document.getElementsByClassName('btn-right')[0];
		  
		
		  var Newdivs = document.getElementsByClassName("changeDiv");
		  var arr = [];
		  for(var i=0;i<Newdivs.length;i++){
		       arr.push([parseInt(getStyle(Newdivs[i],'left')),parseInt(getStyle(Newdivs[i],'z-index'))]);
	      }
		 
		 
		 
		  next.onclick = function(){
			  arr.unshift(arr[arr.length-1]);
			  arr.pop();
			  for(var i=0;i<Newdivs.length;i++){
			   	  
				  Newdivs[i].style.left = arr[i][0]+"px";
				  Newdivs[i].style.zIndex = arr[i][1];
	      	  }
		  			  
		  }
		  prev.onclick = function(){
			  arr.push(arr[0]);
			  arr.shift();
			  for(var i=0;i<Newdivs.length;i++){
			   	  
				  Newdivs[i].style.left = arr[i][0]+"px";
				  Newdivs[i].style.zIndex = arr[i][1];
				  
	      	  }
		  }
		  
//QQ登录
	var login=document.getElementsByClassName("js-login")[0];
         login.onclick = function(){
			 var mask=document.getElementsByClassName("mod_mask")[0];
			 var popup=document.getElementsByClassName("popup_login")[0];
			 mask.style.display = 'block';
			 popup.style.display = 'block';
			 
	}	
   //绿钻充值
	var ov=document.getElementsByClassName("js-openVIP")[0];
	ov.onclick = function(){
		   var diolog = document.getElementById("diolog_mask");
		   var OG = document.getElementById("OGdiamond");
				diolog.style.display = 'block';
				OG.style.display = 'block';
	}
	//QQ号码登录	
	var txt=document.getElementsByClassName("qlogin_bottom_box_1_txt")[0];
	      txt.onclick = function(){
		       document.getElementById("center2").style.display = 'block';
		  	   document.getElementById("center1").style.display = 'none';
		  }
		  
		  
   //绿钻界面
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
	//类别选框
	var allbtn = document.getElementsByClassName("part_detail_all_btn");
	 var deg = document.getElementsByClassName("part_detail_all_box_txt");
	
	 for(var i=0;i<allbtn.length;i++){
		 (function(i){
			 allbtn[i].onclick = function(){
					 deg[i].style.display = 'block';
				 	   
			 }
			  
		 })(i);
		 
	 }
	 document.onmousedown = function(){
		 for(var j=0;j<deg.length;j++){
			  if(deg[j].style.display == 'block'){
				  deg[j].style.display = 'none';  
			  }	
		 } 	 
		
	 }  
		  
   }
   
   
   
   
   
   
        
 
