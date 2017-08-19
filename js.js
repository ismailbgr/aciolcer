window.onload=function(){
function goster(){
$("#content").slideToggle(1000);
}
setTimeout(goster,3000);
}


   function orientationadd(){
   if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", orientation);
      $("#start").slideUp(1000);
	  $("#alpha").slideDown(1000);
	  }else{
		  alert("Telefonunuz Buna Uygun deðil")
	  }
	  
   }
   
   function orientation(event){
		var sayi = Math.round(event.alpha)
	 if(sayi > 180){
   document.getElementById("alpha").innerHTML = sayi - 180
	 }
	 
	 if(sayi == 180){
   document.getElementById("alpha").innerHTML = 180
   }
	 
    if(sayi < 180){
   document.getElementById("alpha").innerHTML = sayi
   }
   }
   

   
   function geri(){
	   history.back()
   }
   
   function yenile(){
	   location.reload(true)
   }