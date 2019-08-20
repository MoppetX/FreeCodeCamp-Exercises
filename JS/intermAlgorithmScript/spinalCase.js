// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// M Y  S O L U T I O N
function spinalCase( str ) {
  
  var regex = /\s+|_+/g;
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  return str.replace(regex, '-').toLowerCase();
  
  return str;
}

spinalCase( 'This   Is Spinal Tap' );
// spinalCase( 'thisIsSpinalTap' ); // should return "this-is-spinal-tap".
// spinalCase( 'The_Andy_Griffith_Show' ); // should return "the-andy-griffith-show"
// spinalCase( 'Teletubbies say Eh-oh' ); // should return "teletubbies-say-eh-oh"

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// ------------------------------------------------------------------------
// A D V A N C E D Solution