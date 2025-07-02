const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const clearBtn = document.getElementById("clear");
const count = document.getElementById("count");

let countItem = 0;

addBtn.onclick = () => {
  if (countItem >= 10) {
    alert("Quá số lượng");
  } else {
    countItem++;
    count.innerHTML = countItem;
  }
};

removeBtn.onclick = () => {
  if (countItem <= 0) {
    alert("Không còn sản phẩm");
  } else {
    countItem--;
    count.innerHTML = countItem;
  }
};

clearBtn.onclick = () => {
  countItem = 0;
  count.innerHTML = countItem;
};
