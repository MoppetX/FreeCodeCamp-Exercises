// Return true if the string in the first element of the array contains all of the letters of
// the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the
// second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not
// contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are
// present in "Alien".

function mutation( arr ) {
  
  // M Y  S O L U T I O N
  let [[...split1], [...split2], ...rest] = [...arr];
  
  // console.log( split1.findIndex( split2[1] ) );
  
  console.log( split2.forEach( letter => split1.indexOf( letter ) >= 0 ) );
  console.log( split1 );
  console.log( split2 );
  
  return arr;
}

mutation( ['hello', 'hey'] );

// The findIndex() method returns the index of the first element in the array that satisfies
// the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// The findIndex() method returns the index of the first element in the array that satisfies the
// provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

//
// F C C  S O L U T I O N S
// B A S I C

//
// I N T E R M E D I A T E  Solution

//
// A D V A N C E D  Solution