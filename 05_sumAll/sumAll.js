const sumAll = function (begin, end) {
  if (begin < 0 || end < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(begin) || !Number.isInteger(end)) {
    return "ERROR";
  }

  if (isNaN(begin) || isNaN(end)) {
    return "ERROR";
  }

  if (begin > end) {
    [begin, end] = [end, begin];
  }

  let sum = 0;

  for (let i = begin; i <= end; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
