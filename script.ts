'use strict';

// try {
//   require('typescript');
//   console.log('TypeScript is available.');
// } catch (e) {
//   console.log('TypeScript is not available.');
// }

// first trial DOM manipulation
// console.log(document.querySelector('.message')?.textContent);
// console.log(document.querySelector('.between')?.textContent);

// // second part DOM Manipulation
// (document.querySelector('.message') as HTMLElement).textContent =
//   'Correct Number!';

// number.textContent = `${13}`;
// (document.querySelector('.score') as HTMLElement).textContent = `${10}`;

// (document.querySelector('.guess') as HTMLInputElement).value = `${23}`;
// console.log((document.querySelector('.guess') as HTMLInputElement).value);

//Third part DOM Manipulation

document.addEventListener('DOMContentLoaded', () => {
  let number = document.querySelector('.number') as HTMLElement;
  let message = document.querySelector('.message') as HTMLElement;
  let guess = document.querySelector('.guess') as HTMLInputElement;
  let score = document.querySelector('.score') as HTMLElement;
  let highScore = document.querySelector('.highscore') as HTMLElement;
  let body = document.querySelector('body') as HTMLElement;
  let answer: number = Math.floor(Math.random() * 20) + 1;

  (document.querySelector('.check') as HTMLElement).addEventListener(
    'click',
    function () {
      const num = Number(
        (document.querySelector('.score') as HTMLElement)?.textContent
      );
      console.log(guess.value);
      if (Number(guess.value) !== answer) {
        number.textContent = '?';
        score.textContent = `${num - 1}`;
        if (Number(score.textContent) <= 0) {
          score.textContent = `${0}`;
          message.textContent = 'You lose!';
        } else if (Number(guess.value) > answer) {
          message.textContent = 'the number is lower';
        } else if (Number(guess.value) < answer) {
          message.textContent = 'the number is higher';
        }
      } else {
        body.style.backgroundColor = '#60b712';
        number.style.width = '25rem';
        message.textContent = 'Correct Number!';
        number.textContent = `${answer}`;
        if (Number(score.textContent) > Number(highScore.textContent)) {
          highScore.textContent = `${score.textContent}`;
          console.log(
            'the highscore:',
            (highScore.textContent = `${score.textContent}`)
          );
        }
      }
    }
  );

  (document.querySelector('.btn.again') as HTMLButtonElement).addEventListener(
    'click',
    function () {
      answer = Math.floor(Math.random() * 20) + 1;
      score.textContent = `${20}`;
      guess.value = ``;
      message.textContent = 'start guessing...';
      number.textContent = '?';
      body.style.backgroundColor = '#222';
      number.style.width = '15rem';
    }
  );
});
