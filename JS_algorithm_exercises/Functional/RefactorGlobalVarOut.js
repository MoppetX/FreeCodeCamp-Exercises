// the global variable
var bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(bookList, bookName) {
  return [...bookList].concat(bookName);

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(bookList, bookName) {
  let index = bookList.indexOf(bookName);
  if (index >= 0) {
    let changedList = [...bookList];
    changedList.splice(index, 1);
    return changedList;

    // Add your code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
// console.log( newBookList );
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);
// var newestBookList = remove( add( bookList, 'A Brief History of Time' ), 'On The Electrodynamics of Moving Bodies' );
// console.log( newestBookList );

// console.log( bookList );

//
// F C C  S O L U T I O N S

function add2(list, bookName) {
  return [...list, bookName];
}

function remove2(list, bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter(item => item !== bookName);
  }
}
