var arr=[1,3,5,4,2];
function isEven(num)
{
    return(num%2==0);
}
function find(arr,isEve)
{
    for(i=0;i<arr.length;i++)
    {
        if(isEve(arr[i])==true)
        {
            document.write(arr[i]);
            break;
        }
    }
}
find(arr,isEven);