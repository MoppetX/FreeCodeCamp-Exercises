/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property
and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

*/

// M Y  S O L U T I O N

function truthCheck( collection, pre ) {
  // Is everyone being true?
  
  return collection.every( item => Boolean( item[pre] ) );
}

truthCheck( [{ 'user': 'Tinky-Winky', 'sex': 'male' },
              { 'user': 'Dipsy', 'sex': 'male' },
              { 'user': 'Laa-Laa', 'sex': 'female' },
              { 'user': 'Po', 'sex': 'female' }],
            'sex' );

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [10, 17],
  [977, 73156]
];

let algorithmToTest = truthCheck;

let input,
    expected;

// runTests();

function runTests() {
  tests.forEach( test => {
    [input, expected] = test;
    
    let results = algorithmToTest( input );
    
    if ( results !== expected ) {
      console.error(
        `FAILED:  "${input}" | got "${results}" | expected >${expected}<`
      );
    }
    else {
      console.log( `SUCCESS: Got "${expected}" for "${input}"` );
    }
  } );
}

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function truthCheck1(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter === collection.length;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function truthCheck2(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function truthCheck3(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}