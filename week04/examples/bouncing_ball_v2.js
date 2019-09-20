let ballX = 0;
let ballY = 0;

let ballSpeed = 2.5;

function setup() {
    createCanvas(400, 400);
    ballX = width / 2;
    ballY = height / 2;
}

function draw() {
    background(255);
    drawBall(ballX, ballY);
    ballY += ballSpeed;

    let ballCollision = (ballY >= height || ballY <= 0);
    print(ballCollision);

    if (ballCollision) {
        ballSpeed = ballSpeed * -1;
    }

    // if (ballY >= height) {
    //   ballSpeed = ballSpeed * -1;
    // } else if (ballY <= 0) {
    //   ballSpeed = ballSpeed * -1;
    // }
}

function drawBall(bx, by, size = 25) {
    noStroke();
    fill(100);
    circle(bx, by, size);
}