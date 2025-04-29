const palindromes = function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    const charFromStart = cleanStr[i];
    const charFromEnd = cleanStr[cleanStr.length - 1 - i];
    console.log(`Comparing ${charFromStart} with ${charFromEnd}`);
    if (charFromStart !== charFromEnd) {
      console.log(`Found a mismatch: ${charFromStart} and ${charFromEnd}`);
      return false;
    }
  }
  console.log(`${cleanStr} is a palindrome!`);
  return true;
};

palindromes("hello");

// Do not edit below this line
module.exports = palindromes;
