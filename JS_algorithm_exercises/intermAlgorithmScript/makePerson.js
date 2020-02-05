/*Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
*/

// M Y  S O L U T I O N

// this is a CONSTRUCTOR, symbolized by the capital P
let Person = function(firstAndLast) {
  this.first = firstAndLast.split(' ')[0];
  this.last = firstAndLast.split(' ')[1];

  // Object.defineProperties( this, 'fullName'{
  // get: function() {
  //   return firstName + ' ' + lastName;
  // },
  // set: function(name) {
  //   var words = name.split(' ');
  //   this.firstName = words[0] || '';
  //   this.lastName = words[1] || '';
  // }
  // getFirstName() {
  //   return this.first;
  // },
  // getLastName() {
  //   return this.last;
  // },
  // 'getFullName': function() {
  //   return `${this.first} ${this.last}`;
  // },
  //
  // setFirstName( firstName ) {
  //   this.first = firstName;
  // },
  // setLastName( lastName ) {
  //   this.last = lastName;
  // },
  // setFullName( firstAndLast ) {
  //   this.first = firstAndLast.split( ' ' )[0];
  //   this.last = firstAndLast.split( ' ' )[1];
  // }
  // } );

  // get FullName() {
  //   return `${this.first} ${this.last}`;
  // },
};

let bob = new Person('Bob Ross');
console.log(JSON.stringify(bob));
// console.log( bob instanceof Person );
bob.getFullName();

// let person = {
//   firstName: 'Jimmy',
//   lastName: 'Smith',
//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set fullName( name ) {
//     var words = name.toString().split( ' ' );
//     this.firstName = words[0] || '';
//     this.lastName = words[1] || '';
//   }
// };

// ------------------------------------------------------------------------
//   T E S T S
//
// const tests = [
//   [10, 17],
//   [977, 73156]
// ];
//
// let algorithmToTest = convertHTML;
//
// let input,
//     expected;

// runTests();
//
// function runTests() {
//   tests.forEach( test => {
//     [input, expected] = test;
//
//     let results = algorithmToTest( input );
//
//     if ( results !== expected ) {
//       console.error(
//         `FAILED:  "${input}" | got "${results}" | expected >${expected}<`
//       );
//     }
//     else {
//       console.log( `SUCCESS: Got "${expected}" for "${input}"` );
//     }
//   } );
// }

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// ------------------------------------------------------------------------
// A D V A N C E D Solution
