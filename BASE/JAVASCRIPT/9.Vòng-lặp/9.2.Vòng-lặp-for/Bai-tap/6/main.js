// Tính giai thừa của một số n
function fibonacci(num) {
  let numStart = 1;
  for (let i = 1; i <= num; i++) {
    numStart *= i;
  }
  console.log(numStart);
}

fibonacci(5);

function fibonacci2(num) {
  let result = 1;
  let i = 1;
  while (i <= num) {
    result *= i;
    ++i;
  }
  console.log(result);
}

fibonacci2(5);
