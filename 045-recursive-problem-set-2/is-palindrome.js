/*
Write a recursive function called isPalindrome which returns true if the string passed 
to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
*/

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  let palindromeStr = "";
  function innerPalindrome(str, length) {
    if (length < 1) return "";
    palindromeStr += str[length - 1];
    return innerPalindrome(str, length - 1);
  }
  innerPalindrome(str, str.length);
  return str === palindromeStr;
}


console.log(isPalindrome('amanaplanacanalpanama'))