

window.setTimeout(function() {
  // put all of your JS code from the lecture here
let todos = ["Buy new turtle"];

let input = prompt("what would you like to do?");

while (input !== "quit") {

  if(input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
    input = prompt("what would you like to do?");
}
console.log("Okay you quit");


//Refactoring our functions to clean up our loop ^
function listTodos(){
  console.log("*******")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("*******")
}

function addTodo(){
  //ask
  let newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodo(){
  //ask for index of item in array
  let index = prompt("Enter index of todo to delete")
  // delete that todo item
  //splice()
  todos.splice(index, 1); //second argument asks how many items to delete succeeding your indexed number. In our case
  // just one value to be removed.
  console.log("Delete todo");
}

}, 500);
