/* 
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/

/* Thought Process
length as an iteration recursively
*/
function flatten(arrayArg) {
  let newArray = [];
  for (let i = 0; i < arrayArg.length; i++) {
    if (Array.isArray(arrayArg[i])) {
      newArray = newArray.concat(flatten(arrayArg[i]));
    }
    else{
        newArray.push(arrayArg[i]);
    }
  }
  return newArray;
}

console.log(flatten([[[1]], 2, 3, [4]]));
