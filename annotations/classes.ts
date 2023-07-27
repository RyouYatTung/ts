class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("bbbbbbb");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log("ccccc");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car("red");
car.startDrivingProcess();
