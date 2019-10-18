/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the
sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10
are 1, 1, 3, and 5.
 */

// M Y  S O L U T I O N

function sumFibs( num ) {
  
  function createFibSequence( num ) {
    let fib = [0, 1];
    let i = 2;
    
    while ( fib[fib.length - 1] <= num ) {
      // console.log( `I: ${i}` );
      fib.push( (fib[i - 2] + fib[i - 1]) );
      i++;
    }
    
    // console.log( `FIB SEQ: ${fib}` );
    return fib.slice( -1 ) > num ? fib.slice( 0, fib.length - 1 ) : fib;
  }
  
  return createFibSequence( num ).filter( value => value % 2 > 0 )
                                 .reduce( ( acc, cur ) => acc + cur, 0 );
}

console.log( sumFibs( 10 ) );

// sumFibs( 10 );

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [1, 2],
  [1000, 1785],
  [4000000, 4613732],
  [4, 5],
  [75024, 60696]
];

let algorithmToTest = sumFibs;

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

function sumFibs1(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  
  return result;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function sumFibs2(num) {
  // Perform checks for the validity of the input
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  
  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;
  
  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }
  
  // Sum only the odd numbers and return the value
  return arrFib.reduce((acc, curr) => {
    return acc + curr * (curr % 2);
  });
}

// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/