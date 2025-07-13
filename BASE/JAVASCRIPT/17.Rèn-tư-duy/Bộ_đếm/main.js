window.onload = function () {
  const secondsElement = document.getElementById("seconds");
  const startElement = document.getElementById("start");
  const pauseElement = document.getElementById("pause");

  let seconds = 0;
  startElement.onclick = function () {
    setInterval(() => {
      seconds++;
      secondsElement.innerHTML = seconds;
    }, 1000);
  };
};
