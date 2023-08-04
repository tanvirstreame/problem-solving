let n = 10;

function decrement(i) {
  if (i < 0) {
    // There should always be a condition to break the recursive call
    return;
  }

  console.log("Recursive", i)
  return decrement(i - 1)
}

decrement(n);

// Output:
// Recursive 10
// Recursive 9
// Recursive 8
// Recursive 7
// Recursive 6
// Recursive 5
// Recursive 4
// Recursive 3
// Recursive 2
// Recursive 1
// Recursive 0
