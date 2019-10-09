console.log(" ");
console.log("Coading Challenge 2 **********************");

var years = [2005, 1971, 1991, 2016, 1999];
var age = [];
var booleanResult = [];
var currentYear = 2019;

function calculateAge(year) {
  return currentyear - year;
}

printFullAge(years);

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


