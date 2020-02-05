// We have defined a function called countdown with one parameter (n). The function should use recursion to return an
// array containing the integers n through 1 based on the n parameter. If the function is called with a number less
// than 1, the function should return an empty array. For example, calling this function with n = 5 should return the
// array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.


function countdown(n) {
  // M Y  S O L U T I O N
  if (n < 1) return [];

  const arr = countdown(n - 1);
  arr.unshift(n);

  return arr;
}

console.log(countdown(-1)); // should return an empty array.
console.log(countdown(10)); // should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(countdown(5)); // [5, 4, 3, 2, 1]


// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
//
