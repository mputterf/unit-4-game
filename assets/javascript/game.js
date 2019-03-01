var wins = 0;
var losses = 0;
var total = 0;
var minRandom = 19;
var maxRandom = 120;
var gemMin = 1;
var gemMax = 12;
// Generate a random number between 19 & 120
var randomNumber = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
// The gems will be found in the image folder
var gems = ["red.png", "orange.png", "green.png", "blue.png"];
var randomGemValue = [];

function GenerateGemValues(){
// Make an array of values the gems can have, and then shuffle them so we get random, non-repeating values
    for(var i = 0; i < gemMax; i++){
        randomGemValue[i] = i+1;
    }
// console.log(randomGemValue);

    for (var i = 0; i < randomGemValue.length; i++){
        var randomIndex = Math.floor(Math.random() * randomGemValue.length);
        var temp = randomGemValue[randomIndex];
        randomGemValue[randomIndex] = randomGemValue[i];
        randomGemValue[i] = temp;
    }
}

// console.log(randomGemValue);
// Append random number to random number card
$("#random-number-display").append("<p id='random-number'>" + randomNumber + "</p>");
// Append wins
$("#wins-display").text(wins);
// Append losses
$("#losses-display").text(losses);
// Append total
$("#total-display").append("<p id='total-counter'>" + total + "</p>");


function CreateGems(){
    for(var i = 0; i<gems.length; i++){
        // select image
        var gemImage = $("<img>");
        // make each image a gem from the array which is in the images folder
        gemImage.attr("src", "assets/images/" + gems[i]);
        // Add gem class
        gemImage.addClass("gem");
        // Assign a value to each gem
        gemImage.attr("data-gemValue", randomGemValue[i]);
        // send the gems to html
        $("#gem-holder").append(gemImage);
    };
}

function ResetGame(){
    $("#gem-holder").empty();
    // randomGemValue = [];
    GenerateGemValues();
    CreateGems();
    total = 0;
    $("#total-counter").text(total);
    randomNumber = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
    $("#random-number").text(randomNumber);
    // console.log("Here in reset");
    PlayGame();
}

function PlayGame(){

    $(".gem").on("click", function(){

        // console.log("Here in on click");
        // get the value of each gem, convert to int
        var gemValue = $(this).attr("data-gemValue");
        gemValue = parseInt(gemValue);
        
        // Append new total
        total += gemValue;
        $("#total-counter").text(total);

        if(total === randomNumber){
            wins++;
            $("#wins-display").text(wins);
            alert("You win");
            ResetGame();
        }

        if(total > randomNumber){
            losses++;
            $("#losses-display").text(losses);
            alert("You lose");
            ResetGame();
        }
    });
};

ResetGame();
// GenerateGemValues();
// CreateGems();
PlayGame();