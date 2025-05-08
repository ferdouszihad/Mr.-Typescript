{
  //Normal Function in TS
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  //arrowfunction in TS
  const multiply: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
  ): number => num1 * num2;

  const account: {
    readonly acc_no: number;
    readonly acc_name: string;
    balance: number;
    add(balance: number): void;
    show(): number;
  } = {
    acc_no: 24561,
    acc_name: "ISRAT JAHAN EMU",
    balance: 0,
    add(balance: number) {
      this.balance += balance;
    },
    show(): number {
      return this.balance;
    },
  };

  //
  const marks: number[] = [98, 97.5, 45, 56];

  const shortMarks: number[] = marks.map((mark: number): number => mark / 10);

  const highestMark: number | undefined = marks.find(
    (mark: number): boolean => mark > 95
  );
}
