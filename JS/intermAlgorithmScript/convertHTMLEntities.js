/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
*/

// M Y  S O L U T I O N

function convertHTML( str ) {
  
  let dict = {
    '&': '&amp;',
    '<': '&​lt;',
    '>': '&​gt;',
    '\"': '&​quot;',
    '\'': '&​apos;'
  };
  
  let newArr = [...str].map( character => {
    
    console.log( character );
    
    switch ( character ) {
      case '&':
        return '&amp;';
      case '<':
        return '&​lt;';
      case '>':
        return '&​gt;';
      case '\"':
        return '&​quot;';
      case '\'':
        return '&​apos;';
      default:
        return character;
    }
    
  } );
  
  console.log( newArr.join( '' ) );
  
  return str;
}

function convertHTML1( str ) {
  
  let dict = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  
  return [...str].map( character => dict.hasOwnProperty( character ) ? dict[character] : character )
                 .join( '' );
}

// console.log( convertHTML1( 'Dolce & Gabbana' ) );
// console.log( convertHTML1( 'Hamburgers < Pizza < Tacos' ) );

// ------------------------------------------------------------------------
//   T E S T S

const tests = [
  ['Dolce & Gabbana', 'Dolce &amp; Gabbana'],
  ['Hamburgers < Pizza < Tacos', 'Hamburgers &lt; Pizza &lt; Tacos'],
  ['Stuff in "quotation marks"', 'Stuff in &quot;quotation marks&quot;'],
  ['Schindler\'s List', 'Schindler&apos;s List'],
  ['<>', '&lt;&gt;']
];

let algorithmToTest = convertHTML1;

let input,
    expected;

runTests();

function runTests() {
  tests.forEach( test => {
    [input, expected] = test;
    
    let results = algorithmToTest( input );
    
    if ( results !== expected ) {
      console.error(
        `FAILED:  "${input}" | got "${results}" | expected >${expected}<`
      );
    }
    else {
      console.log( `SUCCESS: Got "${expected}" for "${input}"` );
    }
  } );
}

// ------------------------------------------------------------------------
// F C C  S O L U T I O N S
// B A S I C

function convertHTML2( str ) {
  // Split by character to avoid problems.
  
  var temp = str.split( '' );
  
  // Since we are only checking for a few HTML elements I used a switch
  
  for ( var i = 0; i < temp.length; i++ ) {
    switch ( temp[i] ) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case '\'':
        temp[i] = '&apos;';
        break;
    }
  }
  
  temp = temp.join( '' );
  return temp;
}

// ------------------------------------------------------------------------
// I N T E R M E D I A T E  Solution

function convertHTML4( str ) {
//Chaining of replace method with different arguments
  str = str.replace( /&/g, '&amp;' )
           .replace( /</g, '&lt;' )
           .replace( />/g, '&gt;' )
           .replace( /"/g, '&quot;' )
           .replace( /'/g, '&apos;' );
  return str;
}

// ------------------------------------------------------------------------
// A D V A N C E D Solution

function convertHTML5( str ) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split( '' ).map( entity => htmlEntities[entity] || entity ).join( '' );
}