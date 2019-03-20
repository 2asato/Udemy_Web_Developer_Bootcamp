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

// set pickedColor
var pickedColor = colors[3];

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
      alert("Correct");
    } else {
      this.style.backgroundColor = "#232323";
    }
  })
}
