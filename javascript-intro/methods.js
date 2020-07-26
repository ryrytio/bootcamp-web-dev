let object = {
  name: "Chuck",
  add: function(x,y){
    return x + y;
  },
  height: 167
}

//to call it, we would just say -->
object.add(5,10);

//EXAMPLE ********
//we would want a method in an object if the method has the same name but produce a different output
//Check dogSpace and catSpace "speak" method.
let dogSpace = {};
dogSpace.speak = function(){
  return "WOOF";
}

let catSpace = {};
catSpace.speak = function(){
  return "MEOW";
}

//Keyword THIS *********
let comments = {};
comments.data = ["Nice", "Cool!"];

comments.print = function print(){
  this.data.forEach(function(el){
    console.log(el);
  }); //"this" refers to the object called "comments"
}
