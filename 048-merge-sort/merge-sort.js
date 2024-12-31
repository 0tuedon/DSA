//  Merge two sorted arrays into the order
// function mergeArrays(a, b) {
//   let pointerA = 0;
//   let pointerB = 0;
//   let sortedArray = [];

//   while (pointerA < a.length && pointerB < b.length) {
//     if (pointerA >= a.length && pointerB < b.length) {
//       sortedArray.push(b[pointerB]);
//       pointerB++;
//     }
//     if (pointerB >= b.length && pointerA < a.length) {
//       sortedArray.push(a[pointerA]);
//       pointerA++;
//     } else if (a[pointerA] < b[pointerB]) {
//       sortedArray.push(a[pointerA]);
//       pointerA++;
//     } else if (a[pointerA] === b[pointerB]) {
//       sortedArray.push(a[pointerA], b[pointerB]);
//       pointerA++;
//       pointerB++;
//     } else {
//       sortedArray.push(b[pointerB]);
//       pointerB++;
//     }
//   }
//   return sortedArray;
// }

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}

// console.log(mergeArrays([2, 14,99, 100],[1, 10, 50]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log(right, "right",)
  return merge(left, right);
}

console.log(mergeSort([2, 14, 99, 100, 50, 1, 6]));
