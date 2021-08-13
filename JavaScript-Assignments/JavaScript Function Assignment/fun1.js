var number=prompt("Enter a number","1");
function f1(x)
{
    var res=double(x);
    var res1=square(res);
    document.write("f1("+number+")="+res1+"<br>");
}
function f2(x)
{
    var res=square(x);
    var res1=double(res);
    document.write("f2("+number+")="+res1+"<br>");
}
function composedValue(f,ff)
{
    f(number);
    ff(number);
}
function square(x)
{
    return(x*x);
}
function double(x)
{
    return(x*2);
}
composedValue(f1,f2);
