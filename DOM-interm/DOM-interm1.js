//on-click events
let h1 = document.querySelector('h1');
h1.addEventListener("click", function(){
  //h1.style.background = "orange";
  alert("h1 was clicked");
})

//console.log()'s when we click on UL
document.querySelector('ul').addEventListener("click", function(){
  console.log("U CLICKED THE UL");
});

//changes color of text for listed items
let lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
      this.style.color = "pink";
    });
}

//swap background color when button is clicked

let button = document.querySelector("button");
let bodyboi = document.querySelector('body');

button.addEventListener("click", chgBackground);
  function chgBackground() {
    const currentColor = bodyboi.style.background;

    bodyboi.style.background = currentColor === 'purple' ? 'white' : 'purple';
};
