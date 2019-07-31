function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  // M Y  S O L U T I O N
  return str.substring( str.length - target.length ) === target;
}

console.log(confirmEnding("Bastian", "g"));

// F C C  S O L U T I O N
//
// B A S I C Solution

//
// I N T E R M E D I A T E  Solution
function confirmEnding2(str, target) {
  
  return str.slice(str.length - target.length) === target;
}

//
// A D V A N C E D  Solution