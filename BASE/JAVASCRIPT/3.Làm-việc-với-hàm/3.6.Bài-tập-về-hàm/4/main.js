function reverseString(str) {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  } else {
    return 0;
  }
}

console.log(reverseString("abc"));
