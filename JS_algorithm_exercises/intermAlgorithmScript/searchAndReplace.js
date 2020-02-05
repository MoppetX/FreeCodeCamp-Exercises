/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

// M Y  S O L U T I O N
function myReplace(str, before, after) {
  // check whether first letter is uppercase, if so, replace the one on the after word
  function changeCase(beforeLetter = before[0], afterLetter = after[0]) {
    return beforeLetter === beforeLetter.toUpperCase()
      ? afterLetter.toUpperCase()
      : afterLetter;
  }

  after = changeCase(before[0], after[0]) + after.substring(1);

  // let regex = /$(before)/gi;
  let regex = new RegExp(before, 'gi');

  let newString = str.replace(regex, after);

  return newString;
}

// myReplace( 'A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped' );

// ------------------------------------------------------------------------
//   T E S T S
//
let algorithmToTest = myReplace;

let sentence, after, before, expected;

const tests = [
  [
    'A quick brown fox Jumped over the lazy dog',
    'Jumped',
    'leaped',
    'A quick brown fox Leaped over the lazy dog',
  ],
  [
    'This has a spellngi error',
    'spellngi',
    'spelling',
    'This has a spelling error',
  ],
  ['His name is Tom', 'Tom', 'john', 'His name is John'],
  [
    'Let us get back to more Coding',
    'Coding',
    'algorithms',
    'Let us get back to more Algorithms',
  ],
];

tests.forEach(test => {
  [sentence, after, before, expected] = test;

  let returned = algorithmToTest(sentence, after, before);

  if (returned !== expected) {
    console.error(
      `Failed for >${sentence}< - got >${returned}< - expected >${expected}<`,
    );
  } else {
    console.log(`SUCCESS: Got expected >${expected}< for >${sentence}<`);
  }
});

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function myReplace1(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function myReplace2(str, before, after) {
  //Create a regular expression object
  var re = new RegExp(before, 'gi');

  //Check whether the first letter is uppercase or not
  if (/[A-Z]/.test(before[0])) {
    //Change the word to be capitalized
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  //Replace the original word with new one
  var newStr = str.replace(re, after);

  return newStr;
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function myReplace2(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split('');
    var sourceArr = source.split('');

    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else {
        targetArr[i] = targetArr[i].toLowerCase();
      }
    }
    // join modified targetArr to string and return
    return targetArr.join('');
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}
