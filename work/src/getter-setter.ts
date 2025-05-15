{
  // Islami Bank Accunt Portal
  type Schemas = "MSA" | "MDA" | "BDA" | "FDR" | "SA";
  class Account {
    static totalAc: number = 0;
    readonly acc_no: number = parseInt(`1010${Account.totalAc + 0}`);
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
    }

    get Balance() {
      return newAc.balance;
    }
    set Deposit(newAmount: number) {
      newAc.balance += newAmount;
    }
  }

  const newAc = new Account("EMU", "MSA", 1818857587, 1123);

  newAc.Deposit = 100;
  newAc.Deposit = 130;

  console.log(newAc);
}
