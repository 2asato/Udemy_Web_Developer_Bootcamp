PROCESS

select an element and then add an event listener
  - click on a button
  - hover event on element
  - keypress event on text input


SYNTAX

to add a listener, use method called addEventListener

element.addEventListener(type, functionToCall);

ex. with anonymous function
var button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
  });

ex. with named function
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText)

function changeText() {
  paragraph.textContent = "SOMEONE CLICKED THE BUTTON!"
}
