"use strict";
{
    //   Task 2: Functions, Optional, and Literal Types
    // Objective: Create a function with parameters and an optional literal type.
    // Instructions:
    // Define a function that takes:
    // name (string)
    // age (number)
    // role (optional, with type 'admin' | 'user' | 'guest')
    // The function should log these values or perform a basic action.
    const print = (name, age, role) => {
        console.log(name);
        console.log(age);
        console.log(role !== null && role !== void 0 ? role : "Not Deifned");
    };
    print("zihad", 17, "admin");
}
