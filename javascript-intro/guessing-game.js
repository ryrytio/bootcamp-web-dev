// create secretNum
var secretNum = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
// check if guess is right
if(guess === secretNum) {
  alert("you got it right")
}
else if (guess > secretNum) {
  alert("too high, guess again");
}
else {
  alert("haha too low. try again");
}
