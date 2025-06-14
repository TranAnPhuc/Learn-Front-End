function isWeekend() {
  const today = new Date();
  const day = today.getDay(); // 0 = Chủ Nhật, 6 = Thứ Bảy
  return day;
}

if (isWeekend() === 0) {
  console.log("Hôm nay là cuối tuần");
} else if (isWeekend() === 6) {
  console.log("Hôm nay là ngày trong tuần");
}
