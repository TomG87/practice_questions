// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function dups(array) {
  var x = 0;
  var newArray = [];

  while (x < array.length) {
    if (!newArray.includes(array[x])) {
      newArray.push(array[x]);
    } else {
      x += 1;
    }
  }
  return newArray;
}

console.log(dups(["John", "Taylor", "John"]));
