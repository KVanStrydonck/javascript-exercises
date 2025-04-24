const convertToCelsius = function (fahrenheit) {
  let raw = (fahrenheit - 32) * (5 / 9);
  return parseFloat(raw.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  let raw = celsius * (9 / 5) + 32;
  return parseFloat(raw.toFixed(1));
};

console.log(convertToCelsius(100));
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
