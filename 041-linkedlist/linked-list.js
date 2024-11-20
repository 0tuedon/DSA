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
class NewNode {
  constructor(value){
    this.value = value
    this.next = null
  }
}
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
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail =  newNode
    this.length++
    return this
  }
  prepend(value){
    const newNode = new NewNode(value)
    newNode.next = this.head
    this.head = {...newNode}
    this.length++;
    return this
  }
  insert (index, value){
    let currentObj = this.head.next
    for(let i= 0; i < index; i++){
      currentObj = currentObj.next
      if(i === index-1){
        
      }
    }
    return this
  }

}

const testSingleList = new SinglyLinkedList(20)



// After Learning about Insert

class LinkedList {
  constructor(value){
    this.head ={
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    // to the last of the linked list
      let newNode = {
        value,
        next: null
      }
      this.tail.next =  newNode
      //  we should have only one tail
      this.tail = newNode
      this.length++
      return this
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head
    }
    this.head = newNode
    this.length++;
    return this
  }

 #traverseList(index) {
    let counter = 0;
    let currentNode = this.head

    while (counter !== index){
      currentNode = currentNode.next

      counter ++
    }
  return currentNode;
  }
  insert (index, value){
    const newNode = {
      value,
      next: null
    }
   let firstToIndex  =   this.#traverseList(index -1)
   const holdPointer = firstToIndex.next  
   firstToIndex.next = newNode
   newNode.next = holdPointer
    console.log(JSON.stringify(this))
  }
}

const afterLearningLinkedList = new LinkedList(20)
afterLearningLinkedList.append(13)
afterLearningLinkedList.append(12)
afterLearningLinkedList.prepend(8)
afterLearningLinkedList.insert(2,15)