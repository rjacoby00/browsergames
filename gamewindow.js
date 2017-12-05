"use strict";
var div = document.createElement('div');
div.setAttribute('class', 'rjacoby_game');
div.innerHTML = '<link href="https://rawgit.com/rjacoby00/browsergames/master/index.css" rel="stylesheet" type="text/css" /><canvas width="480" height="320" id="rjgamesidrj" class="rjacoby_game_container"></canvas>';
document.body.appendChild(div);
var canvas = document.getElementById("rjgamesidrj");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 10);
