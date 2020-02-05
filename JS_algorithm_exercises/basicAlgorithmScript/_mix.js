//
// F C C  S O L U T I O N S
// B A S I C

//
// I N T E R M E D I A T E  Solution

//
// A D V A N C E D  Solution

// ----------------------------------------------------------------------------------
// L E S S O N:
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 3, 5], num => num % 2 === 0);

// ----------------------------------------------------------------------------------
// L E S S O N:  Boo who
function booWho(bool) {
  // return bool === true ? true : bool === false ? true : false;
  return typeof bool === 'boolean';
}

console.log(booWho(false));

// ----------------------------------------------------------------------------------
// L E S S O N:  Falsy Bouncer
function bouncer(arr) {
  // Remove all falsy values from an array.
  return arr.filter(elem => elem);
}

console.log(bouncer([0, 7, 'ate', '', false, 9]));

// F C C  S O L U T I O N
//
// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
// The Array.prototype.filter method expects a function that returns a Boolean
// value which takes a single argument and returns true for truthy value or false
// for falsy value. Hence we pass the built-in Boolean function.
