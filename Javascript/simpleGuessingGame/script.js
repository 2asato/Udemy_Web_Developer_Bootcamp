// create secret number
var secretNum = Math.floor(Math.random() * 10);
console.log(secretNum);

// ask user to guess
var guess = Number(prompt("Guess a number between 1 and 10"));
console.log(guess);

// check guess
if (guess === secretNum){
  alert("YOU GOT IT!!!")
}
else if (guess > secretNum) {
  alert("Too high! Refresh and try again.")
}
else {
  alert("Too low! Refresh and try again.")
}
