// let h1 = document.querySelector("h1");
// let isBlue = false;
//
// setInterval(function(){ //Manipulation*********
//   if (isBlue) {
//     h1.style.background = "white";
//   }else {
//     h1.style.background = "blue";
//   }
//   isBlue = !isBlue;
// }, 1000);

//THESE ARE NOT ARRAYS. They are NodeList. Array-like vibes.
let tag = document.getElementById("highlight");

let tags = document.getElementsByClassName("bolded");

//finds all elements with the tag "li"
let tagger = document.getElementsByTagName("li");

//querySelector - always returns one element
  //CSS style selector
let bold = document.querySelector(".bolded");

//querySelectorAll - selects all the stuff
let allBold = document.querySelectorAll(".bolded");

//exercise ***
// <p id="first" class="special">Hello</p>****
let first = document.getElementById("first");
let specialBoi = document.getElementsByClassName("special")[0];
let pBoi= document.getElementsByTagName("p")[0];
let pBoi2 = document.querySelector(".special")[0];
let pBoi3 = document.querySelectorAll("#first");
