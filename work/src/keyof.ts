{
  // type dAgent = {
  //   car: "Tyota";
  //   truck: "mitsubishi";
  //   cycle: "Duronto";
  //   bike: "Dayang";
  // };

  // // type Vehicle = "car" | "truck" | "cycle" | "bike";
  // type Vehicle = keyof dAgent;

  // const v1: Vehicle = "car";

  const getValue = <T1, T2 extends keyof T1>(obj: T1, key: T2) => {
    return obj[key];
  };

  type Student = {
    name: string;
    roll: number;
  };

  const student = {
    name: "hero",
    roll: 18,
  };

  console.log(getValue<Student, "name">(student, "name"));
}
