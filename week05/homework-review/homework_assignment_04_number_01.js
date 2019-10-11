let ballX = 0;
let ballY = 0;
let ballXSpeed = 0.4;
let ballYSpeed = 1;

function setup() {
    createCanvas(400, 400);
    ballX = width / 2;
    ballY = height / 2;
  background(255);
}

function draw() {

    drawBall(ballX, ballY, 50);
    drawBall(ballX + 50, ballY + 50, 100);
    drawBall(ballX - 50, ballY - 50, 200);

    ballX += ballXSpeed;
    ballY += ballYSpeed;

    if (mouseIsPressed) {
      ballXSpeed = ballXSpeed * -1;
    }

    if (ballX < 0 || ballX > width) {
        ballXSpeed = ballXSpeed * -1;
    }
    if (ballY < 0 || ballY > height) {
        ballYSpeed = ballYSpeed * -1;
    }
}

function drawBall(bx, by, ballColor, size = 10) {
    noStroke();
    fill(ballColor, 0, 0);
    circle(bx, by, size);
}