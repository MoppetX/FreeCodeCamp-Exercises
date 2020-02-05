/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

// M Y  S O L U T I O N

function fearNotLetter(str) {
  if (!typeof str === 'string' || !str instanceof String) {
    return 'must use Strings';
  }

  const ABC = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  let i = 0;

  while (i < str.length) {
    // need to check by character combination
    // meaning substrings lik ab, abc, abce...
    if (ABC.search(str.substring(0, i + 1)) < 0) {
      // as soon as ABC.search returns -1, I need to...
      // A) get the .indexOf of the LAST character in my current substring from ABC
      // B) go down by -1 index
      // C) retrieve & return that letter from ABC (or undefined)

      // let foundIndex = ABC.indexOf( str[i] );

      return ABC.charAt(ABC.indexOf(str[i]) - 1);
    }
    i++;
  }

  return undefined;
}

// fearNotLetter( 'abce' );

// M Y  S O L U T I O N

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function fearNotLetter1(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter2(str) {
  let compare = str.charCodeAt(0),
    missing;

  str.split('').map(function(letter, index) {
    if (str.charCodeAt(index) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function fearNotLetter3(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

function fearNotLetter4(str) {
  var allChars = '';
  var notChars = new RegExp('[^' + str + ']', 'g');

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join('')
    : undefined;
}

// ------------------------------------------------------------------------
//   T E S T S

let algorithmToTest = fearNotLetter;

let input, expected;

const tests = [
  ['abce', 'd'],
  ['abcdefghjklmno', 'i'],
  ['stvwx', 'u'],
  ['bcdf', 'e'],
  ['abcdefghijklmnopqrstuvwxyz', undefined],
];

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

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// ------------------------------------------------------------------------
// A D V A N C E D Solution
