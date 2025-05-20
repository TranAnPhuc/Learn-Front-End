// Lấy ra các element trong HTML
var imgElement = document.querySelector(".img");
var buttonElement = document.querySelector(".change-img");

function hideShowImage() {
  buttonElement.addEventListener("click", function () {
    if (imgElement.style.display === "none") {
      imgElement.style.display = "block";
    } else {
      imgElement.style.display = "none";
    }
  });
}

hideShowImage();
