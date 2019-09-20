let ballX = 0;
let ballY = 0;
let ballXSpeed = 0;
let ballYSpeed = 1;

function setup() {
    createCanvas(400, 400);
    ballX = width / 2;
    ballY = height / 2;
}

function draw() {
    background(255);
    drawBall(ballX, ballY);
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    if (ballX < 0 || ballX > width) {
        ballXSpeed = ballXSpeed * -1;
    }
    if (ballY < 0 || ballY > height) {
        ballYSpeed = ballYSpeed * -1;
    }
}

function drawBall(bx, by, size = 25) {
    noStroke();
    fill(100);
    circle(bx, by, size);
}