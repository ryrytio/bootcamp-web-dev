//select all divs
$("div").css("backgroundColor", "purple");

//select a class "highlight"
$(".highlight").css("width", "200px");

//select an id of "third"
$("#third").css("border", "5px solid orange");

//Selecting the first item within a set || 3 methods!
$("div").first().css("color", "pink");
// OR
$("div:first").css("border", "2px solid yellow");
// OR
$("div:first-of-type").css("fontSize", "50px");
