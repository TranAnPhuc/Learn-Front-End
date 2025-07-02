const headsBtn = document.getElementById("heads");
const tailsBtn = document.getElementById("tails");

const numberRandom = Math.random();
let result = "";

if (numberRandom < 0.5) {
  result = "heads";
} else {
  result = "tails";
}

headsBtn.onclick = function () {
  const resultPick = result === "heads" ? "You win" : "You lose";
  console.log(resultPick);
};

tailsBtn.onclick = function () {
  const resultPick = result === "tails" ? "You win" : "You lose";
  console.log(resultPick);
};
