// In bảng cửu chương bất kì
function bangCuuChuong(num) {
  let i = num;
  do {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    i++;
  } while (i > i + 1);
}

bangCuuChuong(2);
