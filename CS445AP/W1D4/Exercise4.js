"use strict";

const fibonacci = (function () {
  const memo = new Map();

  function f(n) {
    let value;

    if (memo.has(n)) {
      value = memo.get(n);
    } else {
      if (n <= 1) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }

      memo.set(n, value);
    }

    return value;
  }

  return f;
})();

console.log(fibonacci(9));

function fibonacci2(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.time("Memorized Version");

console.log(fibonacci(20));

console.timeEnd("Memorized Version");

console.time("Not Memorized Version");

console.log(fibonacci2(20));

console.timeEnd("Not Memorized Version");
