const leapYears = function (year) {
  let divisibleByHundred = year % 100 === 0;
  let divisibleByFourHundred = year % 400 === 0;
  let divisibleByFour = year % 4 === 0;

  if (!divisibleByFour) {
    return false;
  }

  if (divisibleByHundred && !divisibleByFourHundred) {
    return false;
  }

  return true;
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
