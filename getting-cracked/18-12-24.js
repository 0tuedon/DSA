/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

function isPalindrome(x) {
  let number = x;
  let numberStore = [];
  let sumOfPalindrome = 0;

  while (number >= 1) {
    let storingNumber = Math.floor(number % 10);
    numberStore.push(storingNumber);
    number = Math.floor(number / 10);
  }

  for (let index = 0; index < numberStore.length; index++) {
    sumOfPalindrome +=
      numberStore[index] * (10 ** (numberStore.length - (index + 1)));
  }
  if (x === sumOfPalindrome) {
    return true;
  }
  return false;
}

// console.log(isPalindrome(121));

function isPalindromeBetter(x) {
  if (Math.sign(x) === -1) return false;
  let number = x;
  let sumOfPalindrome = 0;

  while (number >= 1) {
    sumOfPalindrome = sumOfPalindrome * 10 + Math.floor(number % 10);
    number = Math.floor(number / 10);
  }

  return x === sumOfPalindrome;
}

console.log(isPalindromeBetter(-121));
