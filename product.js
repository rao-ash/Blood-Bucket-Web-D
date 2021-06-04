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