function countCart() {
  const countElement = document.querySelector(".count");
  const btnAdd = document.getElementById("add");

  let count = 0;
  btnAdd.addEventListener("click", setCountCart);

  function setCountCart() {
    count++;
    countElement.classList.add("active");
    countElement.innerHTML = count;
  }
}

countCart();
