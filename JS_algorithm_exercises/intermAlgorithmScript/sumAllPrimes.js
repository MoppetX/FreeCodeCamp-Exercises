/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.
*/

// M Y  S O L U T I O N

function sumPrimes( num ) {
  
  let primes = [];
  
  for ( let i = 2; i <= num; i++ ) {
    if ( isPrime( i ) ) {
      primes.push( i );
    }
  }
  
  function isPrime( value ) {
    for ( var i = 2; i < value; i++ ) {
      if ( value % i === 0 ) {
        return false;
      }
    }
    return value > 1;
  }
  
  return primes.reduce( ( acc, cur ) => acc + cur );
}

// sumPrimes( 10 );

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [10, 17],
  [977, 73156]
];

let algorithmToTest = sumPrimes;

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

function sumPrimes1( num ) {
  var res = 0;
  
  // Function to get the primes up to max in an array
  function getPrimes( max ) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for ( i = 2; i <= max; ++i ) {
      if ( !sieve[i] ) {
        // i has not been marked -- it is prime
        primes.push( i );
        for ( j = i << 1; j <= max; j += i ) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
  
  // Add the primes
  var primes = getPrimes( num );
  for ( var p = 0; p < primes.length; p++ ) {
    res += primes[p];
  }
  
  return res;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function sumPrimes2( num ) {
  // function to check if the number presented is prime
  function isPrime( number ) {
    for ( i = 2; i <= number; i++ ) {
      if ( number % i === 0 && number != i ) {
        // return true if it is divisible by any number that is not itself.
        return false;
      }
    }
    // if it passes the for loops conditions it is a prime
    return true;
  }
  
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if ( num === 1 ) {
    return 0;
  }
  // Check if your number is not prime
  if ( isPrime( num ) === false ) {
    // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes( num - 1 );
  }
  
  // Check if your number is prime
  if ( isPrime( num ) === true ) {
    // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes( num - 1 );
  }
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function sumPrimes3( num ) {
  // step 1
  let arr = Array.from( { length: num + 1 }, ( v, k ) => k ).slice( 2 );
  // step 2
  let onlyPrimes = arr.filter( ( n ) => {
    let m = n - 1;
    while ( m > 1 && m >= Math.sqrt( n ) ) {
      if ( (n % m) === 0 ) {
        return false;
      }
      m--;
    }
    return true;
  } );
  // step 3
  return onlyPrimes.reduce( ( a, b ) => a + b );
}

/*
Step 1: Use Array.from() to generate a sequence of numbers up to and including num.
Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.

Step 2: Filter all numbers off of arr that are not prime by subjecting each element to the “trial
division test” which “consists of dividing n by each integer m that is greater than 1 and less than or
equal to the square root of n”. This test returns false if any number less than the element being operated
on (m) produces no remainder when said element (n) is divided by it. See link below for more on this.

Step 3: Return the sum of all remaining elements of arr using .reduce().
*/