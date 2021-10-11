'use strict';

// document.querySelector('.number').textContent = 13;
/* document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').textContent);


document.querySelector('.btn.check');
if (document.querySelector('.guess').textContent == number) {
  document.querySelector('.message').textContent = '🎊 Correct Number!';
  document.querySelector('.number').textContent = 13;
} else {
    document.querySelector('.message').textContent = '🙅🏻‍♀️ Trying again!';
    document.querySelector('.score').textContent--;
}
 */
let number = Math.ceil(Math.random() * 20) + 1;

function setMessage(msg) {
  document.querySelector('.message').textContent = msg;
}
function getMessage() {
  return document.querySelector('.message').textContent;
}

function getScore() {
  return Number(document.querySelector('.score').textContent);
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let highscore = document.querySelector('.highscore').textContent;
  let score = getScore();
  console.log(guess);
  if (getMessage === '🎊 Correct Number!') {
    document.querySelector('.again').click();
  }
  if (getScore() === 0) {
    setMessage('⛔ Ohh man! you are out of game!');
  } else if (!guess) {
    setMessage('🔎 Please enter your guess');
  } else if (!(guess >= 1 && guess <= 20)) {
    setMessage(`⚠ ${guess} is an invalid number!`);
  } else if (guess === number) {
    setMessage('🎊 Correct Number!');
    document.querySelector('.highscore').textContent =
      score > highscore ? score : highscore;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b357';
    document.querySelector('.number').style.width = '30rem';
  } else {
    setMessage(guess > number ? '😨 Too high!!' : '🥺 Too Low!!');
    setScore(--score);
  }
  document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.ceil(Math.random() * 20) + 1;
  setScore(20);
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
