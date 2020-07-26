console.log("printReverse");
function printReverse(input) {
    let reverseBoi = [];
    for(let i = input.length-1; i >= 0; i--) {
        reverseBoi.push(input[i]);
    }
    return(reverseBoi);
} //works

//Better solution
  function printReverse2(input){
    for(let i = input.length-1; i >= 0; i--) {
        console.log(input[i]);
  } // i suck LOL
}

// ****isUniform******8
console.log("isUniform");
function isUniform(input){
  //make array[0] into a variable
  let firstValue = input[0];
  //check if array[i] = array[0] which should be in a variable
  for (let i = 1; i < input.length; i++) {
  //if does not equal to array[0] then return false
    if (input[i] !== firstValue) {
      return false;
    }
    }
  //otherwise, print true
      return true;
} //works

//******Sum Array******
console.log("sumArray");
function sumArray(input){
//define variable total for which we can store our sum
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += input[i];
  }
return total;
} //works

//better version
function sumArray2(input){
  let total = 0;
  input.forEach(function(item){
    total += item;
  });
  return total;
}

//*** max()****
console.log("max");
function max(input){
  //define intial max --> input[0]
  let max = input[0];
  //check if [1] > [0], then max = [1]
  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
       max = input[i];
    }
  }
  return max;
  //loop through the whole array
} //works
