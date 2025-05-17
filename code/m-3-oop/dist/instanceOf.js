"use strict";
{
    //Instance of Guard
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        makeSound() {
            console.log(`making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, age, sound) {
            super(name, age);
            this.sound = sound;
        }
        makeSound() {
            console.log(`${this.sound} ${this.sound}`);
        }
        play() {
            console.log(`${this.name} wanna play`);
        }
    }
    class Cat extends Animal {
        constructor(name, age, sound) {
            super(name, age);
            this.sound = sound;
        }
        makeSound() {
            console.log(`${this.sound} ${this.sound}`);
        }
        eat() {
            console.log(`${this.name} bilai wanna Eat`);
        }
    }
    const dog1 = new Dog("kutabasa", 2, "ghau");
    //   dog1.makeSound();
    dog1.play();
    const cat1 = new Cat("hablu", 3, "mewu");
    //   cat1.Eat();
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const printAnimal = (animal) => {
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
