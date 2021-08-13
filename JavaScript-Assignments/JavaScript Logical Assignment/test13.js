function bubso(a)
{
    for(i=0;i<a.length-1;i++)
    {
        for(j=0;j<a.length-i-1;j++)
        {
            if(a[j]>a[j+1])
            {
                var temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    document.write(a);
}
var arr=[9,7,1,2,5,45,54,52,17,11,32,16,63,98,74,41,99,88,44,55];
bubso(arr);