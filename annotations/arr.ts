const carMakers: string[] = ["aaa", "ddd", "ddd"];
const dates = [new DataTransfer(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(1111);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date()];
importantDates.push("deeeed");
