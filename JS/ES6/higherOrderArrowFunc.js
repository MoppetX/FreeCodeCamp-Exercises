const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const realNumberArray2 = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = ( arr ) => {
  'use strict';
  // change code below this line
  
  // Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not
  // integers) in the array realNumberArray
  
  // const squaredIntegers = arr.filter( ( num ) => (Math.sqrt( num )) % 2 === 0 ?
  
  const squaredIntegers = arr
    .filter( num => num > 0 && num % 2 === 0 )
    .map( num => num * num );
  
  // const squaredIntegers = arr.filter( ( num ) => {
  //   if ( num < 0 ) {
  //     return;
  //   }
  //   if ( num % 2 === 0 ) {
  //     console.log( num * num );
  //     return num * num;
  //   }
  // } );
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList( realNumberArray );
console.log( squaredIntegers );