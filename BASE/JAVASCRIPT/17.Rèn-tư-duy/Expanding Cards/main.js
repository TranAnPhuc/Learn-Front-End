function expanding() {
  const listImg = document.querySelectorAll(".img");

  listImg.forEach(function (img) {
    img.onclick = function () {
      for (let i = 0; i < listImg.length; ++i) {
        if (listImg[i].classList.contains("active")) {
          listImg[i].classList.remove("active");
        }
      }
      img.classList.add("active");
    };
  });
}

expanding();
