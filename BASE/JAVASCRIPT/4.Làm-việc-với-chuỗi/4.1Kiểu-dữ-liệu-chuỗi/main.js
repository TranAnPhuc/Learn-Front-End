/*
CHUỖI TRONG JAVASCRIPT

1.Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2.Một số case sử dụng backslash (\)
3.Xem độ dài chuỗi
4.Chú ý độ dài khi viết code
5.Template string ES6
*/

// 1.Tạo chuỗi: Có 2 cách
var fullName1 = "An Phúc";
var fullName2 = new String("An Phúc");

// 2.Một số case sử dụng backslash (\)
var nameFilm = 'Dragon Ball có "Goku"';
console.log(nameFilm);

// 3.Xem độ dài chuỗi: dùng thuộc tính là "length"
var showAge = "Tôi năm nay 20 tuổi";
console.log(showAge.length);

// 4.Chú ý độ dài khi viết code: nên viết tối đa 80 ký tự trên 1 dòng

// 5.Template string ES6
var firstName = "An";
var latsName = "Phúc";

console.log(`Tôi là: ${firstName} ${latsName}`);
