// toggle the body's background color between purple and white when button is clicked

// grab the body
var daBody = document.querySelector("body");
// grab the button
var daButton = document.querySelector("button");

var isPurple = false;

// set event listener
daButton.addEventListener("click", function() {
  if (isPurple) {
    daBody.style.background = "white";
    // isPurple = false;
  } else {
    daBody.style.background ="purple";
    // isPurple = true;
  }
  // switches isPurple between true and false
  isPurple = !isPurple
})

// with class
daButton.addEventListener("click", function() {
  daBody.classList.toggle("purple");
})
