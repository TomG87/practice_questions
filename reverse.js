function reverseString(string) {
  let newString = [];
  newString = string.split("").reverse().join("");

  return newString;
}
console.log(reverseString("reverse"));
