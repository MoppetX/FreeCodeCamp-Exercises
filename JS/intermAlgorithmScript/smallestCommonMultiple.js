/*Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

// M Y  S O L U T I O N

function smallestCommons( arr ) {
  
  // sort array to make sure we start with the smaller int
  const sortedArr = arr.sort( ( a, b ) => a - b );
  
  const [lowest, highest] = sortedArr;
  
  // console.log( sortedArr, higherInt );
  
  // testing for sameness
  if ( lowest === highest ) {
    return highest;
  }
  
  let inbetween = [];
  
  // create array of all numbers between int1 and int2
  for ( let i = lowest; i < arr[arr.length - 1]; i++ ) {
    inbetween.push( i );
  }
  
  // find highest possible multiple
  const highestMultiple = (inbetween.reduce( ( acc, cur ) => acc * cur )) * highest;
  
  let currentMultiple = 0;
  
  while ( currentMultiple <= highestMultiple ) {
    currentMultiple += highest;
    // console.log( currentMultiple );
    
    if ( inbetween.every( value => currentMultiple % value === 0 ) ) {
      return currentMultiple;
    }
    
  }
  
  return highestMultiple;
}

// smallestCommons( [5, 1] );
console.log( smallestCommons( [2, 10] ) );

//
// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [[1, 5], 60],
  [[5, 1], 60],
  [[2, 10], 2520],
  [[1, 13], 360360]
];

let algorithmToTest = smallestCommons;

let input,
    expected;

runTests();

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

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// ------------------------------------------------------------------------
// A D V A N C E D Solution