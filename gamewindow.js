"use strict";
var div = document.createElement('div');
div.setAttribute('class', 'rjacoby_game');
div.innerHTML = '<link href="https://rawgit.com/rjacoby00/browsergames/master/index.css" rel="stylesheet" type="text/css" /><canvas width="480" height="320" id="rjgamesidrj" class="rjacoby_game_container"></canvas>';
document.body.appendChild(div);
var canvas = document.getElementById("rjgamesidrj");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 10);
