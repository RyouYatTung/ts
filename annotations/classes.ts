class Vehicle {
  drive(): void {
    console.log("aaaaaa");
  }
  honk(): void {
    console.log("bbbbbbb");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("ccccc");
  }
}

const car = new Car();
car.drive();
car.honk();
