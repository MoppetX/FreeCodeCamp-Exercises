// You are given two arrays and an index. Use the array methods slice and splice
// to copy each element of the first array into the second array, in order.
//
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  
  // M Y  S O L U T I O N
  let frankenArr = arr2.slice( 0, arr2.length );
  frankenArr.splice( n, 0, ...arr1 );
  return frankenArr;
}

console.log( frankenSplice( [1, 2, 3], [4, 5, 6], 1 ) );


// F C C  S O L U T I O N S
//
// B A S I C Solution

function frankenSplice2(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

