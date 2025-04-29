const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((accumulator, current) => accumulator * current);
};

const power = function (base, factor) {
  return base ** factor;
  /* return Math.pow(base, factor); */
};

const factorial = function (n) {
  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
