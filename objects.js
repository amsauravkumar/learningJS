var student = {
    firstName: 'rahul',
    lastName: 'raj',
    year: 1997
}

console.log(student)

var student = function(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
}

var bob = new student('bob', 'jan', 1997);
console.log(bob)