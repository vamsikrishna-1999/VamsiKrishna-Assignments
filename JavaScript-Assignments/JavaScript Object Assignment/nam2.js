var str = '({"firstName":"Bill","lastName":"Gates"})';
var obj = eval(str);
document.write("firstname="+obj.firstName+"<br>");
document.write("lastname="+obj.lastName+"<br>");
obj.firstName="Vamsi";
obj.lastName="Krishna";
document.write("firstname="+obj.firstName+"<br>");
document.write("lastname="+obj.lastName+"<br>");