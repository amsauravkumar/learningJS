var name, age, isMarried;
name = "saurav";
age = 44;
isMarried = false;

console.log(name)
console.log(age)
console.log("Type coercion(Dynamic typing)",name+age)
console.log("variable mutation: changing   value of variable")

// var enteredText = prompt("Enter some text");
// alert("The entered text is "+enteredText)

if(11 === "11"){
    console.log("yes")
}
else{
    console.log("no")
}

var age = 45;

function test() {
    console.log("fun called")
    var age = 105;
}

var value = prompt("Enter youre name");

switch(value){
    case 'Rahul':
        console.log("Match found");
        break;
    case 'Saurav':
        console.log("Match found");
        break;
    default:
        console.log("Match not found");        
}
 