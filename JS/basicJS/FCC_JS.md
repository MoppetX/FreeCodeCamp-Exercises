# FreeCodeCamp

##JS



####arrays

- `.pop()`is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, `.pop()`removes the last element from an array and **returns that element**.

  ```javascript
  var threeArr = [1, 4, 6];
  var oneDown = threeArr.pop();
  console.log(oneDown); // Returns 6
  ```


- `.unshift()`works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()`adds the element at the beginning of the array.

  

#### return

- A function can include the `return`statement but it does not have to. In the case that the function doesn't have a `return`statement, when you call it, the function processes the inner code but the returned value is `undefined`.



####comparison operators

- Like the equality operator, greater than operator will convert data types of values while comparing.

#### objects

- We can delete properties from objects like this:

  `delete ourDog.bark;`
  
- pretty printing JSON (the number at the end is the indentation)
	`console.log(JSON.stringify(object, null, 2));`
  
- Prevent Object Mutation
  `Object.freeze(obj);`



#### functions

- The `parseInt()`function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

- multiple `conditional operators`:

  > function findGreaterOrEqual(a, b) {
  >   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  > }

#### Strict

- Note the `"use strict"`. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

#### const

- `const`has all the awesome features that `let`has, with the added bonus that variables declared using `const`are read-only. 