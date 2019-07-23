//Setup
var contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin']
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile( name, prop ) {
// Only change code below this line

// If name does not correspond to any contacts then return "No such contact"
// If prop does not correspond to any valid properties of a contact found to
// match name then return "No such property"
  
  for ( let i = 0; i < contacts.length; i++ ) {
    let currentContact = contacts[i];
    
    // check if name is an actual contact's firstName and the given property
    // (prop) is a property of that contact.
    if ( currentContact.firstName === name ) {
      
      if ( currentContact.hasOwnProperty( prop ) ) {
        // If both are true, then return the "value" of that property.
        return contacts[i][prop];
        
      }
      else if ( !currentContact.hasOwnProperty( prop ) ) {
        // If prop does not correspond to any valid properties of a contact found
        // to match name then return "No such property"
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

// Only change code above this line

// Change these values to test your function
console.log( lookUpProfile( 'Akira', 'likes' ) );