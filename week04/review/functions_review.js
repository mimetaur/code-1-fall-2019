let circleX = 25;
let circleY = 25;

let otherCircleX = 250;
let otherCircleY = 275;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    concentricCircles(circleX, circleY, 25);
    move();
    let xLocation = getCircleX();
    // print(xLocation);

    concentricCircles(otherCircleX, otherCircleY, 25);
    let distance = dist(circleX, circleY, otherCircleX, otherCircleY);
    print(distance);
}

function getCircleX() {
    return circleX;
}

function getCircleY() {
    return circleY;
}

function move() {
    circleX = circleX + 1;
    circleY = circleY + 1;
}

function concentricCircles(centerX, centerY, diameter) {
    noFill();
    strokeWeight(2);

    circle(centerX, centerY, diameter);
    circle(centerX, centerY, diameter / 2);
}