"use strict";
{
    const createNewStudent = (student) => {
        return Object.assign(Object.assign({}, student), { course: "L1 WEB" });
    };
    //   type richStudent = {
    //     email: string;
    //     twitter: string;
    //     name: string;
    //     balance: number;
    //   };
    console.log(createNewStudent({
        name: "me",
        email: "sss",
        roll: 12,
        m: "sss",
        gf: "halima",
    }));
}
