{
  //   Task 2: Functions, Optional, and Literal Types
  // Objective: Create a function with parameters and an optional literal type.
  // Instructions:
  // Define a function that takes:
  // name (string)
  // age (number)
  // role (optional, with type 'admin' | 'user' | 'guest')
  // The function should log these values or perform a basic action.

  const print = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest" | undefined
  ): void => {
    console.log(name);
    console.log(age);
    console.log(role ?? "Not Deifned");
  };

  print("zihad", 17, "admin");
}
