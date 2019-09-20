let r = 1;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    drawDiamond(width / 2, height / 2, 100, r);
    r++;
}

function drawDiamond(x, y, size, rotation) {
    fill(80);
    rectMode(CENTER);
    applyMatrix();
    translate(x, y);
    angleMode(DEGREES);
    rotate(rotation);
    rect(0, 0, size, size);
    resetMatrix();
}