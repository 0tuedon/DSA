function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let pointer1 = 0,
    pointer2 = args.length - 1;

  while (pointer1 <= pointer2) {
    if (pointer1 === pointer2) {
      pointer1 = 0;
      pointer2--;
    }
    if(pointer2 === 0) return false
    if (args[pointer1] === args[pointer2]) return true;
    pointer1++;
  }
  return false;
}

console.log(areThereDuplicates(1, 3,4, 3, 2));


// Better solution

function areThereDuplicatesBetter() {
    return new Set(arguments).size !== arguments.length;
  }

