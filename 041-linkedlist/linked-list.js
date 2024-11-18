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
// make a linked list that 10-->5-->16


let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

//  Creating a Linked List 

class SinglyLinkedList {
  constructor(value){
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value){
    const newNode = {
      value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value){
    const newNode =  {
      value,
      next:this.head
    }
    this.head = newNode
    this.length++;
    return this
  }
}

const testSingleList = new SinglyLinkedList(20)
console.log(testSingleList.prepend(3))
