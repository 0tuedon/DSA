function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let noSwap = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        noSwap = false;
        min = j ;
      }
    }
    if (!noSwap) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([22, 11, 1, 40, 2]));
