//New lesson
console.log("forLoops and Array Interation");
//for loop example
let colors = ["red", "orange", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("forEach Lesson");
//forEach example --> arr.forEach(someFunction)
//takes function as an argument
colors.forEach(function(iLoveDog){
  console.log("Inside the foreach " + iLoveDog);

});

//new demo - ****PROPER EXAMPLE OF FOREACH
function printColor(color1){
  console.log("*******");
  console.log(color1);
  console.log("*******");
}

console.log("For Each demo with colors Array")
colors.forEach(printColor); //notice no parentheses when calling printColor function
