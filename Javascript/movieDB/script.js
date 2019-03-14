var movies = [
{
  title: "Crazy Rich Asians",
  rating: 7.0,
  seen: false
 },
 {
   title: "Captain Marvel",
   rating: 7.1,
   seen: false
 },
 {
   title: "The Lego Movie 2",
   rating: 7.0,
   seen: false
 }
]

for (let i = 0; i < movies.length; i++) {
  if (movies.seen) {
    console.log("You have watched " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars");
  } else {
    console.log("You have not seen " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars");
  }
}

// forEach
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.seen) {
    result += "watched "
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
})

// forEach + function
function buildString(movie) {
  var result = "You have ";
  if (movie.seen) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
