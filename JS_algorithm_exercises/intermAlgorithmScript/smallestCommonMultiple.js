/*Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

// M Y  S O L U T I O N

function smallestCommons( arr ) {
  
  // sort array to make sure we start with the smaller int
  const [lowest, highest] = arr.sort( ( a, b ) => a - b );
  
  // testing for sameness
  if ( lowest === highest ) {
    return highest;
  }
  
  // find highest possible multiple
  let highestMultiple = factorialise( lowest, highest );
  
  // write factorial func
  function factorialise( low, high ) {
    let multi = 1;
    for ( let i = low; i <= high; i++ ) {
      multi *= i;
    }
    return multi;
  }
  
  let currentMultiple = 0;
  
  while ( currentMultiple <= highestMultiple ) {
    currentMultiple += highest;
    
    if ( isMultipleOfAll( currentMultiple ) ) {
      return currentMultiple;
    }
  }
  
  function isMultipleOfAll( multi ) {
    let flag = true;
    
    for ( let i = lowest; i < highest; i++ ) {
      multi % i === 0 ? flag : flag = false;
    }
    return flag;
  }
  
  return highestMultiple;
}

// smallestCommons( [5, 1] );
console.log( smallestCommons3( [13, 45] ) );

//
// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [[1, 5], 60],
  [[5, 1], 60],
  [[2, 10], 2520],
  [[1, 13], 360360]
];

let algorithmToTest = smallestCommons4;

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

// S T E V E' S  S O LU T I O N

function smallestCommons4( arr ) {
  if ( arr[0] > arr[1] ) {
    arr = [arr[1], arr[0]];
  }
  
  const low = arr[0];
  const high = arr[1];
  
  let lcm = high;
  
  let found = false;
  
  while ( !found ) {
    for ( let i = low; i <= high; i++ ) {
      if ( lcm % i !== 0 ) {
        // one failed so increase the minimum possible and try again.
        lcm += high;
        found = false;
        break;
      }
      // all passed. done.
      found = true;
    }
  }
  return lcm;
}

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function smallestCommons1( arr ) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort( function( a, b ) {
    return b - a;
  } );
  
  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for ( var i = arr[0]; i >= arr[1]; i-- ) {
    newArr.push( i );
  }
  
  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;
  
  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for ( n = 2; n < newArr.length; n++ ) {
      if ( quot % newArr[n] !== 0 ) {
        break;
      }
    }
    
    loop++;
  } while ( n !== newArr.length );
  
  return quot;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function smallestCommons2( arr ) {
  var range = [];
  for ( var i = Math.max( arr[0], arr[1] ); i >= Math.min( arr[0], arr[1] ); i-- ) {
    range.push( i );
  }
  
  // can use reduce() in place of this block
  var lcm = range[0];
  
  for ( i = 1; i < range.length; i++ ) {
    var GCD = gcd( lcm, range[i] );
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
  
  function gcd( x, y ) {    // Implements the Euclidean Algorithm
    if ( y === 0 ) {
      return x;
    }
    else {
      return gcd( y, x % y );
    }
  }
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function smallestCommons3( arr ) {
  
  // range
  let min = Math.min.apply( null, arr );
  let max = Math.max.apply( null, arr );
  
  let smallestCommon = lcm( min, min + 1 );
  
  while ( min < max ) {
    min++;
    smallestCommon = lcm( smallestCommon, min );
  }
  
  return smallestCommon;
}

/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd( a, b ) {
  while ( b > 0 ) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm( a, b ) {
  return (a * b / gcd( a, b ));
}
