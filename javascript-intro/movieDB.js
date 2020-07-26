//let test = "\"Fuckery\""
//console.log("You watched " + test +", haha")
let movies = [
  {
    film: "\"Kung Fu Panda\"",
    hasWatched: true,
    rating: 5.0
    },
  {
    film: "\"Matrix\"",
    hasWatched: false,
    rating: 3.4
    },
  {
  film: "\"Star Wars 9\"",
  hasWatched:true,
  rating: 2.0
  }

]

function reviewBot(movie){
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].hasWatched === true) {
      console.log("You have seen " + movie[i].film + " - " + movie[i].rating + " stars");
    }else {
      console.log("You have not seen " + movie[i].film + " - " + movie[i].rating + " stars");
    }
  }
}

//Colt's solution
movies.forEach(function(movie){
    console.log(buildString(movie))
})

//Refactor
function buildString(movie){
  let result = "You have ";
  if (movie.hasWatched){
    result += "watched ";
  }else {
    result += "not seen ";
  }
  result += "\"" + movie.film + "\" - ";
  result += movie.rating + " stars";
  return result;
}
