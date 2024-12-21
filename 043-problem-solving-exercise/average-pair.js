/* 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/


function averagePair(arrayIntegers, average) {
  let pointer1 = 0;
  let pointer2 = arrayIntegers.length - 1;

  while (pointer1 <= pointer2) {
    if (pointer1 === pointer2) {
      pointer1++;
      pointer2 = arrayIntegers.length - 1;
    }
    if ((arrayIntegers[pointer1] + arrayIntegers[pointer2]) / 2 === average) {
      return true;
    } else {
      pointer2--;
    }
  }

  return false;
}

function averagePairBetter(arr, targetAvg) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
