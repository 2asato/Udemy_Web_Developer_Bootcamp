// set colors for game
var colors = generateRandomColors(6);

// grab squares
var squares = document.querySelectorAll(".square");
// grab rgb color in title
var rgbDisplay = document.querySelector("#rgbDisplay");
// grab message
var message = document.querySelector("#message");
// grab h1
var h1 = document.querySelector("h1");
// grab reset button
var reset = document.querySelector("#reset");
// grab easy button
var easy = document.querySelector("#easy");
// grab hard button
var hard = document.querySelector("#hard");
var numOfSquares = 6;

// set pickedColor
var pickedColor = pickColor();

easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  rgbDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  rgbDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
})

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
      reset.textContent = "Play Again";
      changeColors(clickedColor);
      // changes h1 color on correct guess
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!"
    }
  })
}

// changes color of squares
function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

// gets the random color to match
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// adds random colors to array to display
function generateRandomColors(numOfColors) {
  // make an array
  var randomColorsArr = [];
  // add numOfColors random colors to array
  for (let i = 0; i < numOfColors; i++) {
    // get random color and push into array
    randomColorsArr.push(randomColor());
  }
  // return that array
  return randomColorsArr;
}

// generates random colors
function randomColor() {
  // pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 -255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
  // console.log(rgb);
}

// get new colors/reset
reset.addEventListener("click", function() {
  // generate all new colors
  colors = generateRandomColors(numOfSquares);
  // pick a random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  rgbDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // change h1 background on reset
  h1.style.backgroundColor = "#232323";
  message.textContent = "";
})
