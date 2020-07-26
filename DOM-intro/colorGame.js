let numSquares = 6;
let colors = [];
let pickedColor;
//notes: *** first we hard coded to get down the functionality
//e.g. letting things display test stuff like alerts and chosen colors
//then we built functions and loops that choose colors for us.
//we used classes and id's to help us choose specific things and manipulate them.
//I learned that we can set variables as other variables. So assign square colors
//with colors within the colors array.

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();


function init(){
    //mode buttons event listeners
    setupModeButtons();
    //set up square listeners
    setupSquares();
    reset();
}



function setupModeButtons(){
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
      reset();
      //update page to reflect changes
    });
  }
};



function setupSquares(){
  for (let i = 0; i < squares.length; i++) {
    //add listeners to squares
      squares[i].addEventListener("click", function(){
          //grab color of grabbed square
        let clickedColor = this.style.backgroundColor;
          //compare color of squares
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
      } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = 'Try Again';
      }
    });
  }
};



function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  //change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //change color of h1 header back to default
  h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener('click', function() {
  reset();
});



function changeColors(color){
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}



function pickColor(){
  //assign random colors
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}



function generateRandomColors(num){
    //make array
    let arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
    //get random color and push into arr
      arr.push(randomColor())
    }
    //return array
    return arr;
}



function randomColor(){
    //pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
