// Write a function that splits an array (first argument) into groups the length of
// size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups( arr, size ) {
  // M Y  S O L U T I O N
  if ( size <= 0 ) {
    return arr;
  }
  
  let splitArr = [];
  
  for ( let i = 0; i < arr.length; i += size ) {
    splitArr.push( arr.slice( i, i + size ) );
  }
  
  return splitArr;
}

// console.log( chunkArrayInGroups( ['a', 'b', 'c', 'd'], 5 ) );
// console.log( chunkArrayInGroups( ['a', 'b', 'c', 'd'], 4 ) );
console.log( chunkArrayInGroups1( ['a', 'b', 'c', 'd'], 3 ) );
// console.log( chunkArrayInGroups( ['a', 'b', 'c', 'd'], 2 ) );
// console.log( chunkArrayInGroups( ['a', 'b', 'c', 'd'], 1 ) );
// console.log( chunkArrayInGroups( ['a', 'b', 'c', 'd'], 0 ) );
//should return [["a", "b"], ["c", "d"]].
// console.log( chunkArrayInGroups( [0, 1, 2, 3, 4, 5], 3 ) );
// // [[0, 1, 2], [3, 4, 5]]
// console.log( chunkArrayInGroups( [0, 1, 2, 3, 4, 5], 4 ) );
// // should return [[0, 1, 2, 3], [4, 5]].
// console.log( chunkArrayInGroups( [0, 1, 2, 3, 4, 5, 6, 7, 8], 4) );
// // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

//
// F C C  S O L U T I O N S
// B A S I C
function chunkArrayInGroups1( arr, size ) {
  
  var temp = [];
  var result = [];
  
  for ( var a = 0; a < arr.length; a++ ) {
    if ( a % size !== size - 1 ) {
      console.log( a, a % size, size - 1 );
      temp.push( arr[a] );
    }
    else {
      temp.push( arr[a] );
      result.push( temp );
      temp = [];
    }
  }
  
  if ( temp.length !== 0 ) {
    result.push( temp );
  }
  return result;
}

//
// I N T E R M E D I A T E  Solution

function chunkArrayInGroups2( arr, size ) {
  // Break it up.
  var arr2 = [];
  for ( var i = 0; i < arr.length; i += size ) {
    arr2.push( arr.slice( i, i + size ) );
  }
  return arr2;
}

//
// A D V A N C E D Solution

function chunkArrayInGroups3( arr, size ) {
  // Break it up.
  var newArr = [];
  var i = 0;
  
  while ( i < arr.length ) {
    newArr.push( arr.slice( i, i + size ) );
    i += size;
  }
  return newArr;
}

chunkArrayInGroups3( ['a', 'b', 'c', "d"], 2 );