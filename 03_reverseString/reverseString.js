const reverseString = function (inputString) {
  let result = [];

  const parts = inputString.split("");
  let currentIndex = parts.length - 1;

  for (let i = 0; i < parts.length; i++) {
    result[currentIndex] = parts[i];
    currentIndex--;
  }

  return result.join("");
};

/* 
const reverseString = function (inputString) {
  return inputString.split("").reverse().join("");
}
*/

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
