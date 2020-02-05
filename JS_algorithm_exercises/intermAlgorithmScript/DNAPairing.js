/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

// M Y  S O L U T I O N
function pairElement(str) {
  // create empty Pair array
  let basePairs = [];

  // create a for each loop
  [...str].forEach(letter => {
    // we only have 4 options, so maybe a switch is a good idea?
    switch (letter) {
      case 'G':
        basePairs.push(['G', 'C']);
        break;
      case 'C':
        basePairs.push(['C', 'G']);
        break;
      case 'A':
        basePairs.push(['A', 'T']);
        break;
      case 'T':
        basePairs.push(['T', 'A']);
        break;
      default:
        break;
    }
  });

  return basePairs;
}

// pairElement( 'GCG' );

// ------------------------------------------------------------------------
//   T E S T S

let algorithmToTest = pairElement;

let input, expected;

const tests = [
  [
    'GCG',
    [
      ['G', 'C'],
      ['C', 'G'],
      ['G', 'C'],
    ],
  ],
  [
    'ATCGA',
    [
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T'],
    ],
  ],
  [
    'TTGAG',
    [
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C'],
    ],
  ],
  [
    'CTCTA',
    [
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ],
  ],
];

tests.forEach(test => {
  [input, expected] = test;

  let results = algorithmToTest(input);

  if (results.toString() !== expected.toString()) {
    console.error(
      `FAILED:  "${input}" | got "${results}" | expected >${expected}<`,
    );
  } else {
    console.log(`SUCCESS: Got "${expected}" for "${input}"`);
  }
});

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function pairElement1(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function pairElement2(str) {
  //create object for pair lookup
  var pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  //split string into array of characters
  var arr = str.split('');
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution
