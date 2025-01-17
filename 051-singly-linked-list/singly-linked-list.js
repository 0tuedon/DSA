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
      this.tail = node;
      this.length++;
    } else {
      this.head = node;
      this.tail = this.head;
      this.length++;
    }
    return this;
  }
  traverse() {
    let curr = this.head;
    let traverseCount = 0;
    while (traverseCount < this.length - 2) {
      curr = curr.next;
      traverseCount++;
    }
    return curr;
  }
  pop() {
    if (!this.length) {
      return undefined;
    }
    let curr = this.traverse();
    let tempStore = curr.next;

    if (this.length == 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return curr;
    }
    curr.next = null;
    this.tail = curr;
    this.length--;
    return tempStore;
  }
  shift() {
    if (!this.head) return undefined;
    // If Value
    const temp = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = this.head;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new NewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let curr = this.head;
    let count = 0;
    while (count < index) {
      curr = curr.next;

      count++;
    }
    return curr;
  }

  set(index, value) {
    const curr = this.get(index - 1);
    const indexAfter = this.get(index + 1);
    const newNode = new NewNode(value);
    if (curr) {
      curr.next = newNode;
      newNode.next = indexAfter;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    let newNode = new NewNode(value);
    if (index === 0) {
      this.unshift(newNode);
      this.length++;
      return true;
    } else if (index === this.length) {
      this.push(newNode);
      this.length++;
      return true;
    }
    let curr = this.get(index - 1);
    const indexAfter = this.get(index);
    newNode.next = indexAfter;
    curr.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.length--;
      return this.shift();
    } else if (index === this.length - 1) {
      this.length--;
      return this.pop();
    }
    let nodeRemoved = this.get(index);
    let prevNode = this.get(index - 1);
    const indexAfter = this.get(index + 1);
    prevNode.next = indexAfter;
    this.length--;
    return nodeRemoved;
  }

  reverse() {
    let currentNode = this.head;
    this.head= this.tail;
    this.tail = currentNode

    //  two variables nextNode and PrevNode
    let nextNode = null;
    let prevNode = null;
    let count = 0
    while(count < this.length){
      nextNode = currentNode.next;
      currentNode.prev = nextNode
      currentNode.next = prevNode

      prevNode = currentNode
      currentNode = nextNode
      count++
    }
    return this
  }
}

const pushLinkedList = new LinkedList();
pushLinkedList.push(40);
pushLinkedList.push(30);
pushLinkedList.push(20);
pushLinkedList.push(10);
pushLinkedList.unshift(50);
pushLinkedList.unshift(60);
// pushLinkedList.shift()
// pushLinkedList.shift()
// pushLinkedList.shift()

// pushLinkedList.pop();
// pushLinkedList.pop();
// pushLinkedList.pop();
// pushLinkedList.pop();
pushLinkedList.reverse();
console.log(JSON.stringify(pushLinkedList));
