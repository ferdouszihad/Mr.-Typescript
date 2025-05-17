{
  //3-1: Class and object
  class Animal {
    public name: string;
    private sound: string;

    constructor(name: string, sound: string) {
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
    constructor(public name: string, private sound: string) {
      this.makeSound();
    }
    makeSound() {
      console.log(`${this.sound} ${this.sound}`);
    }
  }
  const a1 = new Animal("Dog", "GHeu");
  const a2 = new Animal("cat", "Mewo");
}
