/*
Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not
be sorted in numerical order.
*/

// M Y  S O L U T I O N

function uniteUnique(arr, ...rest) {
  // lets create one big array of the subarrays, then reduce it to unique values
  return arr.concat(...rest).reduce((acc, cur) => {
    // if the acc array is empty, add the first current value
    // add the current value if it doesn't already exist in the acc array
    // else return the acc array
    // if ( acc.length === 0 || !acc.includes( cur )) {
    //   return acc.concat( [cur] );

    // The push() adds elements to the end of an array and returns the new length of the array.
    // Thus a same line return is invalid.
    // acc.push( cur );
    // return acc;
    // }

    // You must return something from your reduce callback to become the new accumulator value.
    // Otherwise accumulator will come back as undefined in the next iteration
    // return acc;
    return acc.length === 0 || !acc.includes(cur) ? acc.concat([cur]) : acc;
  }, []);
}

// console.log( uniteUnique( [1, 3, 2], [5, 2, 1, 4], [2, 1] ) );
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
// should return [1, 3, 2, [5], [4]]

// ------------------------------------------------------------------------
//   T E S T S

let algorithmToTest = uniteUnique;

let input, expected;

const tests = [
  [
    ([1, 3, 2], [5, 2, 1, 4], [2, 1]),
    [
      ['G', 'C'],
      ['C', 'G'],
      ['G', 'C'],
    ],
  ],
  [
    'ATCGA',
    [
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T'],
    ],
  ],
  [
    'TTGAG',
    [
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C'],
    ],
  ],
  [
    'CTCTA',
    [
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ],
  ],
];

// tests.forEach( test => {
//   [input, expected] = test;
//
//   let results = algorithmToTest( input );
//
//   if ( results !== expected ) {
//     console.error(
//       `FAILED:  "${input}" | got "${results}" | expected >${expected}<`
//     );
//   }
//   else {
//     console.log( `SUCCESS: Got "${expected}" for "${input}"` );
//   }
// } );

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function uniteUnique1(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function uniteUnique2(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      }),
    );
  });

  return newArr;
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function uniteUnique3() {
  var concatArr = [];
  var i = 0;

  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }

  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) === pos;
  });

  return uniqueArray;
}

function uniteUnique4(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}
