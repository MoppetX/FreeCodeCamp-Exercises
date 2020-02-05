// Write your own Array.prototype.myMap(), which should behave exactly like
// Array.prototype.map(). You may use a for loop or the forEach method.

// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  let newArray = [];
  // Add your code below this line
  this.forEach(item => newArray.push(callback(item)));

  // Add your code above this line
  return newArray;
};

let new_s = s.myMap(item => item * 2);

console.log(new_s);
