// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// NOTE: You can return the array with its elements in any order.

// M Y  S O L U T I O N
function diffArray(arr1, arr2) {
  let args = Array.from(arguments);
  console.log(args);

  if (args.length > 2) {
    return 'only two arguments should be passed';
  }

  let combined = [...arr1, ...arr2];
  return combined.filter(
    elem => combined.indexOf(elem) === combined.lastIndexOf(elem),
  );
}

// diffArray( [1, 2, 3, 5], [1, 2, 3, 4, 5] );
console.log(diffArray([1, 2, 3, 5], 0));
// console.log( diffArray( [1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4] ) );
// should return ["piglet", 4]
// console.log( diffArray( ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] ) );
//should return ["pink wool"]
// console.log( diffArray( ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) );
// should return []

//
// S T E V E  S O L U T I O N

function diffArray1(arr1, arr2) {
  const array1b = arr1.filter(entry => {
    return !arr2.includes(entry);
  });

  const array2b = arr2.filter(entry => {
    return !arr1.includes(entry);
  });

  return [...array1b, ...array2b];
}

// --------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function diffArray2(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

// --------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function diffArray3(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// --------------------------------------------------------------------
// A D V A N C E D Solution

function diffArray4(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}

// --------------------------------------------------------------------

function diffArray5(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
