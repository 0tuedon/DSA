/* 
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array 
The frequency of values must be the same.

Examples 

same([1,2,3],[4,1,9]) // returns true
same([1,2,3],[1,9]) // returns false
same([1,2,1],[4,4,1]) // returns false
*/

/*
Thought process:
2 inputs of type array of numbers 
output is a type of boolean
if they are arrays.
if len of array1 is not equal to len of array2
freqCount1 = {}
freqCount2 = {}
loop over arr1 and save the key as the number and value as the count also save the squared in 
freq2 and the
loop over arr2 and check 
*/

function same(array1, array2) {
  let freqCount1 = {};
  let freqCount2 = {};
}

/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase or name formed by rearranging the letters of another, 
such as cinema formed from iceman
*/

/*
isAnagram
input would 2 strings
check if they are strings
check if they are same length
check if they are the same word
loop over string a and set a counter with an hashmap
let a = {c:1, i:1 ...};
let b = {i:1 , c; 1}

loop over string a  check if the count of pointer_a === to count pointer b;
a[c] === b[c];
*/

function isAnagram(stringA, stringB) {
  let pointer_a = {};
  let pointer_b = {};

  if (typeof stringA !== "string" || typeof stringB !== "string") {
    return false;
  }

  if (stringA.length !== stringB.length) {
    return false;
  }

  if (stringA === stringB) {
    return false;
  }

  for (string in stringA) {
    if (pointer_a[string]) {
      pointer_a[string] = pointer_a + 1;
    } else {
      pointer_a[string] = 1;
    }
  }
  for (string in stringB) {
    if (pointer_b[string]) {
      pointer_b[string] = pointer_b + 1;
    } else {
      pointer_b[string] = 1;
    }
  }

  for (string in stringA) {
    if (pointer_a[string] !== pointer_b[string]) {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram("an", "anfff"));

