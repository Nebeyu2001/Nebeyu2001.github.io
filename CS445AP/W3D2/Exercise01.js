"use strict";
async function isPrime(num) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) reject({ prime: false });
      resolve({ prime: true });
    }, 500);
  });
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

console.log("start");
isPrime(4);

console.log("end");
