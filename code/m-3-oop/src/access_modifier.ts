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
    cashIn(amount: number): void {
      this.balance += amount;
    }
    cashOut(amount: number, key: number): void {
      if (key != this.key) {
        throw new Error("wrong credentials");
      } else {
        this.balance -= amount;
      }
    }
    showBalance(): void {
      console.log(this.balance);
    }
  }

  const newAc = new Account(10110, "EMU", "MSA", 1818857587, 1123);

  newAc.cashIn(10000);
  newAc.cashIn(987);
  newAc.cashOut(983, 1123);

  newAc.showBalance();
}
