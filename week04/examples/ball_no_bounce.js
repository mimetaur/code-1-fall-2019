let ballX = 0;
let ballY = 0;

function setup() {
    createCanvas(400, 400);
    ballX = width / 2;
    ballY = height / 2;
}

function draw() {
    background(255);
    drawBall(ballX, ballY);
    ballY++;
}

function drawBall(bx, by, size = 25) {
    noStroke();
    fill(100);
    circle(bx, by, size);
}