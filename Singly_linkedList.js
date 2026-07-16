class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const list = new LinkedList();

const first = new Node(10);
const second = new Node(20);
const third = new Node(30);

// Connect nodes
list.head = first;
first.next = second;
second.next = third;

console.log(list);