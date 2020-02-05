function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  // M Y  S O L U T I O N
  return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding('Bastian', 'Bastiang'));
// console.log(confirmEnding2("Bastian", "Bastiang"));

// F C C  S O L U T I O N

//
// I N T E R M E D I A T E  Solution
function confirmEnding2(str, target) {
  return str.slice(str.length - target.length) === target;
}

//
// A D V A N C E D  Solution
