/* 
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string abcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. 
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
    let compressedString = compressed.join('');

    return compressedString
}

console.log(compressString('aabcccccaaa'))

console.log(compressString('aabccccc'))

console.log(compressString('a'))


