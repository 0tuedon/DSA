// Implement Singly and Doubly LinkedList

/*
1 -> 2 -> 3-> 4 (1), pop, O(n) shift O(1)  (1)   (n)
1 <-> 2 <-> 3 <-> 4  pop (1) shift O(1) unshift O(1)  this.length  7 8 (n)

- search

array -> O(n) , hashMap O(1)  ,  linkedlist O(n)

unshift
O(n),  O(1) , O(1)

0 - Tolu 1- sam  
*/
class NewNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new NewNode(val);
    if (this.length === 0) {
      // 1
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode = this.tail;
    }
    this.length++;
    return this;
  }


  pop(){
    if(!this.length) return undefined;
    if(this.length === 1) {
        this.head = null;
        this.tail = null;
    }
    else { // 1 -> 2
        let count = 0
        let node = this.head
        while(count <= this.length){
            node = node.next
            count++;
        }

    }
  }
}

let singlyTest = new SinglyLinkedList();
singlyTest.push(20);
singlyTest.push(10);
console.log(JSON.stringify(singlyTest.head));
