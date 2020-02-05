// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// The built-in repeat()-method should not be used

function repeatStringNumTimes(str, num) {
  // M Y  S O L U T I O N
  if (num <= 0) {
    return '';
  }

  let echoString = '';

  while (num > 0) {
    echoString += str;
    num--;
  }

  return echoString;
}

console.log(repeatStringNumTimes2('abc', 3));

// F C C  S O L U T I O N S
//
// B A S I C Solution
function repeatStringNumTimes2(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

//
// I N T E R M E D I A T E  Solution

function repeatStringNumTimes3(str, num) {
  if (num < 0) return '';
  if (num === 1) return str;
  else return str + repeatStringNumTimes3(str, num - 1);
}

//
// A D V A N C E D  Solution

function repeatStringNumTimes4(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes4('abc', 3);
