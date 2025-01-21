class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stacks {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = this.last;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.size) return null;
    // remove from this.first
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else { // 1 -> 2 -> 3 -> 4
        this.first =  this.first.next
        temp.next = null;
    }
    this.size--;
    return temp.value;
  }
}

const stackly = new Stacks();
stackly.push(10);
stackly.push(5);
stackly.push(0);
stackly.pop();
stackly.pop();

console.log(stackly)
