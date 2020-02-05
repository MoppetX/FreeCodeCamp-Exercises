// Translate the provided string to pig latin. Pig Latin takes the first consonant
// (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

// M Y  S O L U T I O N

function translatePigLatin(str) {
  const AY = 'ay';

  function hasVowels(word) {
    return /[aeiou]/gi.test(word);
  }

  // test whether the FIRST or LAST char is a consonant
  if (hasVowels(str[0] || str[str.length - 1])) {
    return (str += 'w' + AY);
  }

  // test whether they are all consonants
  if (!hasVowels(str)) {
    return (str += AY);
  }

  let consonantCluster = '';
  let i = 0;

  while (i < str.length) {
    if (hasVowels(str[i])) {
      break;
    }
    consonantCluster += str[i];
    i++;
  }

  return str.substr(consonantCluster.length) + consonantCluster + AY;
}

console.log(translatePigLatin('glvmmm'));
console.log(translatePigLatin('glvmma'));

console.log(translatePigLatin('Consonant'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('Algorithm'));
console.log(translatePigLatin('eight'));

// ------------------------------------------------------------------------
// S T E V E  S O L U T I O N

const translatePigLatin1 = word => {
  const SUFFIX = 'ay';
  const regex = /[aeiou]/i;
  const index = word.search(regex);

  if (index > 0) {
    cluster = word.slice(0, index);
    return (word + cluster.toLowerCase() + SUFFIX).slice(index);
  }

  return word + SUFFIX;
};

let algo = piggy;
algo = translatePigLatin;

//
//    Tests
//
const tests = [
  ['steve', 'evestay'],
  ['gay', 'aygay'],
  ['Wikipedia', 'ikipediaway'],
  ['sky', 'skyay'],
  ['skycat', 'atskycay'],
  ['idiot', 'idiotay'],
  ['Asshole', 'Assholeay'],
  ['', 'ay'],
];

let word, latin, expected;

tests.forEach(test => {
  [word, expected] = test;

  latin = algo(word);

  if (latin !== expected) {
    console.error(
      `Failed for >${word}< - got >${latin}< - expected >${expected}<`,
    );
  } else {
    console.log(`SUCCESS: Got expected >${expected}< for >${word}<`);
  }
});

// F C C  S O L U T I O N S
// B A S I C

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function translatePigLatin2(str) {
  var strArr = [];
  var tmpChar;

  // check if the char is consonant using RegEx
  function isConsonant(char) {
    return !/[aeiou]/.test(char);
  }

  // return initial str + "way" if it starts with vowel
  // if not - convert str to array
  if (!isConsonant(str.charAt(0))) return str + 'way';
  else strArr = str.split('');

  // push all consonats to the end of the array
  while (isConsonant(strArr[0])) {
    tmpChar = strArr.shift();
    strArr.push(tmpChar);
  }
  // convert array to string and concatenate "ay" at the end
  return strArr.join('') + 'ay';
}

// test here
translatePigLatin('consonant');
