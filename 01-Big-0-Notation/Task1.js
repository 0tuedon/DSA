//  write a function that accepts a string input and returns reverse copy Js
const reverseCopy = (str) => {
  let a = [];
  for (i = 0; i < str.length; i++) {
    a.push(str[i]);
  }
  const r =  a.reverse()
//   just to show the output
  console.log(r)
  return r.join("").toLowerCase();
};
reverseCopy("Love");
// Big 0 Notation check
