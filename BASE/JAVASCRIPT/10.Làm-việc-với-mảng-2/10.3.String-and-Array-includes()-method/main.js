// includes() method

var title = "Responsive web design";

// phương thức includes() của đối tượng String được sử dụng để kiểm tra xem một chuỗi con (substring) có tồn tại trong chuỗi gốc hay không.
// Phương thức này trả về true nếu chuỗi con có mặt trong chuỗi gốc, ngược lại trả về false.
// Có 2 đối số :
// searchString: Chuỗi con mà bạn muốn kiểm tra.
// position (tuỳ chọn): Vị trí bắt đầu tìm kiếm trong chuỗi gốc. Mặc định là 0, nghĩa là bắt đầu từ đầu chuỗi.
console.log(title.includes("web"));

var courses = ["Javascript", "PHP", "Dart", "C++"];

// Phương thức includes() trong JavaScript cũng có thể được sử dụng với mảng (array) để kiểm tra xem một phần tử có tồn tại trong mảng hay không.
// Phương thức này trả về true nếu phần tử tìm thấy trong mảng, và false nếu không.
// Có 2 đối số:
// valueToFind: Phần tử mà bạn muốn kiểm tra có tồn tại trong mảng hay không.
// fromIndex (tuỳ chọn): Vị trí bắt đầu tìm kiếm trong mảng. Mặc định là 0. Nếu chỉ số này là số âm, sẽ tính toán để biết vị trí bắt đầu
// ở đây độ dài mảng là 4 + -1 = 3 nên sẽ bắt đầu từ 3 còn nếu tính toán mà bé hơn 0 thì vị trí vẫn bắt đầu 0
console.log(courses.includes("C++", -1));
