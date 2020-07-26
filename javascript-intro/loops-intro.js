// var count = 1;
// while (count < 15) {
//   console.log("The count is:" + count);
//   count+=2; //these incrementations are important or else we have
//           //infinite loops
// }
//
// // prints each letter of "hello" in succession
// var str2 = "hello";
// var count = 0;
// while (count < str2.length) {
//   console.log(str2[count]);
//   count++; //these incrementations are important or else we have
//         // infinite loops
// }


// While Loops Problem Set
let num1 = -10;
console.log("Problem 1");
while (num1 < 20) {
  console.log(num1);
  num1++;
} //works

let num2 = 10;
console.log("Problem 2");
while (num2 < 41) {
  console.log(num2);
  num2+=2;
} //works

let num3 = 300;
console.log("Problem 3");

while (num3 <= 333) {
  console.log(num3 + 1);
  num3+=2;
} //works

let num3A = 300;
console.log("Better Prob 3")

  while (num3A <=333) {
    if (num3A % 2 !== 0) {
      console.log(num3A);
    }
    num3A++;
  }

let num4 = 5;
console.log("Problem 4");
while (num4 <= 50) {
  if (num4 % 3 === 0 && num4 % 5 === 0) {
    console.log(num4)
  }
num4++;
} //works
