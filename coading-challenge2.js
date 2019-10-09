console.log(" ");
console.log("Coading Challenge 2 **********************");

var years = [2005, 1971, 1991, 2016, 1999];
var years2 = [1997, 2008, 2001, 2011, 1985];
var age = [];
var booleanResult = [];
var currentYear = 2019;

function calculateAge(year) {
  return currentyear - year;
}

function printFullAge(yearsArray) {
  for (var i = 0; i < yearsArray.length; i++) {
    age[i] = calculateAge(yearsArray[i]);
  }
  console.log("Year List", yearsArray);
  console.log("Calculated Age List", age);

  for (i = 0; i < age.length; i++) {
    if (age[i] >= 18) {
      console.log("Full Age: ", +age[i]);
      booleanResult[i] = true;
    } else {
      console.log("Not Full Age: ", +age[i]);
      booleanResult[i] = false;
    }
  }
  return booleanResult;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge(years2);

console.log(full_1);
console.log(full_2);
