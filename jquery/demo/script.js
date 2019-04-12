// $("selectorGoesHere")
// similar to querySelectorAll

// to select all img tags
// $("img")

// to select all elements with class sale
// $(".sale")

// to select all a tags inside of li's
// $("li a")


// .css(property, value)
$("h1").css("color", "yellow");

// w/o jquery
// document.querySelector("h1").style.color = "yellow"

// changing multiple styles
var styles = {
  color: "red",
  background: "pink",
  border: "2px solid purple"
}

$("h1").css(styles);
