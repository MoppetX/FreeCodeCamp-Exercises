// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength( str ) {
  
  // M Y  S O L U T I O N
  // split the sentence into single words without spaces
  // sort the array from longest to shortest word,
  // return longest word on index 0
  
  return str
    .match( /\w+/g )
    .sort( ( a, b ) => b.length - a.length )[0].length;
}

console.log( findLongestWordLength( 'The quick brown fox jumped over the lazy dog' ) );

// F C C  S O L U T I O N
// B A S I C

function findLongestWordLength2( str ) {
  var words = str.split( ' ' );
  var maxLength = 0;
  
  for ( var i = 0; i < words.length; i++ ) {
    if ( words[i].length > maxLength ) {
      maxLength = words[i].length;
    }
  }
  
  return maxLength;
}

// console.log( findLongestWordLength2( 'The quick brown fox jumped over the lazy dog' ) );

//
// I N T E R M E D I A T E  Solution

function findLongestWordLength3( s ) {
  return s.split( ' ' )
          .reduce( function( x, y ) {
            return Math.max( x, y.length );
          }, 0 );
}

//
// A D V A N C E D  Solution

function findLongestWordLength4( str ) {
  
  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split( ' ' );
  console.log( str );
  
  //str only has 1 element left that is the longest element,
  //return the length of that element
  if ( str.length === 1 ) {
    return str[0].length;
  }
  
  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if ( str[0].length >= str[1].length ) {
    str.splice( 1, 1 );
    return findLongestWordLength2( str.join( ' ' ) );
  }
  
  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if ( str[0].length <= str[1].length ) {
    // from the first element to the last element inclusive.
    return findLongestWordLength2( str.slice( 1, str.length ).join( ' ' ) );
  }
}