// LÀM VIỆC VỚI CHUỖI

var myString = "                Đây là một chuỗi kiểm tra";

// 1.Length(Kiểm tra độ dài của chuỗi)
// console.log(myString.length);

// 2.Find index(Tìm vị trí ký tự nằm trong chuỗi và trả về chỉ mục đầu tiên của chuỗi)
// console.log(myString.indexOf("là", 6));
// console.log(myString.lastIndexOf("là"));
// console.log(myString.search("là"));
const char = "Bé bòng bông đi đá bóng";

function findIndex(value) {
  console.log(char.indexOf("bóng", -20));
}

findIndex(char);

// 3.Cut string(Cắt chuỗi và trả về bản sao của chuỗi)
// console.log(myString.slice(4, 6));
// console.log(myString.slice(4));
// console.log(myString.slice(0));
// console.log(myString.slice(-8, -3));
function sliceString(value) {
  console.log(value.slice(0, 2));
}

sliceString(char);

// 4.Replace(Ghi đè chuỗi)
// console.log(myString.replace("là", "is"));

// 5.Convert to upper case(chuyển đổi chuỗi thành chữ in hoa)
// console.log(myString.toUpperCase());

// 6.Convert to lower case(chuyển đổi chuỗi thành chữ in thường)
// console.log(myString.toLowerCase());

// 7.Trim(loại bỏ khoảng trắng thừa ở 2 đầu)
// console.log(myString.trim());

// 8.Split(Cắt 1 chuỗi thành array dựa vào điểm chung)
// var languages = "Javascript, Golang, PHP";
// console.log(languages.split(", "));
function splitString(value) {
  console.log(value.split(" "));
}

splitString(char);

// 9.Get a character by index
// const myString2 = "An Phúc";
// charAt (khi truyền vào index không có sẽ trả về chuỗi rỗng)
// console.log(myString2.charAt(0));
// [] (khi truyền vào index không có sẽ trả về undefined)
// console.log(myString2[0]);
