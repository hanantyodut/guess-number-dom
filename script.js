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
document.addEventListener('DOMContentLoaded', function () {
    var number = document.querySelector('.number');
    var message = document.querySelector('.message');
    var guess = document.querySelector('.guess');
    var score = document.querySelector('.score');
    var highScore = document.querySelector('.highscore');
    var body = document.querySelector('body');
    var answer = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.check').addEventListener('click', function () {
        var _a;
        var num = Number((_a = document.querySelector('.score')) === null || _a === void 0 ? void 0 : _a.textContent);
        console.log(guess.value);
        if (Number(guess.value) !== answer) {
            number.textContent = '?';
            // message.textContent = 'Wrong! guess again';
            score.textContent = "".concat(num - 1);
            if (Number(score.textContent) <= 0) {
                score.textContent = "".concat(0);
                message.textContent = 'You lose!';
            }
            else if (Number(guess.value) > answer) {
                message.textContent = 'the number is lower';
            }
            else if (Number(guess.value) < answer) {
                message.textContent = 'the number is higher';
            }
        }
        else {
            body.style.backgroundColor = '#60b712';
            number.style.width = '25rem';
            message.textContent = 'Correct Number!';
            number.textContent = "".concat(answer);
            if (Number(score.textContent) > Number(highScore.textContent)) {
                highScore.textContent = "".concat(score.textContent);
                console.log('the highscore:', (highScore.textContent = "".concat(score.textContent)));
            }
        }
    });
    document.querySelector('.btn.again').addEventListener('click', function () {
        answer = Math.floor(Math.random() * 20) + 1;
        score.textContent = "".concat(20);
        guess.value = "";
        message.textContent = 'start guessing...';
        number.textContent = '?';
        body.style.backgroundColor = '#222';
        number.style.width = '15rem';
    });
});
