var myarr=[1,2,3,4,5];
var myarr1=[1,4,9,16,25];
var b=new Array(5);
var j=0;
var i=0;
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
    if(j<myarr.length)
    {
        var res=sq(my[i]);
        b[j]=res;
        j++;
        map(myarr.slice(j,5),sq);
    }
    else if(j==myarr.length)
    {
        document.write(b+"<br>");
        j=0;
    }
}
function map1(my1,sqr)
{
    if(j<myarr1.length)
    {
        var res=sqr(my1[i]);
        b[j]=res;
        j++;
        map1(myarr1.slice(j,5),sqr);
    }
    else if(j==myarr1.length)
    {
        document.write(b+"<br>");
    }
}
map(myarr,squ);
map1(myarr1,squr);

