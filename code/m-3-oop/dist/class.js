"use strict";
{
    //3-1: Class and object
    class Animal {
        constructor(name, sound) {
            this.name = name;
            this.sound = sound;
            this.makeSound();
        }
        makeSound() {
            console.log(`${this.sound} ${this.sound}`);
        }
    }
    // const a1 = new Animal("Dog", "GHeu");
    // const a2 = new Animal("cat", "Mewo");
}
{
    class Animal {
        constructor(name, sound) {
            this.name = name;
            this.sound = sound;
            this.makeSound();
        }
        makeSound() {
            console.log(`${this.sound} ${this.sound}`);
        }
    }
    const a1 = new Animal("Dog", "GHeu");
    const a2 = new Animal("cat", "Mewo");
}
