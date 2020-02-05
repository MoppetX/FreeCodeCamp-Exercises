// Recursion is the concept that a function can be expressed in terms of itself. To help understand this,
// start by thinking about the following task: multiply the elements from 0 to n inclusive in an array to
// create the product of those elements.
//
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n]. That means you can rewrite
// multiply in terms of itself and never need to use a loop.

function sum(arr, n) {
  // Only change code below this line
  // M Y  S O L U T I O N
  const product = arr[0];
  return n <= 0 ? product : sum(arr, n - 1) + arr[n];

  // Only change code above this line
}

console.log(sum([1], 0)); // 1
console.log(sum([2, 3, 4], 1)); // 5
console.log(sum([2, 3, 4], 2)); // 9


// ------------------------------------------------------------------------
// F C C  S O L U T I O N
//
function sum1(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}
