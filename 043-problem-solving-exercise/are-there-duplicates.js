/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let pointer1 = 0,
    pointer2 = args.length - 1;

  while (pointer1 <= pointer2) {
    if (pointer1 === pointer2) {
      pointer1 = 0;
      pointer2--;
    }
    if (pointer2 === 0) return false;
    if (args[pointer1] === args[pointer2]) return true;
    pointer1++;
  }
  return false;
}

console.log(areThereDuplicates(1, 3, 4, 3, 2));

// Better solution

function areThereDuplicatesBetter() {
  return new Set(arguments).size !== arguments.length;
}
