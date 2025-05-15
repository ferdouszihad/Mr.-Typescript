{
  //Instance of Guard

  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    makeSound(): void {
      console.log(`making sound`);
    }
  }

  class Dog extends Animal {
    sound: string;
    constructor(name: string, age: number, sound: string) {
      super(name, age);
      this.sound = sound;
    }
    makeSound(): void {
      console.log(`${this.sound} ${this.sound}`);
    }
    play(): void {
      console.log(`${this.name} wanna play`);
    }
  }

  class Cat extends Animal {
    sound: string;
    constructor(name: string, age: number, sound: string) {
      super(name, age);
      this.sound = sound;
    }
    makeSound(): void {
      console.log(`${this.sound} ${this.sound}`);
    }
    eat(): void {
      console.log(`${this.name} bilai wanna Eat`);
    }
  }

  const dog1 = new Dog("kutabasa", 2, "ghau");
  //   dog1.makeSound();
  dog1.play();

  const cat1 = new Cat("hablu", 3, "mewu");
  //   cat1.Eat();

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const printAnimal = (animal: Animal): void => {
    if (isDog(animal)) {
      console.log(`Name -> ${animal.name}`);
      console.log(`Age -> ${animal.age}`);
      console.log(`Sound -> ${animal.sound}`);
      //   animal.play();
      animal.play();
    }
    if (isCat(animal)) {
      console.log(`Name -> ${animal.name}`);
      console.log(`Age -> ${animal.age}`);
      console.log(`Sound -> ${animal.sound}`);
      animal.eat();
    }
  };

  printAnimal(dog1);
  printAnimal(cat1);
}
