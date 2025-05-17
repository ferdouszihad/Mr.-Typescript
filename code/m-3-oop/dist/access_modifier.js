"use strict";
{
    class Account {
        constructor(acc_no, acc_name, schema, contact, key) {
            this.acc_name = acc_name;
            this.acc_no = acc_no;
            this.balance = 0;
            this.schema = schema;
            this.contact = contact;
            this.key = key;
        }
        cashIn(amount) {
            this.balance += amount;
        }
        cashOut(amount, key) {
            if (key != this.key) {
                throw new Error("wrong credentials");
            }
            else {
                this.balance -= amount;
            }
        }
        showBalance() {
            console.log(this.balance);
        }
    }
    const newAc = new Account(10110, "EMU", "MSA", 1818857587, 1123);
    newAc.cashIn(10000);
    newAc.cashIn(987);
    newAc.cashOut(983, 1123);
    newAc.showBalance();
}
