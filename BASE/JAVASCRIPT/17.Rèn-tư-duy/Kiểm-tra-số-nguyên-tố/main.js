function isPrime() {
  const input = document.querySelector("#checkNumber");
  const button = document.querySelector("#btn");
  const result = document.querySelector(".result");

  button.addEventListener("click", handleClickButton);

  function handleClickButton() {
    const valueInput = Number(input.value);
    if (!valueInput) {
      return alert("Vui lòng nhập số hợp lệ để kiểm tra");
    }

    if (valueInput <= 1) {
      result.innerHTML = `Phải nhập số lớn 1`;
      return;
    }

    let isPrimeNumber = true;

    for (let i = 2; i <= Math.sqrt(valueInput); i++) {
      if (valueInput % i === 0) {
        isPrimeNumber = false;
        break;
      }
    }

    if (isPrimeNumber) {
      result.innerHTML = `Số ${valueInput} là số nguyên tố`;
    } else {
      result.innerHTML = `Số ${valueInput} không phải số nguyên tố`;
    }
  }
}

isPrime();
