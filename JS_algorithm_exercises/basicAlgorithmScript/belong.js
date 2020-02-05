// Return the lowest index at which a value (second argument) should be inserted into
// an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1
// (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
// it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  // M Y  S O L U T I O N
  arr.push(num);
  return arr.sort((a, b) => a - b).findIndex(elem => elem === num);
}

// console.log( getIndexToIns( [70, 60], 80 ) );
console.log(getIndexToIns([3, 10, 5], 3));

//
// F C C  S O L U T I O N S
// B A S I C
function getIndexToIns2(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}

//
// I N T E R M E D I A T E  Solution

function getIndexToIns3(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

function getIndexToIns4(arr, num) {
  // sort and find right index
  var index = arr
    .sort((curr, next) => curr > next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

//
// A D V A N C E D  Solution

function getIndexToIns5(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
