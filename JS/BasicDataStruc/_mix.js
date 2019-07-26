// -----------------------------------------------------------------------------------------
// Check For The Presence of an Element With indexOf()
// -----------------------------------------------------------------------------------------

// function quickCheck( arr, elem ) {
//   // change code below this line
//
//   return arr.indexOf( elem ) !== -1;
//
//   // change code above this line
// }
//
// // change code here to test different cases:
// console.log( quickCheck( ['squash', 'onions', 'shallots'], 'mushrooms' ) );

//
// -----------------------------------------------------------------------------------------
// Iterate Through All an Array's Items Using For Loops
// -----------------------------------------------------------------------------------------

// We have defined a function, filteredArray, which takes arr, a nested array, and elem as
// arguments, and returns a new array. elem represents an element that may or may not be
// present on one or more of the arrays nested within arr. Modify the function, using a for
// loop, to return a filtered version of the passed array such that any array nested within
// arr containing elem has been removed.

function filteredArray( arr, elem ) {
  let newArr = [];
  // change code below this line
  
  // const filterByElem = ( arr ) => {
  //   return arr.indexOf( elem ) !== -1;
  // };
  
  for ( let i = 0; i < arr.length; i++ ) {
    if(arr[i].indexOf( elem ) === -1) {
      newArr.push(arr[i]);
    }
  }
  // for ( let i = 0; i < arr.length; i++ ) {
  //   newArr = arr[i].filter( filterByElem(arr[i]) );
  // }
  console.log( newArr );
  
// change code above this line
  return newArr;
}

// change code here to test different cases:
console.log( filteredArray( [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2 ) );