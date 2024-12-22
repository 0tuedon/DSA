/* 
Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)

*/

function findLongestSubstring(stringArg) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = 0;
  let maxLen = 0;
  let tempNum = 0;
  let setStore = {};
  while (end <= stringArg.length) {
    if (setStore[stringArg[end]] || setStore[stringArg[end]] === 0) {
      storedIndex = setStore[stringArg[end]];
      start = storedIndex + 1;
    }
    setStore[stringArg[end]] = end;
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return maxLen;
}

function findLongestSubstringCorrection(stringArg) {
  let start = 0; // Start of the sliding window
  let maxLen = 0; // Maximum length of distinct substring
  let seen = {}; // Object to store the last seen index of characters

  for (let end = 0; end < stringArg.length; end++) {
    const char = stringArg[end];

    // If the character is already in the seen object and within the current window
    if (char in seen && seen[char] >= start) {
      start = seen[char] + 1; // Move the start to the right of the last seen index
    }

    // Update the last seen index of the character
    seen[char] = end;

    // Calculate the current window length and update maxLen
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
console.log(findLongestSubstring("thisisawesome"));
