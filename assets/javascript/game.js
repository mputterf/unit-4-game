var wins = 0;
var losses = 0;
var total = 0;
// Generate a random number between 19 & 120
var randomNumber = Math.floor(Math.random() * (120 - 20)) + 19;
console.log(randomNumber);

// Append random number to random number card
$("#random-number-display").append("<p>" + randomNumber + "</p>");
// Append wins
$("#wins-display").append(wins);
// Append losses
$("#losses-display").append(losses);
// Append total
$("#total-display").append(total);
