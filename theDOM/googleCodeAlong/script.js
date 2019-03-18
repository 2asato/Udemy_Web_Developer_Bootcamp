// grab the google logo
var newImg = document.querySelector("img");

// change logo
newImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_Fg_lMrPjMa1duHXnvFnZOtsn883LGLD7c2-CwKdfFXAoveQnQ")

// change new logo to be same size as old
newImg.style.width = "525px"
newImg.style.height = "500px"

// using a loop to change a bunch of same element
var links = document.getElementsByTagName("a")
for (let i = 0; i < links.length; i++) {
  // console.log(links[i].textContent);
  links[i].style.background = "pink"
}

// change link to redirect to bing.com
var links = document.getElementsByTagName("a")
for (let i = 0; i < links.length; i++) {
  // console.log(links[i].textContent);
  links[i].setAttribute = ("href", "http://www.bing.com")
}
