//  Quick Sort Helper Function
function quickSortHelper(arr, start = 0, end = arr.length) {
  let pivot = start;
  let lessNumbers = 0;

  for (let index = start + 1; index < arr.length; index++) {
    if (arr[pivot] > arr[index]) {
      lessNumbers++;
      [arr[lessNumbers], arr[index]] = [arr[index], arr[lessNumbers]];
    }
  }
  [arr[lessNumbers], arr[pivot]] = [arr[pivot], arr[lessNumbers]];
  return lessNumbers;
}

// console.log(quickSortHelper([60, 10, 8, 12, 2, 50, 1]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let splitIndex = quickSortHelper(arr, left, right);
    quickSort(arr, left, splitIndex-1);
    quickSort(arr, splitIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([60, 10, 8, 12]));
