// We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them.
//
// The lowest number will not always come first.

console.log(typeof []);

function sumAll(arr) {
  // M Y  S O L U T I O N
  if (!Array.isArray(arr)) {
    return 'only arrays are allowed';
  }

  if (arr.length < 2) {
    return 'too few array entries';
  }

  if (!arr.every(elem => Number.isInteger(elem))) {
    return 'only arrays of numbers allowed';
  }

  let sortedArr = arr.sort((a, b) => a - b);

  const lowest = sortedArr[0];
  const highest = sortedArr[sortedArr.length - 1];

  if (lowest === highest) {
    return lowest + highest;
  }

  let result = 0;

  for (let i = lowest; i <= highest; i++) {
    result += i;
  }

  return result;
}

sumAll([1, 4]); // should return 10.
// console.log( sumAll( [4, 1] ) ); // should return 10.
// console.log( sumAll( [5, 10] ) ); // should return 45.
console.log(sumAll([5]));
console.log(sumAll([]));
console.log(sumAll('Bob'));
console.log(sumAll([1, 'Bob']));
console.log(`true: ${sumAll([5, 12, 10])}`);
console.log(sumAll({ key: 'test' }));
console.log(sumAll([Number.MAX_VALUE, 1]));

//
// F C C  S O L U T I O N S
// B A S I C

function sumAll1(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll1([1, 4]);

//
// I N T E R M E D I A T E  Solution
function sumAll2(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  let sortedArr = arr.sort((a, b) => a - b);
  let firstNum = arr[0];
  let lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  let sum = ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2;
  return sum;
}

//
// A D V A N C E D Solution

function sumAll3(arr) {
  let sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll3([1, 4]);
