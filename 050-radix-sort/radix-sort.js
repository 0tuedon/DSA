function returnIndexDigit(num, index) {
  return Math.floor(num / Math.pow(10, index)) % 10;
}

// console.log(returnIndexDigit(3444,2))

function countMaxDigits(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num) + 1);
}

function getMaxDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, countMaxDigits(nums[i]));
  }

  return max;
}

// console.log(countMaxDigits(0));

function radixSort(nums) {
  const highestNum = getMaxDigits(nums);
  console.log(highestNum)
  for (let k = 0; k < highestNum; k++) {
    let numBuckets = Array.from({ length: 10 }, ()=> []);
    for (let i = 0; i < nums.length; i++) {
      let bucket = returnIndexDigit(nums[i], k);
      let currBucket = numBuckets[bucket]
      currBucket.push(nums[i])
    }
    nums = [].concat(...numBuckets);

  }

  return nums;
}

console.log(radixSort([0, 2, 1, 5, 3, 6, 8, 7]));

// Big o = O(nk)
