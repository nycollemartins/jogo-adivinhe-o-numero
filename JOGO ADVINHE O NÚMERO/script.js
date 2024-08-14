// Seletores
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

let randomNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const guess = Number(guessInput.value);
    attempts++;

    if (guess === randomNumber) {
        messageElement.textContent = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`;
        messageElement.style.color = 'green';
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    } else if (guess < randomNumber) {
        messageElement.textContent = 'Tente um número maior!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Tente um número menor!';
        messageElement.style.color = 'red';
    }
}

function restartGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    guessInput.value = '';
    messageElement.textContent = '';
    guessButton.disabled = false;
    restartButton.style.display = 'none';
}

guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
