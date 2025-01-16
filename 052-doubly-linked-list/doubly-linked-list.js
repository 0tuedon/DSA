// Setup
class NewNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
  push(val) {
    let newNode = new NewNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      poppedNode.prev = null;
      this.length--;
      return poppedNode;
    }
    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    let newNode = new NewNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return null;
    // find middle
    let mid = Math.floor(this.length / 2);

    if (index <= mid) {
      let count = 0;
      let node = this.head;
      while (count < index) {
        node = node.next;
        count++;
      }
      return node;
    } else {
      let count = this.length - 1;
      let node = this.tail;
      while (index <= count) {
        node = node.prev;
        count--;
      }
      return node;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index >= this.length || index < 0) return false;
    let foundNode = this.get(index - 1);
    let newNode = new NewNode(val);
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length - 1) {
      this.push(val);
    } else {
      newNode.prev = foundNode; // 1 <-> 2 <-3->  <-> 4 <-> 5
      newNode.next = foundNode.next;
      foundNode.next = newNode;
      this.length++
    }
    return true;
  }
  remove(index){
    if (index >= this.length || index < 0) return false;
    if(index == 0){
      this.shift()
    }
    else if(index === this.length - 1) {
        this.pop()
    }
    else {
      let foundNode = this.get(index)
      foundNode.prev.next =  foundNode.next
      this.length--;
    }

    return true
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
// doublyLinkedList.pop()
// doublyLinkedList.shift();
// doublyLinkedList.unshift(20);
// doublyLinkedList.unshift(30);
// 30 <-> 20 <-> 10 <-> 5
// doublyLinkedList.get(3);
// console.log(doublyLinkedList.set(1, 456));
doublyLinkedList.insert(2,3);
// doublyLinkedList.remove(2)
console.log(doublyLinkedList.head.next.next);
// 1 <-> 2 <-3->  <-> 4 <-> 5
// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push(20);
// doublyLinkedList.push(10);
// console.log(doublyLinkedList)
