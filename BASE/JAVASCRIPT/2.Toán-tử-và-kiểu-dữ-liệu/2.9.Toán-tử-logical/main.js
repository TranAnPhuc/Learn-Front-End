/*
Toán tử logical
1.&& - And
2.|| - Or
3.! - Not
*/

var a = 1;
var b = 2;
var c = 3;

// && - And (Nếu trong điều kiện có 1 giá trị không đúng câu lệnh sẽ không được thực thi)
if (a > 0 && b > 0) {
  console.log("DIEU KIEN DUNG!");
}

// || - Or (Nếu trong điều kiện có 1 giá trị không đúng câu lệnh vẫn được thực thi)
if (a > 0 || b < 0) {
  console.log("DIEU KIEN DUNG!");
}

// ! - Not (Khi dùng nó sẽ phủ định lại điều kiện)
if (!(a < 0)) {
  console.log("DIEU KIEN DUNG!");
}
