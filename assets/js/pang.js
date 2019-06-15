var ballX = Math.floor(Math.random() * 300) + 50;
var ballY = 30;

var ballVX = 4;
var ballVY = 4;

var diameter = 30;

var paddleX;
var paddleY;
var paddleWidth = 100;
var paddleHiegth = 10;

var started = false;

var score = 0;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("pong-game");
}

function draw() {
  background(255, 65, 81);
  fill(120, 0, 255);
  noStroke();
  ellipse(ballX, ballY, diameter, diameter);

  ballX += ballVX;
  ballY += ballVY;

  if (ballX < diameter / 2 || ballX > 400 - 0.5 * diameter) {
    ballVX *= -1;
  }

  if (ballY < diameter / 2 || ballY > 400 - 0.5 * diameter) {
    ballVY *= -1;
  }

  
  if (ballY > 400 - 0.5 * diameter) {
    gameOver();
  }

  if (!started) {
    paddleX = 400 / 2;
    paddleY = 400 - 50;
    started = true;
  }
  fill (0, 25, 125);
  textSize(24);
  text("Score:" + score, 10, 25);
  
   
  fill(0, 128, 190);
  noStroke();
 // rectMode(CENTER);
  rect(paddleX, paddleY, paddleWidth, paddleHiegth);


  if ((ballX > paddleX && ballX < (paddleX + paddleWidth)) && (ballY + (diameter / 2) >= paddleY)) {
    ballVX *= -1;
    ballVY *= -1;
    score++;
  }
  
  
  
  paddleX = mouseX;

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    paddleX -= 30;
  } else if (keyCode == RIGHT_ARROW) {
    paddleX += 30;
  }
}

function gameOver() {
  started = false;
  ballX = Math.floor(Math.random() * 300) + 50;
  ballY = 30;
  score = 0;
  //alert("GAME OVER");
}