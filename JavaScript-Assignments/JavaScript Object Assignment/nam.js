let Name=
{
    first:"Vamsi",
    last:"Krishna"
};
document.write("1st="+Name.first+"<br>");
document.write("1st="+Name.last+"<br>");
Name.first="Varun";
Name.last="dawan";
document.write("2nd="+Name.first+"<br>");
document.write("2nd="+Name.last+"<br>");
document.write("<br><hr>Updated properties are: ");
            for (let i in Name) {
                document.write("<br>",i," : ",Name[i]);
            }