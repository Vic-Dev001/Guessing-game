'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').style.width = number;
};
const displayNumberText = number => {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // when input is empty
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  // when guess is correct
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber('30rem');
    displayNumber('4rem');
    displayNumberText(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the guess is wrong
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📉 Too high' : '📈 Too low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥💥 you lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

// reset the button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('15rem');
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumberText('?');
  document.querySelector('.guess').value = '';
});
