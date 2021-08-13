class Account
{
    id:number;
    Name:string;
    balance:number;
    constructor(id:number,Name:string,balance:number)
    {
        this.id=id;
        this.Name=Name;
        this.balance=balance;
    }
    getbalance=() =>
    {
        console.log(this.balance);
    }
}
class SavingsAccount extends Account
{
     interest!:number;
}
class CurrentAccount extends Account
{
    cash_credit!: number;
}
let p=new SavingsAccount(1,"VAMSI",10000);
p.getbalance();
let p2=new SavingsAccount(1,"VAMSI",20000);
p2.getbalance();
let p1=new CurrentAccount(1,"VAMSI",20000);
p1.getbalance();
