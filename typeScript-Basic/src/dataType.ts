// basic data type
{
  //implicit datatype
  let name = "rahim"; // automatically type inferred
  //   name = 12; ❌ cwont work

  //explicit data type

  let food: string = "Burger";

  //number
  let price: number = 120.334;

  //boolean
  let isAdmin: boolean = true;

  //undefined
  let x: undefined = undefined;

  //null

  let node: null = null;

  //any

  let a; // initially any type .  dont provide typeSaftey
  let b: any;
  a = 120;
  a = "ss";

  //unknown

  let k: unknown;
  k = "kola";
  k = 12;

  //array
  let foods: string[] = ["burger", "pizza", "chicken fry"];

  //   foods.push(1); cant happen

  //tuple ->> fixed set of array

  let cuple: [string, string] = ["emu", "zihad"];

  let gpa: [string, number] = ["HSC", 5.0];
}
