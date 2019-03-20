// set colors for game
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]

// grab squares
var squares = document.querySelectorAll(".square");
// grab rgb color in title
var rgbDisplay = document.querySelector("#rgbDisplay");
// grab message
var message = document.querySelector("#message");

// set pickedColor
var pickedColor = pickColor();

// display h1 with picked colors rgb nums
rgbDisplay.textContent = pickedColor;

// set squares colors
for (let i = 0; i < squares.length; i++) {
  // add colors to squares
  squares[i].style.backgroundColor = colors[i];
  // click listener to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare clicked color to pickedColor
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!!!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!"
    }
  })
}

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
