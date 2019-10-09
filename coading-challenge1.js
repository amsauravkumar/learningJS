console.log(" ");
console.log("Coading Challenge 1 **********************");

var player1Height = 175;
var player1Age = 23;

var player2Height = 180;
var player2Age = 20;

var player1Score = player1Height + player1Age * 5;
var player2Score = player2Height + player2Age * 5;

console.log("Player1 score: " + player1Score);
console.log("Player2 score: " + player2Score);

if (player1Score > player2Score) {
  console.log("Result: Player1 Wins");
} else if (player1Score < player2Score) {
  console.log("Result: player2 Wins");
} else {
  console.log("Result: Draw");
}
