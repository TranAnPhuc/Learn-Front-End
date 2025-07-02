function fibonacci(num) {
  let start = 1;

  for (let i = 1; i <= num; ++i) {
    start *= i;
    console.log(start);
  }
}

fibonacci(6);

function evenNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumber(10);
