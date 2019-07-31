// L E S S O N:
function findElement(arr, func) {
  
  return arr.filter( func )[0];
}

findElement([1, 3, 5], num => num % 2 === 0);



// L E S S O N:  Boo who
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  // return bool === true ? true : bool === false ? true : false;
  return typeof bool === 'boolean';
}

console.log(booWho(false));

