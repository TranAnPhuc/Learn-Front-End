/*
Làm việc với Array

1.To String
2.Join
3.Pop
4.Push
5.Shift
6.Unshift
7.Splicing
8.Concat
9.Slicing
*/

var languages = ["Javascript", "Golang", "PHP"];

// 1.To String (chuyển 1 array sang string)
console.log(languages.toString());

// 2.Join (chuyển 1 array sang string nhưng có thể thay đổi ngăn cách)
console.log(languages.join(" - "));

// 3.Pop (xóa phần tử cuối mảng và trả lại chính phần tử đã xóa)
// console.log(languages.pop());
// console.log(languages);

// 4.Push (thêm phần tử vào cuối mảng và trả về độ dài mới)
// console.log(languages.push("Dart", "Java"));
// console.log(languages);

// 5.Shift (xóa phần tử đầu mảng và trả lại chính phần tử đã xóa)
// console.log(languages.shift());
// console.log(languages);

// 6.Unshift (thêm phần tử vào đầu mảng và trả về độ dài mới)
// console.log(languages.unshift("Dart", "Java"));
// console.log(languages);

// 7.Splicing (xóa đi vị trí bất kỳ trong array và chèn vào vị trí bất kỳ)
// console.log(languages.splice(1, 0, "Dart", "Java"));
// console.log(languages);

// 8.Concat (đùng để nối array)
// var languages2 = ["Dart", "Java"];

// console.log(languages.concat(languages2));

// 9.Slicing (dùng để cắt những element trong mảng)
console.log(languages.slice(1, 2));
console.log(languages.slice(-2, -1));
