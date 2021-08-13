function fib(a,b)
{
    document.write(a+"<br>"+b+"<br>");
    for(i=0;i<98;i++)
    {
        var sum=a+b;
        a=b;
        b=sum;
        document.write(sum+"<br>");
    }
}
var c=1;
var d=1;
fib(c,d);