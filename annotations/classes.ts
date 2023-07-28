class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("bbbbbbb");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("ccccc");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
