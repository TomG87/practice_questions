// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.

function addUp(number) {
  if (number < 1 || number > 1000) {
    return "Outside range of numbers.  Please choose a number between 1 and 1000";
  } else {
    return (number * (number + 1)) / 2;
  }
}

console.log(addUp(600));
