let boxX = 100;
let boxY = 100;
let grey = 250;
let speed = -1;

function setup() {
    let name = "Code 1";
    frameRate(24);
    createCanvas(400, 400);
}

function draw() {
    print(name);
    background(220);
    rectMode(CENTER);
    fill(100);
    rect(boxX, boxY, 50, 50);

    // boxX = boxX + 1;
    // boxX++;

    // boxX = boxX + 5;
    boxX += speed;

    speed -= 1;
}