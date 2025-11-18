// Parent class
class Duck {
  swim() {
    console.log("I know swimming");
  }
}

// Child class
class MallardDuck extends Duck {}

const d = new MallardDuck();
d.swim();


class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("I cannot fly");
  }
}

const b = new Bird();
const p = new Penguin();

b.fly();
p.fly();


// Simulated Interface (not enforced in JS)
// interface IDuck {
//   swim();
//   fly();
//   sound();
// }

class ToyDuck {
  swim() {
    console.log("Can float on water");
  }

  fly() {
    console.log("Cannot fly");
  }

  sound() {
    console.log("Cannot sound");
  }
}

const t = new ToyDuck();
t.fly();
t.sound();
t.swim();
