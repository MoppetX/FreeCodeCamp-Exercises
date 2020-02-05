/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
* */

// M Y  S O L U T I O N

function binaryAgent(str) {
  // parseInt: the second parameter is the base: the number system of the string

  return str
    .split(' ')
    .map(binary => String.fromCharCode(parseInt(binary, 2)))
    .join('');
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111',
);

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  [10, 17],
  [977, 73156],
];

let algorithmToTest = binaryAgent;

let input, expected;

// runTests();

function runTests() {
  tests.forEach(test => {
    [input, expected] = test;

    let results = algorithmToTest(input);

    if (results !== expected) {
      console.error(
        `FAILED:  "${input}" | got "${results}" | expected >${expected}<`,
      );
    } else {
      console.log(`SUCCESS: Got "${expected}" for "${input}"`);
    }
  });
}

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function binaryAgent1(str) {
  biString = str.split(' ');
  uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
    number to a decimal number while simultaneously converting to a char*/

  for (i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join('');
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function binaryAgent2(str) {
  // Separate the binary code by space.
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function binaryAgent3(str) {
  return String.fromCharCode(
    ...str.split(' ').map(function(char) {
      return parseInt(char, 2);
    }),
  );
}
