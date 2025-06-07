// Optional chaining (?.) là cú pháp giúp truy cập an toàn các thuộc tính hoặc
// phương thức của một đối tượng có thể là null hoặc undefined mà không gây lỗi.
var obj = {
  name: "Phúc",
  address: {
    street: "Đường 3/2",
  },
};

if (obj?.address?.street) {
  console.log(obj.address.street);
}
