// Use the split method inside the splitify function to split str into an array of words.
// The function should return the array. Note that the words are not always separated by
// spaces, and the array should not contain punctuation.

function splitify(str) {
  // Add your code below this line
  const rmAllPunctuation = /[.,\/#!$%^&\*;:{}=\-_`~()]/g;
  const rmExtraSpaces = /\s{2,}/g;
  const rmSpacesAndPunctuation = /[.,\/#!$%^&\*;:{}=\-_`~()\s{2}]/g;

  return str.split(rmSpacesAndPunctuation);

  // Add your code above this line
}

console.log(splitify('Hello World,I-am code'));

//
// F C C  S O L U T I O N

function splitify2(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}

console.log(splitify2('Hello World,I-am code'));

// return str.split(/\W/).join(" ");
