/* 

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

function isPalindrome(s) {
  let removeExtraCharacters = s
    .replace(/[^\w]+/gi, "")
    .trim()
    .toLowerCase();
  let checkString = "";
  if (removeExtraCharacters.length < 2) {
    return true;
  }
  for (let x = 0; x < removeExtraCharacters.length; x++) {
    if (
      removeExtraCharacters[x] !==
      removeExtraCharacters[removeExtraCharacters.length - 1 - x]
    ) {
      break;
    }
    checkString += removeExtraCharacters[removeExtraCharacters.length - 1 - x];
  }
  if (checkString === removeExtraCharacters) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("race a car");
console.log(isPalindrome(""));
