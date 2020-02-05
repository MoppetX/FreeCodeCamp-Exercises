// M Y  S O L U T I O N

function steamrollArray(arr) {
  // console.log( arr.toString().split(",") );
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // console.log( 'FLAT: ' + arr.flat( Infinity ) );

  return arr.reduce((flat, toFlatten) => {
    // if what you're trying to concat is an array, call function recursively to flatten it
    return flat.concat(
      Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten,
    );
  }, []);
}

steamrollArray([1, {}, [3, [[4]]]]);

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [
    [[['a']], [['b']]],
    ['a', 'b'],
  ],
  [
    [1, [2], [3, [[4]]]],
    [1, 2, 3, 4],
  ],
  [
    [1, {}, [3, [[4]]]],
    [1, {}, 3, 4],
  ],
];

let algorithmToTest = steamrollArray;

let input, expected;

// runTests();

function runTests() {
  tests.forEach(test => {
    [input, expected] = test;

    let results = algorithmToTest(input);

    if (JSON.stringify(results) !== JSON.stringify(expected)) {
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

function steamrollArray1(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function steamrollArray2(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function steamrollArray3(arr) {
  return arr
    .toString()
    .replace(',,', ',') // "1,2,,3" => "1,2,3"
    .split(',') // ['1','2','3']
    .map(function(v) {
      if (v === '[object Object]') {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
