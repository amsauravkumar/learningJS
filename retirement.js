// var value = prompt("Enter youre name");

// switch (value) {
//   case "Rahul":
//     console.log("Match found");
//     break;
//   case "Saurav":
//     console.log("Match found");
//     break;
//   default:
//     console.log("Match not found");
// }

console.log(" ")
console.log("Rtirement check(function calling another function) **********************");

var currentyear = 2019;
function calculateAge(yearOfBirth) {
  var age = currentyear - yearOfBirth;
  return age;
}

function calculateTimeSpan(name, yearOfBirth) {
  var retirementAge = 60;
  var age = calculateAge(yearOfBirth);
  var difference = retirementAge - age;
  if (difference > 0) {
    console.log(name + " has " + difference + "years left for Retirement");
  } else {
    console.log(
      "Its been " + difference * -1 + "years since " + name + " Retired"
    );
  }
}

calculateTimeSpan("Alies", 1997);
calculateTimeSpan("Bob", 1957);
calculateTimeSpan("John", 1955);
