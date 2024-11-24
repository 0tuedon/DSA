/* 
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string abcccccaaa would become a2blc5a3. 
If the "compressed" string would not become smaller than the original string, your method should return the original string. 
You can assume the string has only uppercase and lowercase letters (a - z).
*/

function compressString(s) {
  if (!s) return s; // Return if the string is empty

  let compressed = [];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      compressed.push(s[i - 1] + count);
      count = 1;
    }
  }
  compressed.push(s[s.length - 1] + count);
  let compressedString = compressed.join("");

  return compressedString;
}

// Erons Solution

const compress = (string) => {
  let compressed = [];
  let currStr = "";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    const value = string[i];
    if (value == currStr) {
      count++;
      compressed[compressed.length - 1] = count;
    } else {
      count = 1;
      compressed.push(value, count);
      currStr = value;
    }
  }

  const compressedStr = compressed.join("");

  return compressedStr > string ? string : compressedStr;
};


/* 

2. 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(strs) {
  let prefix = strs[0];
  let currentIndex = 1;

  while (currentIndex < strs.length) {

    while (!strs[currentIndex].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
    currentIndex = currentIndex + 1;
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/* 


*/
