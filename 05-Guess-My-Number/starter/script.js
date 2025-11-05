'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value = 23);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Use a valid number between 1 - 20!';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Use a valid number between 1 - 20!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
});

console.log('TESTING');
