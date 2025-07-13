// Đếm có bao nhiêu số chia hết cho 3 từ 1 đến 100
function countNumber(num) {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
      count++;
    }
  }
  console.log(`Tổng số chia hết cho ${num} là ${count}`);
}

countNumber(12);

// Đếm có bao nhiêu số chia hết cho 3 từ 1 đến 100 (Thêm các số chia hết vào 1 mảng)
function countNumber2(num) {
  let count = 0;
  let listCount = [];
  for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
      count++;
      listCount.push(i);
    }
  }
  console.log(`Tổng số chia hết cho ${num} là ${count}`);
  console.log(listCount);
}

countNumber2(3);

// Đếm có bao nhiêu số chia hết cho 3 từ 1 đến 100 (Thêm các số chia hết vào 1 mảng. Lọc ra số chẵn và lẻ)
function countNumber3(num) {
  let count = 0;
  let listCount = [];
  let listChan = [];
  let listLe = [];
  for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
      count++;
      listCount.push(i);
      if (i % 2 === 0) {
        listChan.push(i);
      } else if (i % 2 !== 0) {
        listLe.push(i);
      }
    }
  }
  console.log(`Tổng số chia hết cho ${num} là ${count}`);
  console.log(listCount);
  console.log(listChan);
  console.log(listLe);
}

countNumber3(3);
