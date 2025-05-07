/*
    Math object

    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()
*/

// - Math.PI (trả lại số PI)
console.log(Math.PI);

// - Math.round() (làm tròn số trên 1.5 sẽ làm tròn lên ngược lại làm tròn dưới)
console.log(Math.round(1.5));

// - Math.abs() (trả về giá trị tuyệt đối)
console.log(Math.abs(-10));

// - Math.ceil() (chỉ làm tròn trên)
console.log(Math.ceil(1.2));

// - Math.floor() (chỉ làm tròn dưới)
console.log(Math.floor(1.8));

// - Math.random() (trả về số thập phân nhỏ hơn 1)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

// - Math.min() (lấy ra con số nhỏ nhất)
console.log(Math.min(10, 8, 4, 19));

// - Math.max() (lấy ra con số lớn nhất)
console.log(Math.max(10, 8, 4, 19));
