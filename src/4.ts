class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(public key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  public key: Key;

  constructor() {
    this.key = new Key();
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const myHouse = new MyHouse();
const person = new Person(myHouse.key);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);

// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(protected key: Key) {}

//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door: boolean = false;
//   protected tenants: Person[] = [];
//   protected key: Key;

//   constructor() {
//     this.key = new Key();
//   }

//   abstract openDoor(key: Key): void;

//   setKey(key: Key) {
//     this.key = key;
//   }

//   getKey(): Key {
//     return this.key;
//   }

//   comeIn(person: Person): void {
//     if (this.door && this.key && person.getKey() === this.key) {
//       this.tenants.push(person);
//     }
//   }
// }

// class MyHouse extends House {
//   openDoor(key: Key): void {
//     if (this.key && key.getSignature() === this.key.getSignature()) {
//       this.door = true;
//     }
//   }
// }

// const myHouse = new MyHouse();
// const person = new Person(myHouse.getKey());

// myHouse.openDoor(person.getKey());
// myHouse.comeIn(person);
