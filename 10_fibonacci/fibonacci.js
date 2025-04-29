const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }

  if (n < 1) {
    return 0;
  }

  n = Number(n);

  if (n <= 2) {
    return 1;
  }

  previousNum = 1;
  currentNum = 1;
  result = 0;
  for (let i = 1; i < n - 1; i++) {
    result = previousNum + currentNum;
    console.log(`Result: ${result}`);
    previousNum = currentNum;
    console.log(`Previous: ${previousNum}`);
    currentNum = result;
    console.log(`Current: ${currentNum}`);
    console.log(`Iterations: ${i + 1}`);
  }
  return result;
};

function fib(n) {
  if (n < 0) {
    return;
  }
  const f = [0, 1];
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

function fib2(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

console.log(fib2(6));

// Do not edit below this line
module.exports = fibonacci;
