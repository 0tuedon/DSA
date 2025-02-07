class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Queue {
    constructor(){
        this.start = null;
        this.end = this.start;
        this.size = 0
    }
    // for enqueue we are going to do a push
    enqueue(val){
        let newNode = new Node(val);
        if(this.size === 0){
            this.start = newNode;
            this.end = this.start;
        }
        else { // 1 -> 2 -> 3 
                let temp = this.end;
                this.end.next = newNode;
                this.end = newNode
        }
        return ++this.size
    }

    dequeue(){
        if(!this.size) return undefined;
        let temp = this.start
        if(this.size === 1) {
            this.start = null
            this.end = this.start;
        }
        else { // 1 -> 2 -> 3 -> 4
            this.start = this.start.next
            temp.next = null
        }
        this.size--;
        return temp
    }
}

const queue = new Queue();
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.dequeue()

console.log(queue)