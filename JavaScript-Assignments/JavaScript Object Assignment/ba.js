class bank
{
    constructor(Acnumber,name,balance,issalary,odlimit)
    {
        this.Acnumber=Acnumber;
        this.name=name;
        this.balance=balance;
        this.issalary=issalary;
        this.odlimit=odlimit;
    }
    withdraw(amt)
    {
        this.balance=this.balance-amt;
    }
    getCurrentBalance()
    {
        return this.balance;
    }
}  
save=new bank(101,"Vamsi",150000,15000)
cur=new bank(102,"Krishna",200000,2000)
save.withdraw(500);
var bal=save.getCurrentBalance();
document.write("Savings balance="+bal+"<br>");
cur.withdraw(500);
var bal1=cur.getCurrentBalance();
document.write("Current balance="+bal1+"<br>");
