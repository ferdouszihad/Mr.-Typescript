"use strict";
{
    //Normal Function in TS
    function add(num1, num2) {
        return num1 + num2;
    }
    //arrowfunction in TS
    const multiply = (num1, num2) => num1 * num2;
    const account = {
        acc_no: 24561,
        acc_name: "ISRAT JAHAN EMU",
        balance: 0,
        add(balance) {
            this.balance += balance;
        },
        show() {
            return this.balance;
        },
    };
    //
    const marks = [98, 97.5, 45, 56];
    const shortMarks = marks.map((mark) => mark / 10);
    const highestMark = marks.find((mark) => mark > 95);
}
