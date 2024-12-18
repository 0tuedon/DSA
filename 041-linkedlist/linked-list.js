// Create Linked List
/* 
- Spaced Repetition
-
- Active Recall
*/

// let obj1 = { a:"Test"}
// let obj2 = obj1
// obj2 = "food"

// console.log("1",obj1)
// console.log("2", obj2)

//creating pur first linked list
// make a linked list that 10-->5-->16->20-> null;
//  10-->2->5-->16->20-> null;

class SinglyLinkedList {
  // We want to create a pointer to this value

  constructor(value) {
    this.linkHead = {
      value,
      next: null,
    };
    this.linkTail = this.linkHead;
    this.length = 1;
  }

  //  Add a value after the last element on linkedList
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    //  because tail is always going to be the last element in the link list and it usually doesn't have any pointers
    this.linkTail.next = newNode;
    // since we assigned
    this.linkTail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.linkHead,
    };
    this.linkHead = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = {
      value,
      next: null,
    };
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index === this.length) {
      this.append(value);
      return this;
    }

    let counter = 0;
    let currentNode = this.linkHead;

    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    //  we want to set the new node to pointer to after the index where we would insert it
    newNode.next = currentNode.next;
    // and have the node before it point to the newNode
    currentNode.next = newNode;
    return this.linkHead;
  }

  delete(index) {
    if (index >= this.length) return this.linkHead;
    let counter = 0;
    let currentNode = this.linkHead;

    while (counter <= index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    let deletingValue;
    // We want to hold the actual value that we want to delete
    if (index === 0) {
      deletingValue = currentNode;
      let holdPointer = deletingValue.next;
      // then set the node before the deleted value to point to the holder after the deleted value;
      currentNode = holdPointer;
    } else {
      deletingValue = currentNode.next;
      let holdPointer = deletingValue.next;
      // then set the node before the deleted value to point to the holder after the deleted value;
      currentNode.next = holdPointer;
    }

    return this.linkHead;
  }
}

const singlyLL = new SinglyLinkedList(10);
// console.log("10-->2-->8-->5-->16->20-->null", "linkedlist");
singlyLL.append(8);
singlyLL.append(5);
singlyLL.append(16);
singlyLL.append(20);
singlyLL.insert(1, 2);
singlyLL.delete(100);

// console.log(JSON.stringify(singlyLL.linkHead));

