function renderClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  setInterval(function () {
    console.log(`${hours} ${minutes}`);
  }, 1000);
}

renderClock();
