//practice Task 5
{
  //   Objective: Write a function that reverses a string.
  // Instructions:
  // Write a function reverseString that:
  // Takes a single string argument.
  // Returns the string in reverse order.
  // Example:
  // Input: "hello"
  // Output: "olleh"

  type Reverse = (val: string) => string;

  const reverse: Reverse = (val) => {
    return val.split("").reverse().join("");
  };

  // console.log(reverse("Hello"));
}
//✅ Task 6: Spread and Rest Operators, Destructuring
{
  //   Objective: Write a function that uses the rest operator for variable-length arguments.
  // Instructions:
  // Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

  type Fun = (...num: number[]) => number;

  const sum = (...nums: number[]) => {
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

  const numberio = (val: string | number): number => {
    if (typeof val == "string") {
      return val.length;
    } else if (typeof val == "number") {
      return val * val;
    }
    return 1;
  };

  // console.log(numberio("abra ka dabra"));
  // console.log(numberio(11));
}

//✅ Task 8: Intersection Types
{
  //   Objective: Practice using intersection types.
  // Instructions:
  // Create a type AdminUser that is an intersection of:
  // User with properties name and email
  // Admin with property adminLevel
  // Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

  type User = {
    name: string;
    email: string;
  };
  type Admin = {
    adminLevel: string;
    isAdmin: true;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
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
  //   Objective: Use optional chaining with nested objects.
  // Instructions:
  // Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
  type Person = {
    name: string;
    address?: {
      location?: {
        city?: string;
        district: string;
        area: string;
        country: string;
      };
      zip: number;
      map: {
        latitude: number;
        longitude: number;
      };
    };
    color: {
      hair: string;
      eye: string;
      skin: string;
    };
    family: {
      id: string;
      name: string;
      relation: string;
    };
    job: {
      companyName: string;
      designation: string;
      experience: number;
    };
    skills: string[];
    isMarried: boolean;
    hobbies: string[];
    friends: string[];
    financial_ability: {
      income: number;
      expense: number;
      savings: number;
    };
  };

  const getEmployeeCity = (employee: Person): string => {
    return employee.address?.location?.city ?? "Not Defined";
  };

  const newPerson: Person = {
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
  const processData = (data: unknown): string | number => {
    if (typeof data == "string") {
      return data.toUpperCase();
    } else if (typeof data == "number") {
      return data * data;
    } else return "invalid";
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

  const handleError = (err: string): never => {
    throw new Error(err);
  };
  // handleError("you did a mistake");
}

// Task 13: Generics with Functions and Interfaces
{
  // Objective: Use generics to handle different types.
  // Instructions:
  // Create a generic function that:
  // Accepts an array of any type.
  // Returns a new array with duplicate values removed.

  type Duplicate<T> = (data: Array<T>) => Array<T>;

  const removeDuplicate = <T>(data: Array<T>): Array<T> => {
    const newData = new Set(data);
    return [...newData];
  };

  // console.log(removeDuplicate([1, 2, 3, 1, 4, 2]));
  // console.log(removeDuplicate(["s", "a", "s", "s"]));
}

// Task 14: Asynchronous TypeScript and Type Aliases
{
  // Objective: Simulate an asynchronous operation with TypeScript.
  // Instructions:
  // Write an asynchronous function that:
  // Simulates fetching user data (containing name and age).
  // Returns the data after a short delay.

  type User = {
    name: string;
    age: number;
  };
  const fetchUser = async (): Promise<User> => {
    const user: User = {
      name: "Zihad",
      age: 28,
    };

    return new Promise((res, rej) => {
      setTimeout(() => res(user), 3000);
    });
  };

  // fetchUser().then((data: User) => console.log(data));
}

// Task 15: Type Guards
{
  // Objective: Create custom type guards for more accurate type checking.
  // Instructions:
  // Write a function isString(value: unknown): value is string that checks if a value is a string.
  // Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.

  const isString = (value: unknown): boolean => {
    if (typeof value == "string") return true;
    else return false;
  };

  const printUpperCase = (value: unknown): void => {
    if (isString(value)) console.log((value as string).toUpperCase());
    else throw new Error("not a String");
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

  const getProperty = <T1, T2 extends keyof T1>(obj: T1, key: T2) => {
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
