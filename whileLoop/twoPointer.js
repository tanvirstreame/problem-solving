// Example: array[i] + array[j] = 11 
// You need to Find [i, j]


let array = [1, 4, 5, 6, 7, 10, 22, 66, 71];

const isPairSum = (array, value) => {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] + array[j] === value) {
      return [i, j]
    }

    else if (array[i] + array[j] < value) {
      i++; // if value is greater, increment from the first node / point
    }
    else {
      j--; // if value is lesser, decrement from the last node / point
    }
  }
}

console.log(isPairSum(array, 11)) // Output: [0, 5]
