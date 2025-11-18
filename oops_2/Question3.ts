// Strategy interface (conceptual)
class FlyStrategy {
  fly() {}
}

// Concrete strategies
class FastFly extends FlyStrategy {
  fly() {
    console.log("Flying fast like a rocket!");
  }
}

class NoFly extends FlyStrategy {
  fly() {
    console.log("I cannot fly");
  }
}

// Duck class that uses a strategy
class Duck {
  constructor(flyStrategy) {
    this.flyStrategy = flyStrategy;
  }

  performFly() {
    this.flyStrategy.fly();
  }

  setFlyStrategy(strategy) {
    this.flyStrategy = strategy;
  }
}

// Test
const duck = new Duck(new FastFly());
duck.performFly();    // Flying fast like a rocket!

duck.setFlyStrategy(new NoFly());
duck.performFly();    // I cannot fly
