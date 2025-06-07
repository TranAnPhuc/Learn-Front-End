// Tagged template literals
// Tagged Template Literals (tạm dịch: chuỗi mẫu có gắn thẻ) là một tính năng nâng cao trong JavaScript,
// mở rộng cách sử dụng template literals (chuỗi mẫu sử dụng dấu backtick ` `).
// Nó cho phép bạn xử lý chuỗi mẫu với một hàm "tag" đặc biệt trước dấu backtick.
function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, curr) => {
        return [...acc, `<span>${curr}</span>`, strings.shift()];
      },
      [first]
    )
    .join("");
}

var brand = "F8";
var course = "Javascript";

const html = highlight`Học lập trình ${course} tại ${brand}!`;

console.log(html);

document.querySelector("p").innerHTML = html;
