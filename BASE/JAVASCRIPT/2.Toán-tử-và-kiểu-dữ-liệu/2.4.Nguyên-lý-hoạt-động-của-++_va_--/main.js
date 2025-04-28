/*
Toán tử ++ --
Prefix & Postfix
*/

var a = 4;

// Việc 1: + 1 cho a, a = a + 1 => a = 5
// Việc 2: Trả về a sau khi được + 1
var outPut1 = ++a;
console.log(outPut1);

var b = 4;

// Việc 1: tạo ra 1 biến 'b copy', 'b copy' = 4
// Việc 2: cộng 1 cho b, b = b + 1 => b = 5
// Việc 3: trả về 'b copy'
var outPut2 = b++;
console.log(outPut2);

// Ví dụ
var c = 5;

var outPut3 = c++ * ++c - c-- * ++c;
// 5 * 7 - 7 * 7
console.log("Output: ", outPut3);
