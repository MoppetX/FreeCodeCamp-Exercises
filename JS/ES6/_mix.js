// default parameters
// ===================================================================

// const increment = ( number, value = 1 ) => number + value;
//
// console.log( increment( 5, 2 ) ); // returns 7
// console.log( increment( 5 ) ); // returns 6

// -----------------------------------------------------------------------------------------
// Use the Rest Operator with Function Parameters
// -----------------------------------------------------------------------------------------

// Modify the function sum so that it uses the rest operator and it works
// in the same way with any number of parameters.

// const sum = (function() {
//   "use strict";
//   return function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();

// 'use strict';
// const sum = ( ...args ) => (args.reduce( ( a, b ) => a + b, 0 ));
//
// console.log( sum( 1, 2, 3, 1 ) ); // 6

// -----------------------------------------------------------------------------------------
// Use the Spread Operator to Evaluate Arrays In-Place
// -----------------------------------------------------------------------------------------

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//   "use strict";
//
//   arr2 = [...arr1]; // change this line
// })();
// console.log(arr2);

// -----------------------------------------------------------------------------------------
// Use Destructuring Assignment to Assign Variables from Objects
// -----------------------------------------------------------------------------------------

// Use destructuring to obtain the average temperature for tomorrow from the input
// object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line.

// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 79
// };
//
// function getTempOfTmrw( avgTemperatures ) {
// // console.log( avgTemperatures.tomorrow );
//   'use strict';
//   // change code below this line
//   const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
//   // const tempOfTomorrow = undefined; // change this line
//   // change code above this line
//   return tempOfTomorrow;
// }

// console.log( getTempOfTmrw( AVG_TEMPERATURES ) ); // should be 79

// var voxel = {x: 3.6, y: 7.4, z: 6.54 };
// const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
// console.log( x, y , z );
//
// const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54
// console.log( a, b , c );

// -----------------------------------------------------------------------------------------
// Use Destructuring Assignment to Assign Variables from Arrays
// -----------------------------------------------------------------------------------------

// let a = 8, b = 6;
// (() => {
//   "use strict";
//   // change code below this line
//
//   // Use destructuring assignment to swap the values of a and b
//   // so that a receives the value stored in b, and b receives the value stored in a.
//   [b, a] = [a, b];
//
//   // change code above this line
// })();
// console.log(a); // should be 6
// console.log(b); // should be 8
//

// -----------------------------------------------------------------------------------------
// Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
// -----------------------------------------------------------------------------------------

//
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//
//   // Use destructuring assignment with the rest operator to perform an effective
//   // Array.prototype.slice() so that arr is a sub-array of the original array
//   // source with the first two elements omitted.
//
//   let [ ,, ...arr] = list; // change this
//
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// -----------------------------------------------------------------------------------------
// Create Strings using Template Literals
// -----------------------------------------------------------------------------------------

// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['id-blacklist', 'no-dup-keys']
// };
//
// function makeList( arr ) {
//   'use strict';

// change code below this line

// Use template literal syntax with backticks to display each entry of the result
// object's failure array. Each entry should be wrapped inside an li element with
// the class attribute text-warning, and listed within the resultDisplayArray.

// const resultDisplayArray = [];
//
// arr.forEach((item) => resultDisplayArray.push(
//   `<li class="text-warning">${item}</li>`
// ));

// const resultDisplayArray = arr.forEach((item) => [`<li class="text-warning">${item}</li>`]
// );

//   const resultDisplayArray = Array
//     .from( arr, item => `<li class="text-warning">${item}</li>` );
//
//   // change code above this line
//
//   return resultDisplayArray;
// }
//
// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]
//  **/
// const resultDisplayArray = makeList( result.failure );

// -----------------------------------------------------------------------------------------
// Use getters and setters to Control Access to an Object
// -----------------------------------------------------------------------------------------

function makeClass() {
  'use strict';
  /* Alter code below this line */
  
  class Thermostat {
    constructor( fahrenheit ) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9 * (this.fahrenheit - 32));
    }
    
    set temperature( celcius ) {
      this.fahrenheit = (celcius * 9.0 / 5 + 32);
    }
  }
  
  /* Alter code above this line */
  return Thermostat;
}

const Thermostat = makeClass();
// console.log( Thermostat.fahrenheit );
const thermos = new Thermostat( 76 ); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
// console.log( temp );




