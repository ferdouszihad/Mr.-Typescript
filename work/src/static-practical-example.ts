{
  // Islami Bank Accunt Portal
  type Schemas = "MSA" | "MDA" | "BDA" | "FDR" | "SA";
  class Account {
    static totalAc: number = 10100;
    readonly acc_no: number = Account.totalAc;
    acc_name: string;
    private balance: number;
    schema: Schemas;
    contact: number;
    private key: number;

    constructor(
      acc_name: string,
      schema: Schemas,
      contact: number,
      key: number
    ) {
      this.acc_name = acc_name;
      this.balance = 0;
      this.schema = schema;
      this.contact = contact;
      this.key = key;
      Account.totalAc += 1;
      this.display();
    }

    display() {
      console.log("--------------");
      for (let x in this) {
        console.log(`${x} => ${this[x]}`);
      }
      console.log("--------------");
    }

    get Balance() {
      return newAc.balance;
    }
    set Deposit(newAmount: number) {
      newAc.balance += newAmount;
    }
  }

  const newAc = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc2 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc3 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc4 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc5 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc6 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc7 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc8 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc9 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc10 = new Account("EMU", "MSA", 1818857587, 1123);
  const newAc11 = new Account("EMU", "MSA", 1818857587, 1123);
}
