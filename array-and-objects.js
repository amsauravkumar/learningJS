console.log(" ")
console.log("Array and Objects *******************************")  


var bob = ["Bob", "look", 1999, "teacher"];
console.log(bob);
bob.push("bike");
bob.unshift("Mr");
x = bob.pop();
console.log(x);
bob.shift();
console.log(bob);

if (bob.indexOf("racer") === -1) {
  console.log("bob is not a racer");
} else {
  console.log("he is a racer");
}

// objects

var josh = {
  name: "josh",
  lastName: "smith",
  DOB: 1997,
  calculateAge: function(age) {
    this.age = 2019 - this.DOB;
  }
};
console.log(josh.calculateAge());
console.log("josh", josh);

var pop = new Object();
pop.name = "popstar";
pop.lastName = "korlin";
pop.age = 44;
pop["job"] = "programmer";

console.log("pop", pop);