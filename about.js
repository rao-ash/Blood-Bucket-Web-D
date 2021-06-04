       
var q=anime.timeline({
    targets: '#circle',
    duration: 1000,
    easing: 'easeOutElastic(1, .8)',
    direction:'alternate',
    loop: true
  });

  q
  .add({
      translateX:210, 
      delay:500,
      background:'#8AAAE5',
      
  })

  .add({
    
    translateY:-45, 
    background:'#FFF',
    
})
.add({
    translateX:0, 
    background:'#4831D4',
})

.add({
  translateY:0, 
  background:'#CCF381',
});
	function validation(){
	var name=document.getElementById("user").value;
	var pass=document.getElementById("pass").value;
	if(name=="")
	     {document.getElementById("spau").innerHTML="**Please fill this field";
		 return false;
		 } 
	if(name.length!=10)
	  {document.getElementById("spau").innerHTML="**Username is your mobile number";
	  return false;
	  }
	   if(isNaN(name))
	     {document.getElementById("spau").innerHTML="**Username is your mobile number";
		 return false;
		 }
	if(pass=="")
	     {document.getElementById("spap").innerHTML="**Please fill this field";
		 return false;
		 }
	if(pass.length<5||pass.length>15)
	     {document.getElementById("spap").innerHTML="**Password length should be between 5 and 15";
		 return false;
		 }
	else{alert("LOG IN SUCCESSFULL");}
		 }