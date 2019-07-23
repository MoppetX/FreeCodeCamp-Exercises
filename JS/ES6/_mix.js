// default parameters
// ===================================================================

// const increment = ( number, value = 1 ) => number + value;
//
// console.log( increment( 5, 2 ) ); // returns 7
// console.log( increment( 5 ) ); // returns 6


// Use the Rest Operator with Function Parameters
// ===================================================================

// Modify the function sum so that it uses the rest operator and it works
// in the same way with any number of parameters.

// const sum = (function() {
//   "use strict";
//   return function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();

'use strict';
const sum = ( ...args ) => (args.reduce( ( a, b ) => a + b, 0 ));

console.log( sum( 1, 2, 3, 1 ) ); // 6