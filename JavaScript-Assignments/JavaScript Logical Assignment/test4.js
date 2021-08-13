var count=0;
var year=2020;
while(count<=20)
{
    year=year+4;
    /*document.write("year="+year+" ");*/
    if(year%4==0)
    {
        if(year%100!=0 || year%400==0)
        {
                count++;
                document.write(year+" ");
        }
    }
}