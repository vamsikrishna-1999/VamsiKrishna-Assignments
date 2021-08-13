function translate(s)
{
    var mya=new Array(4);
    var z=0;
    for(i=0;i<4;i++)
    {
        for(j=0;j<s[i].length;j++)
        {
            var k=s[i].charAt(0);
            var k1="";
            for(l=1;l<s[i].length;l++)
            {
                k1=k1+String(s[i].charAt(l));
            }
            var k2="";
            k2=k2+k1+String(k)+"ay";
            mya[z]=k2;
            z++;
            k2="";
            k='';
            k1="";
            break;
        }
    }
    var f="";
    for(i=0;i<mya.length;i++)
    {
        f=f+mya[i]+" ";
    }
    var ff=String(f.charAt(0)).toUpperCase();
    document.write(f.charAt(0).toUpperCase()+f.slice(1));
}
var s1="The quick brown fox";
var mystr=new Array(4);
var s="";
var j=0;
for(i=0;i<=s1.length;i++)
{
    if(i==s1.length)
    {
        mystr[j]=s.toLowerCase();
    }
    else if(s1.charAt(i)!=' ')
    {
        s=s+s1.charAt(i);
    }
    else if(s1.charAt(i)==' ')
    {
        mystr[j]=s.toLowerCase();;
        s="";
        j++;
    }
}
translate(mystr);
