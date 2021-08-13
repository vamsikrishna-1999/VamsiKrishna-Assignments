"use strict";
class Account {
    constructor(id, Name, balance) {
        this.getbalance = () => {
            console.log(this.balance);
        };
        this.id = id;
        this.Name = Name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
}
class CurrentAccount extends Account {
}
let p = new SavingsAccount(1, "VAMSI", 10000);
p.getbalance();
let p2 = new SavingsAccount(1, "VAMSI", 20000);
p2.getbalance();
let p1 = new CurrentAccount(1, "VAMSI", 20000);
p1.getbalance();
