//objects example
let person ={
  name: "Travis",
  age: 21,
  city: "LA"
};

let person2 = {}
person.name = "Ryan";
person.age = 22;
person.city = "Seattle";


//Array vs Objects ***********
let dogs = ["Rusty", "Lucky", "Bobo"];

let dog = {
  name: "Bobo",
  breed: "Lab"
}

// Faux Console******
dog["name"]
// "Bobo"
dog.name
// "Bobo"

dogs.push("Wyatt");
dogs[1] = "Lucy"

dog.age = 6;
dog.breed = "Black Lab";


//Arrays vs Objects Part 2 ***********
let posts = [
  {
    title: "Cats Suck LoL",
    author: "Ryan",
    comments: ["Awesome post!", "This sucks"]
  },
  {
    title: "Cats are awesome",
    author: "Cat lover",
    comments: ["<3", "Go to hell bro"]
  }
]

//retrieve Malfoy exercise**********
// someObject.friends[0].name
