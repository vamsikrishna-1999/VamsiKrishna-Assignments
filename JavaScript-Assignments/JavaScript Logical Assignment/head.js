var n=parseInt(prompt("Enter no of flips","1"));
flip(n);
function flip(n1)
{
    var sum=0;
    for(i=0;i<n1;i++)
    {
        var toss=Math.random()*1;
        if(Math.round(toss) == 1)
        {
            sum=sum+1;
        }
    }
    document.write(sum/10);
}
