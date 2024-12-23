/*
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

function capitalizedWords(words) {
  let newArr = [];
  // add whatever parameters you deem necessary - good luck!
  function innerCapitalize(word, length) {
    if (length < 0) return;
    let index = words.length - length;
    newArr.push(word.toUpperCase());
    return innerCapitalize(words[index], length - 1);
  }
  innerCapitalize(words[0], words.length - 1);
  return newArr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words));
