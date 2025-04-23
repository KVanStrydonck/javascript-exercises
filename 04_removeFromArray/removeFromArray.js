const removeFromArray = function (inputArray, ...remove) {
  const elementsToRemove = Array.from(remove);

  let res = inputArray.filter((n) => !elementsToRemove.includes(n));
  console.log(res);

  return res;
};

const removeFromArray2 = function (inputArray, ...remove) {
  const elementsToRemove = Array.from(remove);

  let res = [];

  // Loop through the input array
  for (let i = 0; i < inputArray.length; i++) {
    const current = inputArray[i];

    // Check if current element is absent from array of elements to remove
    let shouldInclude = true;
    // Loop through the elements to remove
    for (let j = 0; j < elementsToRemove.remove; j++) {
      if (current === elementsToRemove[j]) {
        // If the current input array element we're checking is present in the elements to remove array, skip
        shouldInclude = false;
        break;
      }
    }

    // Push if not found in elements to remove array
    if (shouldInclude) {
      res.push(current);
    }

    // Move to the next element of input array
  }

  return res;
};

const removeFromArray3 = function (inputArray, ...remove) {
  let result = [];

  inputArray.forEach((item) => {
    if (!remove.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

removeFromArray3([1, 2, 2, 4, 5], 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
