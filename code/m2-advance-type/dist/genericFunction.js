"use strict";
{
    //   const add = <T1, T2>(n1: T1, n2: T2): string => `[${n1} + ${n2}]`;
    const createArray = (v) => [v];
    console.log(createArray("hello"));
    const createTuple = (v1, v2) => [v1, v2];
    console.log(createTuple("emu", "zihad"));
    const createNewStudent = (v) => {
        return Object.assign(Object.assign({}, v), { course: "L1 WEB" });
    };
    console.log(createNewStudent({ name: "kaishya", balance: 0 }));
    console.log(createNewStudent({ name: "kaishya", balance: 100 }));
}
