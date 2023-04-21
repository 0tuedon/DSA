/*  
write a function that calculates the sum of all 
numbers from 1 up to and some number n
*/

// takes roughly 2 seconds to execute
const sumAllNumbers = (num) => {
  let aN = 1;
  for (i = 2; i <= num; i++) {
    aN = aN + i;
  }
    // To show in console   
  console.log(aN);
  return aN;
};
sumAllNumbers(1000000000);


// colt steele solution 
// takes roughly 0.001> seconds to execute
function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  
  var time1 = performance.now();
  // addUpTo(1000000000);

  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
// Big 0 Notation check
