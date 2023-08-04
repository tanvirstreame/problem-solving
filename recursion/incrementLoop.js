let n = 10;
let index = 0;

function increment(i) {
  if (i > 10) {
    // There should always be a condition to break the recursive call
    return;
  }

  console.log("Recursive", i)
  return increment(i + 1)
}

increment(index);

// Output:
// Recursive 0
// Recursive 1
// Recursive 2
// Recursive 3
// Recursive 4
// Recursive 5
// Recursive 6
// Recursive 7
// Recursive 8
// Recursive 9
// Recursive 10
