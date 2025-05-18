// DOM CSS

var boxElement = document.querySelector(".box");

console.log(boxElement.style); // Inline CSS

boxElement.style.width = "100vw";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
  width: "100px",
  height: "100px",
  backgroundColor: "blue",
});

// Lấy ra giá trị CSS Inline
console.log(boxElement.style.backgroundColor);
