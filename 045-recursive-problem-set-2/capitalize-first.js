/*
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

/*
Process:
1. For loop
2. get the first letter of each string and capitalize and then slice to add back to the string
3. return the new array
*/

function capitalizeFirstWithoutRecursion(lettersArray) {
  let newArr = [];
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < lettersArray.length; i++) {
    let currString = "";
    lettersArray[i]; // "s"
    if (lettersArray[i][0]) {
      currString += lettersArray[i][0].toUpperCase() + lettersArray[i].slice(1);
      newArr.push(currString);
    }
  }

  return newArr;
}

function capitalizeFirst(lettersArray) {
  // add whatever parameters you deem necessary - good luck!
  function innerCapitalize(innerLetters, length) {
    let index = lettersArray.length - (length-1);
    if(length <= 1) return [innerLetters[0].toUpperCase() + innerLetters.slice(1)]
    return [
      innerLetters[0].toUpperCase() + innerLetters.slice(1),
      ...innerCapitalize(lettersArray[index], length - 1),
    ];
  }
  innerCapitalize(lettersArray[0], lettersArray.length);
  return innerCapitalize(lettersArray[0], lettersArray.length);
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
// capitalizeFirst(['car','taco','banana'])