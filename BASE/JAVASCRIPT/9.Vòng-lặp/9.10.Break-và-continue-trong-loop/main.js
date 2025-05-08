// Break và Continue in loop (có thể dùng trong tất cả vòng lặp)
// Break giúp thoát khỏi vòng lặp
// Continue để bỏ qua 1 bước lặp

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
