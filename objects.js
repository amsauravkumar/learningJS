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

var bob = new student('bob', 'jan', 1997);
bob.calculateAge();
console.log(bob)