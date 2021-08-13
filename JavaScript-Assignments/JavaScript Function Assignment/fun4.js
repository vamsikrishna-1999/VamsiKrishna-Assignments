var arr=[1,3,5,4,2];
var i=0;
var j=1;
function isEven(num)
{
    return(num%2==0);
}  
function find(arr,isEve)
{
    if(isEve(arr[i]))
    {
        document.write(arr[i]);
    }
    else
    {
        find(arr.slice(j,5),isEven);
        j++;
    }   
}
find(arr,isEven);