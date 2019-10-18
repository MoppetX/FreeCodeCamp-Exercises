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
  
  let num = 20;
  // [2, 3, 5]
  
  // 15 -> [2, 3, 5, 7, 11, 13]
  
  // 1: Given a number num, return an array of primes <= num
  // Do this as a function, so we can feed the output to another function, if we need to.
  
  let primes = createPrimeArr( num );
  
  // console.log( primes );
  
  function createPrimeArr( num ) {
    let primesArr = [];
    
    for ( let i = 2; i <= num; i++ ) {
      if ( isPrime( i ) ) {
        primesArr.push( i );
      }
    }
    return primesArr;
    
    function isPrime( value ) {
      for ( var i = 2; i < value; i++ ) {
        if ( value % i === 0 ) {
          return false;
        }
      }
      return value > 1;
    }
  }
  
  // 2: Given a number, num, return the list of primes that make num
  let primesOfNum = findPrimeFactors( primes );
  
  function findPrimeFactors( primeArr ) {
    let factors = [];
    let tempNum = num;
    // console.log( 'TEMPNUM: ' +tempNum );
    let i = 0;
    
    while ( i < primeArr.length ) {
      // console.log( 'PRIME ARR: ' + primeArr );
      // console.log( 'TEMPNUM: ' + tempNum );

      // if num is divisible by prime on array
      // it needs to be stored in tempPrimes
      // also, I then need to work with whatever's left after the division...
      // need to call "createPrimeArr" after the first successfull division, so see what
      // other primes the smaller number is made out of
      
      let currentPrime = primeArr[i];
      
      if ( tempNum % currentPrime === 0 ) {
        factors.push( currentPrime );
        // only if tempNum is evenly divisible divide by a prime
        tempNum /= currentPrime;
      }
      else {
        i++;
      }
      console.log( factors );
    }
  }
  
  // 4: Now do 2: but with a range of numbers (low, high) Sort!
  //
  //   5: Given the list of arrays returned from 4: , find the unique set of primes mentioned
  //
  // 6: Show tests
  //
  // 7: For each prime from 5: , loop over 4: (array of primes) and count the number of each prime in the array
  //
  
  return arr;
}

smallestCommons( [5, 1] );
// console.log( smallestCommons( [13, 45] ) );

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
