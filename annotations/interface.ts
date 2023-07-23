interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() {
    return "eee";
  },
};

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle2 = (vehicle: Vehicle): void => {
  vehicle.summary();
};

printVehicle2(oldCivic);
printVehicle2(drink);
