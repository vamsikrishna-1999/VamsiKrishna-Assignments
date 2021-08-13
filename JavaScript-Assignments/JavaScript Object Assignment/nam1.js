let Name=
{
    first:"Vamsi",
    last:"Krishna"
};
document.write("1st="+Name.first+"<br>");
document.write("1st="+Name.last+"<br>");
Name.first="Varun";
Name.second="Dhawan";
Name.middle="Reddy";
document.write("Middle="+Name.middle+"<br>");
document.write("2nd="+Name.first+"<br>");
document.write("2nd="+Name.last+"<br>");
document.write("Middle="+Name.middle+"<br>");
document.write("<br><hr>Updated properties are: ");
            for (let i in Name) {
                document.write("<br>",i," : ",Name[i]);
            }