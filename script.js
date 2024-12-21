const number = 1 + Math.floor(Math.random()*100);
let numberOfGuesses = 10;

function check(guessedNumber) {
    const temp = parseInt(guessedNumber);
    if (isNaN(temp) || temp > 100 || temp < 0 || parseFloat(guessedNumber) != temp) return 0;
    return 1;
};

//Result messages...
const InvalidGuess = "Invalid input. Number should be in between 0 - 100 and an integer.";

console.log("script connected");
const textbox = document.querySelector("#guessInput");
const button = document.querySelector("#button");
const result = document.querySelector('#result');
const guessesRemaining = document.querySelector("#guesses");

button.addEventListener('click', function(event) {
    const guessedNumberString = textbox.value;
    result.textContent = "";
    if (!check(guessedNumberString)) {
        result.textContent = InvalidGuess;
        result.style.color = "red";
    }
    else {
        numberOfGuesses--;
        const guessedNumber = parseInt(guessedNumberString);

        //number is equal to the randomly generated number === WIN
        if (guessedNumber == number) {
            result.textContent = `The number you guessed is absolutely correct. You guessed it in ${10 - numberOfGuesses} guesses.`;

            result.style.color = "green";
            button.remove();
        }

        else if (guessedNumber < number) {
            result.textContent = `The number you guessed ${guessedNumber} is lesser than the correct answer.`;
            
            result.style.color = "red";
            
        }

        else {
            result.textContent = `The number you guessed ${guessedNumber} is greater than the correct answer.`;

            result.style.color = "red";
        }

        guessesRemaining.textContent = numberOfGuesses;

        if (numberOfGuesses == 0) {
            result.textContent = `Uh Oh! You couldn't guess the correct number within 10 guesses. The correct number was ${number}.`;
            
            result.style.color = "#a98400"

            button.remove();

            return;
        }
    }
    
});