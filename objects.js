var student = {
    firstName: 'rahul',
    lastName: 'raj',
    year: 1997
}
var year = 1222;
console.log(student)

var student = function(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.calculateAge = function(){
        this.age = (2019-this.year)
        console.log(this.age)
    }

} 
student.prototype.calculateAge = function(){
    console.log(2019 - this.year)
} 

var bob = new student('bob', 'jan', 1997);
bob.calculateAge();
console.log(bob)


var personProto = {
    calculateAge: function(){
        console.log(2019-this.year);
    }
}

var john = Object.create(personProto);
john.name = "john";
john.year = 1990;


// Creating an object
var roy = Object.create(personProto,
    {
        name: {value: 'roy'},
        year: {value: 1966}
    })



    //primitive vs objects

var age = 20;

var obj = {
    name : 'saurav'
}

function change(a, b){
    a = 30;
    b.name = 'kumar'
    console.log(a)
}

change(age, obj);

console.log(age);
console.log(obj.name)