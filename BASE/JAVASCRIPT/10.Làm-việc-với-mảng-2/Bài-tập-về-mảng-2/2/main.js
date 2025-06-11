/*
Đề bài:
Bạn có một danh sách đơn hàng được lưu dưới dạng mảng các đối tượng. Mỗi đơn hàng chứa 
thông tin tên khách hàng, tên sản phẩm và số lượng. Hãy sử dụng forEach() để:
- In ra từng đơn hàng theo định dạng sau:
👉 "Khách hàng [tên] đã đặt [số lượng] [tên sản phẩm]."
- Tính tổng số lượng sản phẩm được đặt (gợi ý: dùng thêm biến đếm bên ngoài vòng forEach).
*/

const orders = [
  { customer: "Nguyễn Văn A", product: "Trà sữa", quantity: 2 },
  { customer: "Trần Thị B", product: "Cà phê", quantity: 1 },
  { customer: "Lê Văn C", product: "Trà đào", quantity: 3 },
];

let countOrders = 0;

orders.forEach(function (order) {
  console.log(
    `Khách hàng ${order.customer} đã đặt ${order.quantity} ${order.product}.`
  );
  countOrders += order.quantity;
});

console.log(`Tổng số lượng sản phẩm được đặt là ${countOrders}`);
