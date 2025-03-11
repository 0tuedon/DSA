class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    if (this.values.length <= 1) return;
    let length = this.values.length;
    let idx = length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (parentIdx >= 0) {
      if (this.values[idx] > this.values[parentIdx]) {
        this.swap(this.values, idx, parentIdx);
      }
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  remove() {
    if(this.values.length == 1) return this.values.pop()
    const removedValue = this.values.shift();

    const lastEnteredValue = this.values.pop();
    this.values.unshift(lastEnteredValue);

    this.bubbleDown();
    return removedValue;
  }
  bubbleDown() {
    let currElement = this.values[0]; // L 2n+1, R 2n+2
    let currIndex = 0; // L 2n+1, R 2n+2
    let leftChild = 2 * currIndex + 1;
    let rightChild = 2 * currIndex + 2;

    while (this.values[leftChild]) {
      if (
        currElement < this.values[leftChild] &&
        currElement < this.values[rightChild]
      ) {
        if (this.values[leftChild] < this.values[rightChild]) {
          this.swap(this.values, currIndex, rightChild);
          currIndex = rightChild
          leftChild = 2 * currIndex + 1;
          rightChild = 2 * currIndex + 2;
        } else {
          this.swap(this.values, currIndex, leftChild);
          currIndex = leftChild
          leftChild = 2 * currIndex + 1;
          rightChild = 2 * currIndex + 2;
        }
      } else if (currElement < this.values[leftChild]) {
        this.swap(this.values, currIndex, leftChild);
        currIndex = leftChild
        leftChild = 2 * currIndex + 1;
        rightChild = 2 * currIndex + 2;
      } else if (currElement < this.values[rightChild]) {
        this.swap(this.values, currIndex, rightChild);
        currIndex = rightChild
        leftChild = 2 * currIndex + 1;
        rightChild = 2 * currIndex + 2;
      } else {
        return;
      }
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
heap.insert(55);
console.log(heap)
heap.remove()
console.log(heap);
