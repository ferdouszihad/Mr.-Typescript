{
  // Islami Bank Accunt Portal
  type Schemas = "MSA" | "MDA" | "BDA" | "FDR" | "SA";
  class Account {
    readonly acc_no: number;
    acc_name: string;
    private balance: number;
    schema: Schemas;
    contact: number;
    private key: number;

    constructor(
      acc_no: number,
      acc_name: string,
      schema: Schemas,
      contact: number,
      key: number
    ) {
      this.acc_name = acc_name;
      this.acc_no = acc_no;
      this.balance = 0;
      this.schema = schema;
      this.contact = contact;
      this.key = key;
    }

    get Balance() {
      return newAc.balance;
    }
    set Deposit(newAmount: number) {
      newAc.balance += newAmount;
    }
  }

  const newAc = new Account(10110, "EMU", "MSA", 1818857587, 1123);

  newAc.Deposit = 100;
  newAc.Deposit = 130;

  console.log(newAc.Balance);
}
