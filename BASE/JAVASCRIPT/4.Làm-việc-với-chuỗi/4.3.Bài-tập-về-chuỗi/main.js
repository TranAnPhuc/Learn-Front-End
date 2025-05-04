// Bài 1: Đếm số ký tự trong chuỗi
// Yêu cầu: Viết hàm countCharacters(str) nhận vào một chuỗi str và trả về số ký tự trong chuỗi.
console.log("Bài 1: Đếm số ký tự trong chuỗi");
function countCharacters(str) {
  if (typeof str === "string") {
    return console.log(str.length);
  } else {
    return console.log("Đây không phải là chuỗi");
  }
}

countCharacters("Hello bạn");

// Bài 2: Viết hoa chữ cái đầu
// Yêu cầu: Viết hàm capitalizeFirstLetter(str) nhận vào một chuỗi, trả về chuỗi với chữ cái đầu tiên được viết hoa.
console.log("Bài 2: Viết hoa chữ cái đầu");
function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

var myString = capitalizeFirstLetter("javascript");
console.log(myString);

// Bài 3: Đảo ngược chuỗi
// Yêu cầu: Viết hàm reverseString(str) nhận vào một chuỗi và trả về chuỗi đảo ngược.
console.log("Bài 3: Đảo ngược chuỗi");
function reverseString(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  } else {
    return str.split("").reverse().join("");
  }
}

console.log(reverseString("abc"));

// Bài 4: Kiểm tra chuỗi có chứa từ khóa
// Yêu cầu: Viết hàm containsKeyword(str, keyword) nhận vào 2 chuỗi và kiểm tra xem str có chứa keyword hay không. Trả về true hoặc false.
console.log("Bài 4: Kiểm tra chuỗi có chứa từ khóa");
function containsKeyword(str, keyword) {
  if (str.indexOf(keyword) === -1) {
    return false;
  } else {
    return true;
  }
}

console.log(containsKeyword("Những lời kêu gọi hào hùng", "Những"));
