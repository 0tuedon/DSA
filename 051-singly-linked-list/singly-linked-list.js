class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new NewNode(value);
    if (this.length) {
      this.tail.next = node;
      this.tail = node
      this.length++;
    } else {
      this.head = node;
      this.tail = this.head;
      this.length++
    }
  }
}

const pushLinkedList = new LinkedList();
pushLinkedList.push(30);
pushLinkedList.push(20);
console.log(pushLinkedList);
