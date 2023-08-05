class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }

  sort(): void {}
}

const sorter = new Sorter([20, 3, 5, 6, -4]);
sorter.sort();
