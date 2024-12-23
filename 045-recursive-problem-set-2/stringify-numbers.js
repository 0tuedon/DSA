/* 
Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings.
Recursion would be a great way to solve this!
The exercise intends for you to create a new object with the numbers 
converted to strings, and not modify the original. Keep the original object unchanged.

*/

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
function isObject(arg) {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
}

function stringifyNumbers(objToStringify) {
  let objCopy = Object.assign(objToStringify);

  function innerStringifyNumbers(objNew) {
    for (let element in objNew) {
      if (objNew[element] > 0 && objNew[element] !== true) {
        objNew[element] = "" + objNew[element];
      } else if (isObject(objNew[element])) {
        innerStringifyNumbers(objNew[element]);
      }
    }
  }
  innerStringifyNumbers(objCopy);
  return objCopy;
}

// colt steele solution, PS: i don't know what is different here but mine fails with one test

function stringifyNumbersColt(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
      couple: {
        somto: 25,
        tuedon: 23,
      },
    },
  },
};

console.log(JSON.stringify(stringifyNumbers(obj)));
