// // ask the user "are we there yet"
// var response = prompt("Are we there yet?")
//
// // keep asking until user enters "yes" or "yeah"
// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?")
// }
//
// // then alert "yay, we finally made it!"
// alert("Yay, we finally made it!")

// BONUS: a user can enter any string as long as it contains "yes" or "yeah"
var response = prompt("Are we there yet?")

while(response.indexOf("yes") === -1 && response.indexOf("yeah")) {
  var response = prompt("Are we there yet?")
}
alert("Yay, we made it!")
