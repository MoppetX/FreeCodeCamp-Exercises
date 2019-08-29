/*
Given the array arr, iterate through and remove each element starting from the first element
(the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be
returned as an empty array.
*/

// M Y  S O L U T I O N
function dropElements( arr, func ) {
  
  let j;
  for ( j = 0; j < arr.length; j++ ) {
    
    let found = func( arr[j] );
    
    if ( found ) {
      break;
    }
  }
  // written as a while loop
  // let found = func( arr[0] );
  //
  // let i = 0;
  // while ( i < arr.length ) {
  //   found = func( arr[i] );
  //   if ( found ) {
  //     break;
  //   }
  //   i++;
  // }
  
  return arr.slice( j );
}

console.log( dropElements( [1, 2, 3, 4], function( n ) {
  return n >= 3;
} ) );

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [[1, 2, 3, 4], function( n ) {
    return n >= 3;
  }, [3, 4]],
  [[0, 1, 0, 1], function( n ) {
    return n === 1;
  }, [1, 0, 1]],
  [[1, 2, 3], function( n ) {
    return n > 0;
  }, [1, 2, 3]],
  [[1, 2, 3, 4], function( n ) {
    return n > 5;
  }, []]
];

let algorithmToTest = dropElements;

let input,
    func,
    expected;

runTests();

function runTests() {
  tests.forEach( test => {
    [input, func, expected] = test;
    
    let results = algorithmToTest( input, func );
    
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

function dropElements1( arr, func ) {
  // drop them elements.
  let times = arr.length;
  for ( var i = 0; i < times; i++ ) {
    if ( func( arr[0] ) ) {
      break;
    }
    else {
      arr.shift();
    }
  }
  return arr;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function dropElements2( arr, func ) {
  return arr.slice( arr.findIndex( func ) >= 0 ? arr.findIndex( func ) : arr.length, arr.length );
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function dropElements3( arr, func ) {
  while ( arr.length > 0 && !func( arr[0] ) ) {
    arr.shift();
  }
  return arr;
}