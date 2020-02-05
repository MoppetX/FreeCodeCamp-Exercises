// `Make a function that looks through an array of objects (first argument) and returns
// an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the
// collection if it is to be included in the returned array.`;

// M Y  S O L U T I O N
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line

  arr = collection.filter(collObject => {
    return Object.keys(source).every(
      key => collObject[key] && collObject[key] === source[key],
    );
  });

  // Only change code above this line
  console.log(arr);
  return arr;
}

// whatIsInAName(
//   [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }],
//   { last: 'Capulet' } );

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 },
);
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function whatIsInAName1(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function whatIsInAName2(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function whatIsInAName3(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
