// Truncate a string (first argument) if it is longer than the given maximum string
// length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  // M Y  S O L U T I O N

  return str.length <= num ? str : str.slice(0, num) + '...';
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString2('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString3('A-tisket a-tasket A green and yellow basket', 8));

// console.log( truncateString( "A-", 1 ) );

// F C C  S O L U T I O N S
//
// B A S I C Solution

function truncateString2(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

//
// A D V A N C E D  Solution
function truncateString3(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

// If our if statement above fails, we move to the else, where we are going to return a “slice”
// of the string. The slice method extracts a section of a string and returns a new string.
// Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary
// operator: num > 3 ? num - 3 : num. In our ternary, if num is larger than 3, we must factor in
// the three dots to our total length, and thus we end our slice at num-3. If num is less than or
// equal to 3, our slice gets an end variable of just num. Finally, the '...' is appended to the
// end of our new string and is returned.
//
// } else { return str.slice(0, num > 3 ? num - 3 : num) + ’…’; }
