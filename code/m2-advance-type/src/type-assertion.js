"use strict";
//play ground
{
    //type Assertion ( variable as typeName)
    let name;
    name = "zihad Ferdous";
    console.log(name.length);
    name = {
        firstName: "ferdous",
        lastName: "zihad",
    };
    console.log(name.firstName);
    const greeting = (name) => {
        if (typeof name == "string")
            return `Hello ${name} sir`;
        else if (typeof name == "object") {
            return `Hello ${name.firstName} sir`;
        }
        else
            return -1;
    };
    console.log(greeting("zihad").toLocaleUpperCase());
    console.log(greeting({
        firstName: "ferdous",
        lastName: "zihad",
    }).toLocaleUpperCase());
    console.log(greeting(undefined).toString());
}
