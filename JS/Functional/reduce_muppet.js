const data = require("./reduce_data.js");

let debug = true;
debug = false;

// Add your code below this line

// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
// Recall from prior challenges how to filter data and map over it to pull what you need.
// You may need to create other variables, but save the final average into the variable
// averageRating. Note that the rating values are saved as strings in the object and need
// to be converted into numbers before they are used in any mathematical operations.

function addScores({ runningTotal, counter }, popularity) {
  return {
    runningTotal: runningTotal + popularity,
    counter: counter + 1,
    avg: runningTotal / counter
  };
}

console.log(
  data
    .filter(movie => movie["Director"] === "Christopher Nolan")
    .map(movie => parseFloat(movie["imdbRating"]))
);

let averageRating = data
  .filter(movie => movie["Director"] === "Christopher Nolan")
  .map(movie => parseFloat(movie["imdbRating"]))
  .reduce(
    ({ runningTotal, counter, avg }, curr) => {
      // console.log( `TOTAL: ${runningTotal}, counter: ${counter},  AVG:${avg}` );

      runningTotal += curr;
      counter += 1;
      avg = runningTotal / counter;

      return {
        runningTotal,
        counter,
        avg
      };
    },
    { runningTotal: 0, counter: 0, avg: 1 }
  );

console.log(
  `1a: TOTAL: ${averageRating.runningTotal}, COUNTER: ${averageRating.counter}, AVG: ${averageRating.avg}`
);

averageRating = data
  .filter(movie => movie["Director"] === "Christopher Nolan")
  .map(movie => parseFloat(movie["imdbRating"]))
  .reduce(
    ({ runningTotal, avg }, curr, idx, orig) => {
      // console.log( `TOTAL: ${runningTotal}, index: ${idx},  AVG:${avg}` );

      runningTotal += curr;
      avg = runningTotal / (idx + 1);

      return {
        runningTotal,
        avg
      };
    },
    { runningTotal: 0, avg: 0 }
  );

console.log(
  `1b: TOTAL: ${averageRating.runningTotal}, COUNTER: X, AVG: ${averageRating.avg}`
);

averageRating = data
  .filter(movie => movie["Director"] === "Christopher Nolan")
  .map(movie => parseFloat(movie["imdbRating"]))
  .reduce((avg, curr, idx, orig) => {
    // console.log( `TOTAL: ${runningTotal}, index: ${idx},  AVG:${avg}` );

    debug && console.log(orig.slice(0, idx + 1));
    total = orig.slice(0, idx + 1).reduce((acc, cur) => acc + cur, 0);
    debug && console.log(total);

    avg = total / (idx + 1);

    return {
      avg
    };
  }, 0);

console.log(`1c: TOTAL: XY.Z, COUNTER: X, AVG: ${averageRating.avg}`);

averageRating = data
  .filter(movie => movie["Director"] === "Christopher Nolan")
  .map(movie => parseFloat(movie["imdbRating"]))
  .reduce((avg, curr, idx, orig) => {
    // console.log( `TOTAL: ${runningTotal}, index: ${idx},  AVG:${avg}` );

    if (idx === orig.length - 1) {
      total = orig.reduce((acc, cur) => acc + cur, 0);
      avg = total / (idx + 1);
    }

    return {
      avg
    };
  }, 0);

console.log(`1d: TOTAL: XY.Z, COUNTER: X, AVG: ${averageRating.avg}`);

// process.exit( 0 )

const reducer = ({ runningTotal, counter, avg }, curr) => {
  // runningTotal += curr;
  // counter += 1;
  // avg = runningTotal / counter;

  function tot() {
    debug && console.log("IN tot()");
    debug && console.log(runningTotal);
    debug && console.log(curr);

    runningTotal += curr;

    debug && console.log(runningTotal);

    return runningTotal;
  }

  function count() {
    debug && console.log("IN count()");
    debug && console.log(counter);

    counter += 1;

    debug && console.log(counter);

    return counter;
  }

  function average() {
    debug && console.log("IN average()");
    debug && console.log(runningTotal);
    debug && console.log(counter);

    avg = runningTotal / counter;

    debug && console.log(avg);

    return avg;
  }

  return {
    runningTotal: tot(),
    counter: count(),
    avg: average()
  };
};

averageRating = data
  .filter(movie => movie["Director"] === "Christopher Nolan")
  .map(movie => parseFloat(movie["imdbRating"]))
  .reduce(reducer, { runningTotal: 0, counter: 0, avg: 1 });

// Add your code above this line

console.log(
  `2a: TOTAL: ${averageRating.runningTotal}, COUNTER: ${averageRating.counter}, AVG: ${averageRating.avg}`
);
