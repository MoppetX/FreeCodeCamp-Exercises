/* Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

// M Y  S O L U T I O N

function addTogether(a, b) {
  // if only one arg, return func to add

  let args = Array.from(arguments);

  function isNum(num) {
    return typeof num === 'number';
  }

  if (args.some(n => !isNum(n))) {
    return undefined;
  }
  if (args.length > 1) {
    return args.reduce((acc, cur) => acc + cur, 0);
  }

  return function(b) {
    return isNum(b) ? a + b : undefined;
  };
}

// addTogether( 2, 3 );
console.log(addTogether(2, [3]));

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  // [addTogether( 2 )( 3 ), 5],
  // [addTogether( 'http://bit.ly/IqT6zt' ), undefined],
  // [addTogether( 2, '3' ), undefined]
];

let algorithmToTest = addTogether;

let input, expected;

// runTests();

function runTests() {
  tests.forEach(test => {
    [input, expected] = test;

    let results = algorithmToTest(input);

    if (results !== expected) {
      console.error(
        `FAILED:  "${input}" | got "${results}" | expected >${expected}<`,
      );
    } else {
      console.log(`SUCCESS: Got "${expected}" for "${input}"`);
    }
  });
}

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function addTogether2() {
  let args = new Array(arguments.length);
  //Storing the arguments in an array
  for (let i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  //Check for the arguments length
  if (args.length === 2) {
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
      return undefined;
    }
    return args[0] + args[1];
  }
  //When only one argument is provided
  if (args.length === 1) {
    a = args[0];
    //Check the  argument using typeof
    if (typeof a !== 'number') {
      return undefined;
    } else {
      //Making use of closures
      return function(b) {
        //Checking the second argument
        if (typeof b !== 'number') {
          return undefined;
        } else {
          return a + b;
        }
      };
    }
  }
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function addTogether3() {
  let args = Array.from(arguments);
  return args.some(n => typeof n !== 'number')
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === 'number' ? n + args[0] : undefined);
}
