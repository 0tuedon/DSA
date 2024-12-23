/* 
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
*/

const productOfArray = (arrayOfNums) => {
  if (arrayOfNums.length === 0) return 1;
  return arrayOfNums[0] * productOfArray(arrayOfNums.slice(1));
};

console.log(productOfArray([1,2,3,10]))