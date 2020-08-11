//check off specific items by clicking
    //use on() for new items
    //when an Li is clicked inside a Ul, run this code
$("ul").on("click", "li", (function(){
  $(this).toggleClass("completed"); //this mf colt steele tf
}));

//click on X to delete
  //use on() to improve code
$("ul").on("click", "span", (function(event){ //stop bubbling events
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
}));

$("input[type='text']").keypress(function(event){
  if (event.which === 13 ) { //13 = enter key
      //extract value
      let todoText = $(this).val();
      $(this).val(""); //clears input after enter
      //create new li and add to ul via Append
      $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");

  }
});

$(".fa-plus-circle").click(function(){
  $("input[type = 'text']").fadeToggle(100);
});

//using on("click") rather than .click()
//using appened to add stuff ontoour ul's.
