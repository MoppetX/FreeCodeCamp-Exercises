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

function mutation(arr) {
  // M Y  S O L U T I O N
  let [str, [...test], ...rest] = [...arr];

  test.forEach(letter => {
    if (!str.toUpperCase().includes(letter.toUpperCase())) {
      return false;
    }
  });

  return true;
}

// console.log( mutation( ['hello', 'hey'] ) );
// console.log( mutation( ['hello', 'Hello'] ) );
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
// console.log( mutation( ['zyxwvutsrqponmlkjihgfedcba', 'qrstu'] ) );

//
// F C C  S O L U T I O N S
// B A S I C
function mutation1(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

//
// I N T E R M E D I A T E  Solution
function mutation2(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(letter => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

//
// A D V A N C E D  Solution
