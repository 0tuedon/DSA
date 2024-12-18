/* 
Write a Function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an array that includes 
both values that sum to zero or undefined if a pair does not exist
*/

// Find the first pair where the pair  is zero

function sumZero(integers) {
  if (Array.isArray(integers)) {
    let pointer_a = 0; // first index in an array
    let pointer_b = integers.length - 1; // last index in an array

    while (integers[pointer_a] + integers[pointer_b] !== 0) {
      if (pointer_a === pointer_b) {
        pointer_a += 1;
        pointer_b = integers.length;
      }
      pointer_b -= 1;
      if (integers[pointer_a] === 0 && integers[pointer_a] === 0)
        return undefined;
    }

    return [integers[pointer_a], integers[pointer_b]];
  }

  return undefined;
}

console.log(sumZero([-2,-1, 0, 1, 2, 3]));


