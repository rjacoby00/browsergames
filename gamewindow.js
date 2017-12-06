"use strict";
var div = document.createElement('div');
div.setAttribute('class', 'rjacoby_game');
div.setAttribute('id', 'rjgame')
div.innerHTML = '<link href="https://rawgit.com/rjacoby00/browsergames/master/index.css" rel="stylesheet" type="text/css" id="rjgamecss"/><canvas width="480" height="320" id="rjgamesidrj" class="rjacoby_game_container"></canvas>';
document.body.appendChild(div);

var canvas = document.getElementById("rjgamesidrj");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var color = "#0095DD";
var rightPressed = false;
var leftPressed = false;
var alerted = false;
var first = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function unrjgame() {
    document.getElementById("rjgame").remove();
    document.getElementById("rjgamecss").remove();
    document.getElementById("rjgamesidrj").remove();
    first = false;
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
function draw() {
    if (!first) {
        document.location.reload();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            unrjgame();
            if(!alerted) {
                alert("GAME OVER");
                alerted = true;
            }
        }
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 10);
