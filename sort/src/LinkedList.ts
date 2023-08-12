class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("index out of bounds");
    }

    let conter = 0;
    let node = this.head;
    while (node) {
      if (conter === index) {
        return node;
      }

      conter++;
      node = node.next;
    }

    throw new Error("index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftIndex = this.at(leftIndex);
    const rightIndex = this.at(rightIndex);
  }
}
