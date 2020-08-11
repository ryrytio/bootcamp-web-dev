$("button").click(function()
 {let text = $(this).text();
   console.log("You clicked " + text);
});


$("input[type = text]").keypress(function(event){
  //13 is the which-code for "enter" key on keyboard
  if(event.which === 13){
    alert("you hit enter");
  }
});


$("h1").on("click", function(){
  $(this).css("color", "purple"); //refers to he one thing that is clicked on,
                                  //otherwise, all h1's will be affected by the click
});


$("input").on("keypress", function(){
  console.log("keypressed!");
})

//bolds and unbolds buttons when hovered.
$("button").on("mouseenter", function(){
  $(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function(){
  $(this).css("font-weight", "normal");
})

//**********EFFECTS with JQ
$('button').on("click", function(){
  //this waits for the fade to complete and then it removes the div elements
  $('div').fadeOut(1000, function(){ //there's also fadeIn() and fadeToggle()
      $(this).remove();
  });
//anything added after this sub-function will complete before the fade completes

});

$("input[type = checkbox]").on("click", function(){
  $('div').slideToggle(1000, function(){
    console.log("slide is done");
      $('this').remove();
  });
});
