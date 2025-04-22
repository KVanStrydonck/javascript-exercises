const repeatString = function (inputString, repeatAmount) {
  if (repeatAmount < 0) {
    return "ERROR";
  }

  let result = "";

  for (let i = 0; i < repeatAmount; i++) {
    result += inputString;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
