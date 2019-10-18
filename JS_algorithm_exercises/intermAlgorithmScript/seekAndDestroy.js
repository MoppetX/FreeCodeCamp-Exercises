// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are
// of the same value as these arguments.

// M Y  S O L U T I O N
function destroyer( arr ) {
  
  if ( !Array.isArray( arr ) ) {
    return 'only arrays are allowed';
  }
  
  let [, ...rest] = [...arguments];
  
  return arr.filter( value => !rest.includes( value ) );
  
}

console.log( destroyer( [1, 2, 3, 1, 2, 3], 2, 3 ) );
console.log( destroyer([3, 5, 1, 2, 2], 2, 3, 5));

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function destroyer1(arr) {
  var args = Array.prototype.slice.call(arguments);
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution
function destroyer2(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

const destroyer3 = (arr, ...args) => arr.filter(i => !args.includes(i));
