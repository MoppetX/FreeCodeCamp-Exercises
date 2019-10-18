// Write your own Array.prototype.myFilter(), which should behave exactly like
// Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function( callback ) {
  let newArray = [];
  // Add your code below this line
  this.forEach( item => callback( item ) ? newArray.push( item ) : null );
  
  // Add your code above this line
  return newArray;
};

let new_s = s.myFilter( function( item ) {
  return item % 2 === 1;
} );

console.log( new_s );

//
// F C C  S O L U T I O N

Array.prototype.myFilter2 = function( callback ) {
  var newArray = [];
  // Add your code below this line
  this.forEach( function( x ) {
    if ( callback( x ) == true ) {
      newArray.push( x );
    }
  } );
  // Add your code above this line
  return newArray;
  
};