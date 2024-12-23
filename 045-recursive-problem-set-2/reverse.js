/* 
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

function reverse(str) {
  let baseString = "";
  let length = str.length;

  const innerReverse = (baseStr, strLength) => {
    if (strLength < 1) return baseStr;
    baseString += baseStr[strLength - 1];
    return innerReverse(baseStr, strLength - 1);
  };
  innerReverse(str, length);
  return baseString;
}

