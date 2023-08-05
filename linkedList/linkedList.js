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

  add(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
}

const linkedList = new LinkedList();

const array = [1, 2, 4, 5, 6, 7];

// Adding data using for loop
for (let i = 0; i < array.length; i++) {
  linkedList.add(array[i]);
}

linkedList.add(9);
linkedList.add(10);

console.log(linkedList);

// Output:
// LinkedList {
//   head: Node { data: 10, next: Node { data: 9, next: [Node] } }
// }

const arr = [];

let current = linkedList.head;

// looping data
while (current) { // while not null
  console.log("data", current.data);
  arr.push(current.data)
  current = current.next;
}

console.log(arr);

// Output:
// [
//   10, 9, 7, 6,
//    5, 4, 2, 1
// ]
