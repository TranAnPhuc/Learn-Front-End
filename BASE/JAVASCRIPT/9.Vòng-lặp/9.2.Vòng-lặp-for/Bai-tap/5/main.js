// Tính tổng các số từ 1 đến 100
function sum() {
  let num = 0;
  for (let i = 1; i <= 100; i++) {
    num += i;
  }
  console.log(num);
}

sum();

function sum2() {
  let num = 0;
  let i = 1;
  while (i <= 100) {
    num += i;
    i++;
  }
  console.log(num);
}

sum2();
