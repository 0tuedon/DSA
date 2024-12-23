/* 
Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object that have a typeof string

*/

/* 
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
*/

function isObject(arg) {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
}

function collectStrings(objBase) {
  let objCopy = Object.assign(objBase);
  let stringArr = [];
  // Using helper recursion

  function innerCollectStrings(objCopyArg) {
    for (key in objCopyArg) {
      if (isObject(objCopyArg[key])) {
        innerCollectStrings(objCopyArg[key]);
      } else if (typeof objCopyArg[key] === "string") {
        stringArr.push(objCopyArg[key]);
      } else {
        objCopy[key] = objNew[key];
      }
    }
  }

  innerCollectStrings(objCopy);

  return stringArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
