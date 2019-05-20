'use strict';
const ball = document.querySelector('.ball');
const field = document.querySelector('.field');
const fieldY = field.getBoundingClientRect().top + field.clientTop;
const fieldX = field.getBoundingClientRect().left + field.clientLeft;
const ballY = ball.clientHeight/2;
const ballX = ball.clientWidth/2;
field.addEventListener('click', function(event) {
    ball.style.left = event.clientX - fieldX - ballY +"px";
    ball.style.top = event.clientY - fieldY - ballX +"px";
    if (event.clientX > field.clientWidth) {
        ball.style.left = field.clientWidth - fieldX - ballX + 'px';
    }
    if (event.clientY > field.clientHeight) {
        ball.style.top = field.clientHeight - fieldY - ballY +"px";
    }
    if (event.clientX < fieldX + ballX) {
        ball.style.left = fieldX - ballX + 'px';
    }
    if (event.clientY < fieldY + ballY) {
     ball.style.top = fieldY - ballY + 'px';
    }
});


