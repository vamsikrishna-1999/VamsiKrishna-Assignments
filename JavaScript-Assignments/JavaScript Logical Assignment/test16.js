function validate()
{   
    var y=0,y1=0,y2=0,y3=0,y4=0,y5=0,y6=0;
    var x=0;
    var selectedValue=0;
    var name=document.myform.name.value;
    var email=document.myform.Email.value;
    var Extra= document.getElementById("1");  
    var pepperoni= document.getElementById("2"); 
    var olive=document.getElementById("3"); 
    var pepper=document.getElementById("4"); 
    var Bacon=document.getElementById("5"); 
    var Tomatoes=document.getElementById("6"); 
    var mushrooms=document.getElementById("7"); 
    if (Extra.checked == true || pepperoni.checked == true || olive.checked == true || pepper.checked == true || Bacon.checked == true ||Tomatoes.checked== true || mushrooms.checked==true)
    {  
        y = document.getElementById("1").value;
        y1 = document.getElementById("2").value; 
        y2 = document.getElementById("3").value; 
        y3 = document.getElementById("4").value; 
        y4 = document.getElementById("5").value; 
        y5 = document.getElementById("6").value; 
        y6 = document.getElementById("7").value; 
    }  
    if(document.getElementById("11").checked) 
    {   
        selectedValue = document.getElementById("11").value;  
        //document.write(selectedValue);
        alert("Selected Radio Button is: " + selectedValue);    
    }
    else if(document.getElementById("21").checked)
    {
        selectedValue = document.getElementById("21").value;  
        //document.write(selectedValue);
        alert("Selected Radio Button is: " + selectedValue);  
    }
    var add=document.getElementById("address").value;
    var e = parseInt(document.getElementById("drop").value);
    document.write("name="+name+"<br>");
    document.write("Email="+email+"<br>");
    document.write("Toppings:"+"<br>")
    document.write(y+" "+y1+" "+y2+" "+y3+" "+y4+" "+y5+" "+y6+"<br>");
    document.write("Address="+add+"<br>");
    var ss=(10+(1.5*7)+5+e);
    document.write(" Total Amount="+ss);
  }  
