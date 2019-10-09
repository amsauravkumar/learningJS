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

// var player1Height = prompt("Enter player1 Height");
// var player1Age = prompt("Enter player1 Age");

// var player2Height = prompt("Enter player2 Height");
// var player2Age = prompt("Enter player2 Age");

// player1Result = player1Height + player1Age * 5;
// player2Result = player2Height + player2Age * 5;

// if (player1Result > player2Result) {
//   console.log("Player1 Wins");
// } else if (player1Result < player2Result) {
//   console.log("player2 Wins");
// }
// else{
//     console.log("Draw")
// }

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
    console.log("Its been "+ difference*-1+"years since "+ name +" Retired");
  }
}

calculateTimeSpan("Alies",1997)
calculateTimeSpan("Bob",1957)
calculateTimeSpan("John",1959)
