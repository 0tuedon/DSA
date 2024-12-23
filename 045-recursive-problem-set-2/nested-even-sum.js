/*
Write a recursive function called nestedEvenSum.
 Return the sum of all even numbers in an object which may contain nested objects.
 var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
*/
/*
 1. Object.keys we get the root layer
 2. loop through that and check if it is an even number or another object
*/
var obj1 = {
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
  outer: 2,
};

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

function isObject(arg) {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
}
function isEven(arg) {
  if (isNaN(arg)) {
    return 0;
  }
  return arg % 2 === 0 ? arg : 0;
}
function nestedEvenSumWithForin(objArg, sum = 0) {
  // add whatever parameters you deem necessary - good luck!

  for (let key in objArg) {
    if (isObject(objArg[key])) {
      sum += nestedEvenSum(objArg[key]);
    } else {
      isEven(objArg[key]) ? (sum += objArg[key]) : 0;
    }
  }

  return sum;
}

function nestedEvenSum(objArg, sum = 0) {
  // add whatever parameters you deem necessary - good luck!
  function innerSum(obj, objArgArray) {

    for (let i = 0; i < objArgArray.length; i++) {

      if (isObject(obj?.[objArgArray[i]])) {
         sum+ innerSum(
          obj[objArgArray[i]],
          Object.keys(obj[objArgArray[i]])
        );
      } else if(isEven(obj?.[objArgArray[i]])) {
            sum += obj[objArgArray[i]]
      }
    }
  }
  innerSum(objArg, Object.keys(objArg))
  return sum
}
console.log(nestedEvenSum(obj2)); // 6
//   nestedEvenSum(obj1);
