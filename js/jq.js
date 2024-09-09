  function ltraffic() {
	  
		  let colorLight = document.getElementById("light_box").value;
		  let lbl3= document.getElementById("light_color3");
		  let lbl2= document.getElementById("light_color2");
		  let lbl1= document.getElementById("light_color1");
		 let light_warning=document.getElementById("light-warning");
		 
		 
		 if(colorLight == "red"){
			 lbl3.style.backgroundColor = "red";
			 
			 lbl2.style.backgroundColor = "white";
			 lbl1.style.backgroundColor = "white";
			 light_warning.innerHTML="stop";
		 }
		 else if(colorLight == "yellow"){
			  
			 lbl2.style.backgroundColor = "yellow";
			 lbl3.style.backgroundColor = "white";
			 lbl1.style.backgroundColor = "white";
			 light_warning.innerHTML="slow down";
				 
		 }
		 
     else if(colorLight == "green"){
		  lbl1.style.backgroundColor = "green";
		  lbl2.style.backgroundColor = "white";
		  lbl3.style.backgroundColor = "white";
			 light_warning.innerHTML="GO";
				 
		 }
		else{
			 lbl1.style.backgroundColor = "white";
			 lbl2.style.backgroundColor = "white";
			 lbl3.style.backgroundColor = "white";
			 light_warning.Color="black";
			 light_warning.innerHTML="Invalid Color";
		}
    
	  
    }
	
	function Reset(){
		  let lbl3= document.getElementById("light_color3");
		  let lbl2= document.getElementById("light_color2");
		  let lbl1= document.getElementById("light_color1");
		 let light_warning=document.getElementById("light-warning");
		lbl1.style.backgroundColor = "white";
			 lbl2.style.backgroundColor = "white";
			 lbl3.style.backgroundColor = "white";
			 document.getElementById("light_box").value= "";
			 document.getElementById("light-warning").innerHTML= "";
			 
	}
