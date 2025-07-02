function count() {
  const giam = document.getElementById("giam");
  const tang = document.getElementById("tang");
  const count = document.getElementById("count");

  let step = 0;
  tang.onclick = function () {
    step++;
    count.innerHTML = step;
  };

  giam.onclick = function () {
    step--;
    count.innerHTML = step;
  };
}

count();
