function largestNumber(array) {
  let x = 0;
  let max = array[x];

  while (x < array.length) {
    if (array[x] > max) {
      max = array[x];
    } else {
      x += 1;
    }
  }
  return max;
}

console.log(largestNumber([1, 3, 7, 2, 5]));
