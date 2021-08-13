var number=prompt("Enter a number","1");
function square(x)
{
    return(x*x);
}
function double(x)
{
    return(x*2);
}
function composedValue(d1,f1,number)
{
    var res=d1(number);
    var res1=f1(res);
    document.write(res1);
}
composedValue(double,square,number);
