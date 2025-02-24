
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
constp1Display = document.querySelector('#p1Display');
constp2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

//Event listener
p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1score;
    }   

});

p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2score;
    }

});

resetButton.addEventListener('click', function() {
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});