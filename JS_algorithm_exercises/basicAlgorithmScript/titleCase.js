// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase( str ) {
  
  // M Y  S O L U T I O N
  return str.toLowerCase()
            .split( ' ' )
            .map( word => word[0].toUpperCase() + word.substring( 1 ) )
            .join( ' ' );
}

console.log( titleCase( 'I\'m a little tea pot' ) );
console.log( titleCase( 'sHoRt AnD sToUt' ) );
console.log( titleCase( 'HERE IS MY HANDLE HERE IS MY SPOUT' ) );


// F C C  S O L U T I O N S
//
// B A S I C Solution
String.prototype.replaceAt = function( index, character ) {
  return this.substr( 0, index ) + character + this.substr( index + character.length );
};

function titleCase2( str ) {
  var newTitle = str.split( ' ' );
  var updatedTitle = [];
  for ( var st in newTitle ) {
    updatedTitle[st] = newTitle[st].toLowerCase().replaceAt( 0, newTitle[st].charAt( 0 ).toUpperCase() );
  }
  return updatedTitle.join( ' ' );
}

console.log( titleCase2( 'I\'m a little tea pot' ) );


//
// I N T E R M E D I A T E  Solution

function titleCase3( str ) {
  var convertToArray = str.toLowerCase().split( ' ' );
  var result = convertToArray.map( function( val ) {
    return val.replace( val.charAt( 0 ), val.charAt( 0 ).toUpperCase() );
  } );
  return result.join( ' ' );
}

titleCase( 'I\'m a little tea pot' );

//
// A D V A N C E D  Solution

function titleCase4( str ) {
  return str.toLowerCase().replace( /(^|\s)\S/g, ( L ) => L.toUpperCase() );
}
