// Interview
// 1 -> 2 -> 3 -> 4;
// empty []
// while .next
// [1,2,3,4] pop
// loop only when there is something array
// this.head = array.pop()
// .next == new Node(array.pop());
// .next = new Node(array.pop());
// this.val, this.next

// testCase - > ; 1 -> 2 -> 3

function reverseLinkedList(head) {
  // {val:1 next: ListNode}
  let storeVal = [];
  let current = head; // {val:1 next: ListNode}

  while (current.val) {
    storeVal.push(current.val); // [1,2,3]
    current = current.next;
  }

  //   storeVal = [1,2,3,4]
  let list = ListNode(storeVal.pop());
  let newCurr = list.next; // {val:0, next:null}

  while (storeVal.length) {
    newCurr = ListNode(storeVal.pop());
    newCurr = newCurr.next;
  }

  return list;
}

// Two values
// left, right
// let max = 0;
// while(left <= right)
// arr[left] arr[right]
// max = Max(Math.min(arr[left],arr[right]) * diff, max)
// [1,4,3]
// [1,6,4,7]

function returnMaxContainerStore(containers) { // [1,2,3]
  let left = 0;  // 0
  let right = containers.length - 1; // 2
  let max = 0; // 0

  while (left < right) { 
    let diff = Math.abs(left - right); // 2,1
    let leftVal = containers[left]; // 1,2
    let rightVal = containers[right]; // 3,3
    max = Math.max(Math.min(leftVal, rightVal) * diff, max); // 1 * 2 = 2 max = 2, max = 2;
    if (leftVal > rightVal) {
      right--; 
    } else if (leftVal < rightVal) {
      left++; // 1, 2
    } else {
      left++;
    }
  }

  return max; // 2
}
