{
  class Employee {
    constructor(
      public id: string,
      public nmae: string,
      protected salary: number,
      public position: string,
      public exp: number
    ) {}
  }
  class Engineer extends Employee {
    constructor(
      public id: string,
      public nmae: string,
      protected salary: number,
      public position: string,
      public exp: number,
      public skills: Array<string>
    ) {
      super(id, nmae, salary, position, exp);
    }
  }

  const e1 = new Employee("e101", "hashem", 45000, "Assistant Officer", 4);
  const e2 = new Engineer("e101", "hashem", 45000, "Assistant Officer", 4, [
    "web design",
  ]);
}
