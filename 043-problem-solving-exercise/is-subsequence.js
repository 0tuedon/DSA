/* 
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(needle, haystack) {
  // good luck. Add any arguments you deem necessary.
  let needlePointer = 0,
    haystackPointer = 0;
  let testEx = "";
  while (haystackPointer <= haystack.length - 1) {
    if (needle[needlePointer] !== haystack[haystackPointer]) {
      haystackPointer++;
    } else {
      testEx += haystack[haystackPointer];
      needlePointer++;
      haystackPointer++;
    }
  }
  return testEx === needle;
}

console.log(isSubsequence("sing", "sing"));

// isSubsequence('abc', 'abracadabra');

function isSubsequenceBetter(needle, haystack) {
  let needlePointer = 0,
    haystackPointer = 0;

  while (haystackPointer < haystack.length) {
    if (needle[needlePointer] === haystack[haystackPointer]) {
      needlePointer++;
    }
    haystackPointer++;
  }

  return needlePointer === needle.length;
}
