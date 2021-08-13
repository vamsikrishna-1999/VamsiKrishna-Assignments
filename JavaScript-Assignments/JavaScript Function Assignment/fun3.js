var myarr=[1,2,3,4,5];
var myarr1=[1,4,9,16,25];
function squ(x)
{
    return(x*x);
}
function squr(x)
{
    return(Math.sqrt(x));
}
function map(my,sq)
{
    var b=new Array(5);
    for(i=0;i<my.length;i++)
    {
        var res=sq(my[i]);
        b[i]=res;
    }
    document.write(b+"<br>");
}
function map(my1,sqr)
{
    var b1=new Array(5);
    for(i=0;i<my1.length;i++)
    {
        var res1=sqr(my1[i]);
        b1[i]=res1;
    }
    document.write(b1+"<br>");
}
map(myarr,squ);
map(myarr1,squr);
