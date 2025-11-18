class PolyDuck {
  fly() {
    console.log("Base duck flying");
  }
}

class DesiDuck extends PolyDuck {
  fly() {
    console.log("DesiDuck flies at 10kmph");
  }
}

class VidesiDuck extends PolyDuck {
  fly() {
    console.log("VidesiDuck flies at 20kmph");
  }
}

class SmartDuck extends PolyDuck {
  fly() {
    console.log("SmartDuck flies at 50kmph");
  }
}

function makeDuckFly(duck) {
  duck.fly();
}

const d1 = new DesiDuck();
const d2 = new VidesiDuck();
const d3 = new SmartDuck();

makeDuckFly(d1);
makeDuckFly(d2);
makeDuckFly(d3);


class User {
  public name: string;
  private orgCode = "DuckCorp";
  protected role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  introduce() {
    console.log(`I am ${this.name} from ${this.orgCode}`);
  }
}

class Manager extends User {
  getRole() {
    console.log(this.role);
  }
}

const u = new User("Daffy", "Viewer");
u.introduce();        // I am Daffy from DuckCorp

const m = new Manager("Donald", "Manager");
m.getRole();          // Manager

// Try this and TypeScript will throw an error:
// console.log(u.orgCode);  // ❌ Property 'orgCode' is private
