//making our own forEach function
function myForEach(arr, func) {
  //loop thru array
  for (let i = 0; i < arr.length; i++) {
    //call func for each thing in array
    func(arr[i]);
  }
}

let colors = ["red", "blue", "green"];
myForEach(colors, alert)

myForEach(colors, function(color){
  console.log(color);
});


Array.prototype.myForEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
} //the array "arr" is replaced with key-word "this"
//this will make more sense when working with objects
