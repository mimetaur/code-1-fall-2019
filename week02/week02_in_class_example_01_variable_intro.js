let boxX = 100;
let boxY = 100;
let grey = 250;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    rectMode(CENTER);
    fill(grey);
    rect(boxX, boxY, 50, 50);

    grey = grey - 1;
}