var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Scoreboard = document.getElementById("p1Scoreboard");
var p2Scoreboard = document.getElementById("p2Scoreboard");
var numInput = document.querySelector("input");
var maxScore = document.getElementById("maxScore")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winnningScore = 5;

numInput.addEventListener("change", function() {
  maxScore.textContent = numInput.value;
  winnningScore = Number(numInput.value);
  reset();
})

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winnningScore) {
      p1Scoreboard.classList.add("winner");
      gameOver = true;
      alert("PLAYER 1 WINS!")
    }
    p1Scoreboard.textContent = p1Score;
  }
})

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winnningScore) {
      p2Scoreboard.classList.add("winner");
      gameOver = true;
      alert("PLAYER 2 WINS!")
    }
    p2Scoreboard.textContent = p2Score;
  }
})

resetButton.addEventListener("click", function() {
  reset();
})

function reset() {
  p1Score = 0;
  p1Scoreboard.textContent = p1Score;
  p1Scoreboard.classList.remove("winner");
  p2Score = 0;
  p2Scoreboard.textContent = p2Score;
  p2Scoreboard.classList.remove("winner");
  gameOver = false;
}
