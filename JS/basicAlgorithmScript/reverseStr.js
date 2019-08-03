// Reverse the provided string.

function reverseString( str ) {
  let reverseStr = '';
  
  for ( let i = str.length - 1; i >= 0; i-- ) {
    reverseStr += str[i];
  }
  return reverseStr;
}

reverseString( 'hello' );


// F C C  S O L U T I O N S
//
// B A S I C Solution

function reverseString2(str) {
  return str.split('').reverse().join('');
}