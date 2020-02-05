const watchList = require('./reduce_data.js');

// Add your code below this line

// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
// Recall from prior challenges how to filter data and map over it to pull what you need.
// You may need to create other variables, but save the final average into the variable
// averageRating. Note that the rating values are saved as strings in the object and need
// to be converted into numbers before they are used in any mathematical operations.

let averageRating = watchList
  .filter(movie => movie['Director'] === 'Christopher Nolan')
  .map(movie => parseFloat(movie['imdbRating']))
  .reduce(
    ({ runningTotal, avg }, curr, idx, orig) => {
      runningTotal += curr;
      avg = runningTotal / (idx + 1);

      return {
        runningTotal,
        avg,
      };
    },
    {
      runningTotal: 0,
      avg: 0,
    },
  ).avg;

// Add your code above this line

console.log(averageRating);

//
// F C C  S O L U T I O N S

var averageRating2 =
  watchList
    .filter(x => x.Director === 'Christopher Nolan')
    .map(x => Number(x.imdbRating))
    .reduce((x1, x2) => x1 + x2) /
  watchList.filter(x => x.Director === 'Christopher Nolan').length;

console.log(averageRating2);
