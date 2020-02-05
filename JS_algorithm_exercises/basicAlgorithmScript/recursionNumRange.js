// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers
// which begins with a number represented by the startNum parameter and ends with a number represented by the endNum
// parameter. The starting number will always be less than or equal to the ending number. Your function must use
// recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and
// endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  // M Y  S O L U T I O N
  const difference = endNum - startNum;
  if (difference < 0) return [];

  if (startNum === endNum) return [startNum];

  const arr = rangeOfNumbers(startNum, endNum - 1);
  arr.push(startNum + difference);
  return arr;
}

console.log(rangeOfNumbers(1, 5)); // should return [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9)); // should return [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4)); // [4]

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
//
