function sing() {
  console.log("twinkle twinkle...");
  console.log("ho i wonder...");
}
// using setInterval with the function sing
setInterval(sing, 1000)


// using setInterval with an anonymous function
// don't need to give it a name, only using it within setInterval
setInterval(function(){
  console.log("I am an anonymous function");
  console.log("THIS IS AWESOME");
}, 2000);
