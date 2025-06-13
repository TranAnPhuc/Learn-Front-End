/*
Yêu cầu:
Bạn có danh sách các đơn hàng như sau. Mỗi đơn hàng gồm: tên khách hàng - sản phẩm - số lượng
Bạn hãy:
- In ra thông tin đơn hàng như bài trước (dùng forEach()).
- Tạo một thống kê tổng số lượng mỗi sản phẩm được đặt (ví dụ: Trà sữa: 5, Cà phê: 3).
- In ra bảng thống kê đó.
*/

const orders = [
  { customer: "Nguyễn Văn A", product: "Trà sữa", quantity: 2 },
  { customer: "Trần Thị B", product: "Cà phê", quantity: 1 },
  { customer: "Lê Văn C", product: "Trà đào", quantity: 3 },
  { customer: "Phạm Thị D", product: "Trà sữa", quantity: 1 },
  { customer: "Ngô Văn E", product: "Cà phê", quantity: 2 },
];

const productStats = {};

orders.forEach((order) => {
  console.log(
    `Khách hàng ${order.customer} đã đặt ${order.quantity} ${order.product}.`
  );
  if (productStats[order.product]) {
    productStats[order.product] += order.quantity;
  } else {
    productStats[order.product] = order.quantity;
  }
});

console.log("\nTổng số lượng theo sản phẩm:");
for (const product in productStats) {
  console.log(`${product}: ${productStats[product]}`);
}
