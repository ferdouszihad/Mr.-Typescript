"use strict";
{
    class Account {
        constructor(acc_name, schema, contact, key) {
            this.acc_no = parseInt(`1010${Account.totalAc + 0}`);
            this.acc_name = acc_name;
            this.balance = 0;
            this.schema = schema;
            this.contact = contact;
            this.key = key;
        }
        get Balance() {
            return newAc.balance;
        }
        set Deposit(newAmount) {
            newAc.balance += newAmount;
        }
    }
    Account.totalAc = 0;
    const newAc = new Account("EMU", "MSA", 1818857587, 1123);
    newAc.Deposit = 100;
    newAc.Deposit = 130;
    console.log(newAc);
}
