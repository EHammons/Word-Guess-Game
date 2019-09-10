var wins = 0;
var losses = 0;
var guessesLeft = 12;
var answerWord = [];
var alreadyGuessed = "";

var answers = ["dog","cat","bird","lizzard"];
var answer = answers[Math.floor(Math.random()*answers.length)];
for (var i = 0; i<answer.length; i++) {
    answerWord[i] = "_";
}
var remainingLetters = answer.length;

var answerIndex = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var guessesText = document.getElementById("guesses-text");
var answerText = document.getElementById("word-text");

winsText.textContent = wins;
lossesText.textContent = losses;
leftText.textContent = guessesLeft;

var newGame = function() {
    guessesLeft = 12;
    alreadyGuessed = "";
    guessesText.textContent = null;
    console.log(answer);
    answerText.textContent = answerWord.join(" ");
};

newGame();

document.onkeyup = function(event) {
    if ((answerIndex <= (answers[i].length - 1)) && guessesLeft > 1) {
        // If there are still more letters and guesses, take the next guess input.
    } else if (answerIndex <= (answers[i].length - 1)) {
        // If there are still more letters, you lose.
    } else {
        // If there are no more letters left to guess, you win.
    }

};