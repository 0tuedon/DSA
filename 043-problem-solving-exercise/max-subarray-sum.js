/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum(integers, frequency) {
  let maxNum = 0;

  if (frequency > integers.length) return null;
  for (let i = 0; i < frequency; i++) {
    maxNum += integers[i];
  }
  let tempNum = maxNum;
  for (let i = frequency; i < integers.length; i++) {
    tempNum = tempNum + integers[i] - Math.abs(integers[i - frequency]);

    if (tempNum > maxNum) {
      maxNum = tempNum;
    }
  }
  return maxNum;
}

console.log(maxSubarraySum([100,200,300,400], 2));
