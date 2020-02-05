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

// function filteredArray( arr, elem ) {
// //   let newArr = [];
// //   // change code below this line
// //
// //   // const filterByElem = ( arr ) => {
// //   //   return arr.indexOf( elem ) !== -1;
// //   // };
// //
// //   for ( let i = 0; i < arr.length; i++ ) {
// //     if(arr[i].indexOf( elem ) === -1) {
// //       newArr.push(arr[i]);
// //     }
// //   }
// //   // for ( let i = 0; i < arr.length; i++ ) {
// //   //   newArr = arr[i].filter( filterByElem(arr[i]) );
// //   // }
// //   console.log( newArr );
// //
// // // change code above this line
// //   return newArr;
// // }
// //
// // // change code here to test different cases:
// // console.log( filteredArray( [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2 ) );

//
// -----------------------------------------------------------------------------------------
// Create complex multi-dimensional arrays
// -----------------------------------------------------------------------------------------

// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray,
// using any combination of strings, numbers, and booleans for data elements, so that it has
// exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the
// third level, include the string 'deep', on the fourth level, include the string 'deeper',
// and on the fifth level, include the string 'deepest'.

// let myNestedArray = [
//   // change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   [
//     ['loop', 'shift', 6, 7, 1000, 'method']
//   ],
//   [
//     ['concat', false, true, 'spread', 'array', 'deep'],
//     [
//       ['mutate', 1327.98, 'splice', 'slice', 'push', 'deeper'],
//       [
//         ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest']
//       ]
//     ]
//   ]
//   // change code above this line
// ];

//
// -----------------------------------------------------------------------------------------
// Use the delete Keyword to Remove Object Properties
// -----------------------------------------------------------------------------------------

// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
//
// // change code below this line
// ['oranges', 'plums', 'strawberries'].forEach( ( elem ) => {
//   delete foods[elem];
// } );
// // change code above this line
//
// console.log( foods );

//
// -----------------------------------------------------------------------------------------
// Check if an Object has a Property
// -----------------------------------------------------------------------------------------

// We've created an object, users, with some users in it and a function isEveryoneHere, which
// we pass the users object to as an argument. Finish writing this function so that it returns
// true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as
// keys, and false otherwise.

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function isEveryoneHere( obj ) {
//   // change code below this line
//
//   let names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
//   let usersExist = true;
//
//   names.forEach( ( name ) => {
//     if ( !obj.hasOwnProperty( name ) ) {
//       return usersExist = false;
//     }
//   } );
//
//   return usersExist;
//
//   // change code above this line
// }
//
// console.log( isEveryoneHere( users ) );

//
// -----------------------------------------------------------------------------------------
// Check if an Object has a Property
// -----------------------------------------------------------------------------------------

// We've defined a function, countOnline; use a for...in statement within this function to
// loop through the users in the users object and return the number of users whose online
// property is set to true.

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function countOnline(obj) {
  // change code below this line
  let count = 0;

  for (let user in obj) {
    obj[user].online ? count++ : '';
  }
  return count;

  // change code above this line
}

console.log(countOnline(users));
