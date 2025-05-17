"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//practice Task 5
{
    const reverse = (val) => {
        return val.split("").reverse().join("");
    };
    // console.log(reverse("Hello"));
}
//✅ Task 6: Spread and Rest Operators, Destructuring
{
    const sum = (...nums) => {
        return nums.reduce((acc, num) => acc + num, 0);
    };
    // console.log(sum(1, 2, 5));
}
// ✅Task 7: Type Assertion and Narrowing
{
    //   Objective: Write a function that behaves differently based on the input type.
    // Instructions:
    // Create a function that accepts a parameter of type string | number.
    // The function should:
    // Return the length if the input is a string.
    // Return the square if the input is a number.
    const numberio = (val) => {
        if (typeof val == "string") {
            return val.length;
        }
        else if (typeof val == "number") {
            return val * val;
        }
        return 1;
    };
    // console.log(numberio("abra ka dabra"));
    // console.log(numberio(11));
}
//✅ Task 8: Intersection Types
{
    const describeAdmin = (user) => {
        return `${user.name} is an admin. He is a ${user.adminLevel}}`;
    };
    // console.log(
    //   describeAdmin({
    //     name: "karim",
    //     email: "",
    //     adminLevel: "super admin",
    //     isAdmin: true,
    //   })
    // );
}
//✅ Task 9: Optional Chaining + Nullish Coallescing
{
    const getEmployeeCity = (employee) => {
        var _a, _b, _c;
        return (_c = (_b = (_a = employee.address) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.city) !== null && _c !== void 0 ? _c : "Not Defined";
    };
    const newPerson = {
        name: "Abdur Rahman",
        address: {
            location: {
                city: "Mirpur",
                district: "Dhaka",
                area: "House 12, Road 8, Block C",
                country: "Bangladesh",
            },
            zip: 1216,
            map: {
                latitude: 23.8103,
                longitude: 90.4125,
            },
        },
        color: {
            hair: "black",
            eye: "brown",
            skin: "wheatish",
        },
        family: {
            id: "FAM_BD_001",
            name: "Fatema Begum",
            relation: "wife",
        },
        job: {
            companyName: "bKash Ltd.",
            designation: "Senior Software Engineer",
            experience: 7,
        },
        skills: ["JavaScript", "Python", "Django", "React"],
        isMarried: true,
        hobbies: ["cricket", "traveling", "reading Islamic books"],
        friends: ["Rahim", "Karim", "Salam", "Barkat"],
        financial_ability: {
            income: 120000, // BDT per month
            expense: 80000,
            savings: 40000,
        },
    };
    // console.log(getEmployeeCity(newPerson));
}
// Task 11: Unknown Type
{
    // Objective: Handle different types with the unknown type.
    // Instructions:
    // Write a function processData(data: unknown) that:
    // Checks if data is a string and returns the uppercased version.
    // If data is a number, returns the square of it.
    const processData = (data) => {
        if (typeof data == "string") {
            return data.toUpperCase();
        }
        else if (typeof data == "number") {
            return data * data;
        }
        else
            return "invalid";
    };
    // console.log(processData("j"));
}
// Task 12: Never Type
{
    // Objective: Use the never type for functions that don’t return.
    // Instructions:
    // Write a function handleError that:
    // Accepts a message: string.
    // Throws an error with the given message.
    // Use the never return type to indicate that this function never returns.
    const handleError = (err) => {
        throw new Error(err);
    };
    // handleError("you did a mistake");
}
// Task 13: Generics with Functions and Interfaces
{
    const removeDuplicate = (data) => {
        const newData = new Set(data);
        return [...newData];
    };
    // console.log(removeDuplicate([1, 2, 3, 1, 4, 2]));
    // console.log(removeDuplicate(["s", "a", "s", "s"]));
}
// Task 14: Asynchronous TypeScript and Type Aliases
{
    const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            name: "Zihad",
            age: 28,
        };
        return new Promise((res, rej) => {
            setTimeout(() => res(user), 3000);
        });
    });
    // fetchUser().then((data: User) => console.log(data));
}
// Task 15: Type Guards
{
    // Objective: Create custom type guards for more accurate type checking.
    // Instructions:
    // Write a function isString(value: unknown): value is string that checks if a value is a string.
    // Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
    const isString = (value) => {
        if (typeof value == "string")
            return true;
        else
            return false;
    };
    const printUpperCase = (value) => {
        if (isString(value))
            console.log(value.toUpperCase());
        else
            throw new Error("not a String");
    };
    // printUpperCase("hello");
    // printUpperCase(11);
}
// Task 16: Utility Types and Keyof Constraints
{
    // Objective: Access object properties dynamically using keyof.
    // Instructions:
    // Create a function that:
    // Takes an object and a key.
    // Returns the property value from the object based on the provided key.
    // Use keyof to constrain the key to valid properties of the object.
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const student = {
        name: "sultan",
        age: 12,
        isCr: false,
        friends: ["billal", "kawsar"],
    };
    console.log(getProperty(student, "age"));
}
