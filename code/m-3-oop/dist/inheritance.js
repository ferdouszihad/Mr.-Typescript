"use strict";
{
    class Employee {
        constructor(id, nmae, salary, position, exp) {
            this.id = id;
            this.nmae = nmae;
            this.salary = salary;
            this.position = position;
            this.exp = exp;
        }
    }
    class Engineer extends Employee {
        constructor(id, nmae, salary, position, exp, skills) {
            super(id, nmae, salary, position, exp);
            this.id = id;
            this.nmae = nmae;
            this.salary = salary;
            this.position = position;
            this.exp = exp;
            this.skills = skills;
        }
    }
    const e1 = new Employee("e101", "hashem", 45000, "Assistant Officer", 4);
    const e2 = new Engineer("e101", "hashem", 45000, "Assistant Officer", 4, [
        "web design",
    ]);
}
