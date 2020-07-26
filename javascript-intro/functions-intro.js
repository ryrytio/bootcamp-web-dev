// //basic
// function singSong() {
//   console.log("Twinkle twinkle little star");
//   console.log("How I wonder what you are");
//   console.log("Up above the world so high");
// }
//
// //arguments
// function sayHello(name) {
//   console.log("Hello there " + name + "!");
// }
//
// function area(l, w) {
//   console.log(l * w);
// }
//
// //return keyword
// function area2(l, w) {
//   return l * w;
// }

//PROBLEM SET
console.log("Problem sets")
function isEven(x){
  if (x % 2 === 0) {
    return true;
  }
  else {
    return false
  };
} //works

//new solution
function isEven2(num){
  return num % 2 === 0;
}


function factorial(y) {
    if (y === 0) {
      return 1;
    }
else {
  return (y * factorial(y-1));
  //^ this returns 6 * 5 * 4 * 3 * 2 * 1 * factorial(0), which stops evaluating after 0.
}
} //works

//new solution
  function factorial2(num) {
    let result = 1;
    for(let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }


function kebabToSnake(z){
        let myStr = z;
//replace all dashes with underscores
//return string
        let newStr = myStr.replace(/-/g, "_");
        return(newStr);
}

//new solution
  function kToS(str) {
    let newStr = str.replace(/-/g, "_");
    return newStr;
  }
