// Program to find the factorial of a number
function factorial(x) {

  // if number is 0
  if (x === 0) {
    // There should always be a condition to break the recursive call
    return 1;
  }

  // If number is positive
  else {
    return x * factorial(x - 1);
  }
}

const num = 4;

// Calling factorial() if num is non-negative
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

// Output:
// The factorial of 4 is 24
