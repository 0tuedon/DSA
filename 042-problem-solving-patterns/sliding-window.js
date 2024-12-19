/*  
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n  consecutive elements in the array
*/

function maxSubArraySum(integerArray, n) {
  let maxSum = 0;
  let startIndex = 0;
  while (startIndex < integerArray.length) {
    if (startIndex + n >= integerArray.length + 1) {
      return maxSum;
    }
    let sumCurrent = 0;
    integerArray
      .slice(startIndex, startIndex + n)
      .map((integer) => (sumCurrent += integer));
    if (sumCurrent > maxSum) {
      maxSum = sumCurrent;
    }
    startIndex++;
  }
}

// console.log(maxSubArraySum([1, 2, 3, 4, 5], 3));

// Solving with sliding window

function maxSubArraySumSliding(integerArray, n){
    let maxSum = 0;
    for(let i = 0; i < n; i++){
      maxSum += integerArray[i]
    }

   for (let index = n; index < integerArray.length; index++) {
        let tempSum =  maxSum - integerArray[index - n] + integerArray[index]
        if(tempSum > maxSum){
        maxSum = tempSum
        }
   }
   return maxSum;
}


console.log(maxSubArraySumSliding([1, 2, 3, 4, 5], 3));