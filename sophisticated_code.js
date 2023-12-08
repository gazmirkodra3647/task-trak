/* sophisticated_code.js */

// This code demonstrates a complex algorithm for calculating prime numbers
// It uses a combination of sieve and trial division methods

function generatePrimeNumbers(n) {
  let primes = [];
  let sieve = new Array(n+1).fill(true);
  
  sieve[0] = false;
  sieve[1] = false;
  
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }
  
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

function printPrimes(primes) {
  for (let prime of primes) {
    console.log(prime);
  }
}

// Main program
let limit = 1000;
let primes = generatePrimeNumbers(limit);

console.log("Prime numbers up to", limit);
printPrimes(primes);
