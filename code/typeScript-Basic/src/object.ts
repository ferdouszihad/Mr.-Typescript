{
  // implicit object

  const data = { name: "zihad", result: 5.0 };

  let Developer: {
    isSmart: true; //literal types
    name: string;
    languages: string[];
    isExperienced: boolean;
    company?: string; //optional type
    country: "bangladesh"; //literal types
  } = {
    isSmart: true,
    name: "Ferdous",
    languages: ["c", "c++", "javaScript", "typeScript"],
    isExperienced: true,
    company: "Programming Hero",
    country: "bangladesh",
  };
  console.log(Developer);

  let zihad: {
    company: string;
    readonly bou: string;
    age: number;
  } = {
    company: "Programming Hero",
    bou: "emu",
    age: 28,
  };

  //   zihad.bou = "mia khalifa";
}
