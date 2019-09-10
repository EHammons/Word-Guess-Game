var wins = 0;
var losses = 0;
var guessesLeft = 12;
var answerWord = [];
var alreadyGuessed = "";
var remainingLetters = 0;


var answers = ["dog","cat","bird","lizzard"];
var answer = answers[Math.floor(Math.random()*answers.length)];
for (var i = 0; i<answer.length; i++) {
    answerWord[i] = "_";
}
var remainingLetters = answer.length;


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var guessesText = document.getElementById("guesses-text");
var answerText = document.getElementById("word-text");

winsText.textContent = wins;
lossesText.textContent = losses;
leftText.textContent = guessesLeft;
answerText.textContent = answerWord;

var newGame = function() {
    guessesLeft = 12;
    alreadyGuessed = "";
    guessesText.textContent = null;
    console.log(answer);
    answerText.textContent = answerWord.join(" ");
};

console.log(answer);
answerText.textContent = answerWord.join(" ");

document.onkeyup = function(event) {
    var userGuess = event.key;
    answerText.textContent = answerWord.join(" ");
    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userGuess) {
            answerWord[j] = userGuess;
            remainingLetters--;
        }
    }
    if ((remainingLetters <= (answer.length)) && guessesLeft > 1) {
        // If letters still remain and guesses are left, continue.
        } else if (remainingLetters <= (answer.length)) {
            // If letters still remain (but no guesses), you lose.
        } else {
            // If no letters remain, you win.
        }
}