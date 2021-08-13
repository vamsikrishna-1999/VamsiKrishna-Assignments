class fibona
{
    first=0;
    second=0;
    res=0;
    constructor(first:number,second:number)
    {
        this.first=first;
        this.second=second;
        this.res=this.res;
    }
    next=() =>
    {
        this.res=this.first+this.second;
        this.first=this.second;
        this.second=this.res;
        console.log(this.res);
    }
}
let p=new fibona(1,1);
p.next();
p.next();
p.next();
p.next();

