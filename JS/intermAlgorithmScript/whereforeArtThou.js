// `Make a function that looks through an array of objects (first argument) and returns
// an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the
// collection if it is to be included in the returned array.`;

// M Y  S O L U T I O N
function whatIsInAName( collection, source ) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  
  // get entries array to have something to compare to
  let comparables = Object.entries( source );
  let compareKeys = Object.keys( source );
  let compareValues = Object.values( source );
  
  // check EVERY element of the collections array
  arr = collection.filter( object => {
    
    let [compareKey, compareValue] = comparables[0];
    
    console.log( `compareKey: ${compareKey}` );
    // console.log( `compareKey: ${compareKey}, ${compareValue}` );
    
    // FIRST check: do all keys exist?
    // console.log( `KEYS: ${Object.keys( object )}` );
    
    let objectKeys = Object.keys( object );
    let objectValues = Object.values( object );
    
    let keysExist = compareKeys.every( function( val ) {
      return objectKeys.indexOf( val ) >= 0;
    } );
  
    let valueExist = false;
    if ( keysExist ) {
      compareKeys.forEach( key => {
        valueExists = object[key] === source[key];
      } );
    }
    
    console.log( valueExists );
    
    return valueExists;
    // SECOND: do the values of the keys match up with the comp value?
    
    // for (const key of Object.keys(obj)) {
    //   console.log(key, obj[key]);
    // }
    // to see whether it has ALL keys AND the associated value of source
    // for ( let [key, value] of Object.entries( source ) ) {
    //   if ( key in object ) &&
    //   object[key] === value;
    //
    // }
    // ;
    
    // return arr;
    //   console.log( '---------------------------------------' );
    
    // if yes, add current object to arr
    // if not, keep looping
    
    // if ((key in object) && object[key] === value) {
    //   // ( `ARR: ${JSON.stringify( object, null, 2 )}` )
    // }
    // for ( let [key, value] of Object.entries( source ) ) {
    //
    //   if ( (key in object) && object[key] === value ) {
    //     arr.push( object );
    //   }
    // }
  } );
  
  // console.log( `ARR: ${JSON.stringify( arr, null, 2 )}` );
  
  // Only change code above this line
  console.log( arr );
  return arr;
}

// whatIsInAName(
//   [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }],
//   { last: 'Capulet' } );

whatIsInAName( [{ 'apple': 1, 'bat': 2 }, { 'bat': 2 }, { 'apple': 1, 'bat': 2, 'cookie': 2 }],
               { 'apple': 1, 'bat': 2 } );
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// ------------------------------------------------------------------------
// A D V A N C E D Solution