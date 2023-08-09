export class Characters {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleString() > this.data[rightIndex].toLocaleLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");

    const leftHeade = characters[leftIndex];
  }
}
