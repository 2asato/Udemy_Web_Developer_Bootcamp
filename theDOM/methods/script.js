// getElementById

var tag = document.getElementById("highlight")
// returns <li id="highlight">List Item 1</li>


// getElementsByClassName

var tags = document.getElementsByClassName("bolded")
// returns  <li class="bolded">List Item 2</li>
//         <li class="bolded">List Item 3</li>


// getElementsByTagName

var tags = document.getElementsByTagName("li")
// returns <li id="highlight">List Item 1</li>
//         <li class="bolded">List Item 2</li>
//         <li class="bolded">List Item 3</li>


// querySelector
// returns the first element that matches a given css-style selector

// select by ID
var tag = document.querySelector("#highlight")
// returns <li id="highlight">List Item 1</li

// select by CLASS
var tag = document.querySelector(".bolded")
// returns only first li with bolded class  <li class="bolded">List Item 2</li>


// querySelectorAll
// returns all elements with matching selector

var lis = document.querySelectorAll("li")
// returns <li id="highlight">List Item 1</li>
//         <li class="bolded">List Item 2</li>
//         <li class="bolded">List Item 3</li>
