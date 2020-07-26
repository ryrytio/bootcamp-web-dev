function doMath() {
  let x = 40;
  console.log(x);
}

function sing(){
  console.log("twinkle, twinkle...");
  console.log("how i wonder...");
}

// setInterval(sing, 1000);
//passes another function into another function^^
setInterval(function(){
  console.log("I am an anon function");
  console.log("Nice");
}, 2000);
