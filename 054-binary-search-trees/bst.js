//

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val); // 10, 20
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;

    while (true) {
      if (val === curr.value) return undefined;
      if (val > curr.value) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      } else {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      }
    }
  }

  find(val){
    let current = this.root
    while(true){
      if(val === current.value) return true;
      if(val > current.value){
        if(current.right === null){
          return false;
        }
        current = current.right
      }
      else{
        if(current.left === null){
          return false;
        }
        current = current.left
      }
    }
  }
}

const tree = new BSTTree();

// tree.root = new Node(10);
// tree.root.right = new Node(14);
// tree.root.left = new Node(6);
// tree.root.left.right = new Node(7);

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
