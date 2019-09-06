let randomRed = 0;
let randomGreen = 0;
let randomBlue = 0;

function setup() {
    createCanvas(400, 400);

    randomRed = random(255);
    randomGreen = random(255);
    randomBlue = random(255);
}

function draw() {
    background(220);

    fill(randomRed, randomGreen, randomBlue);
    rectMode(CENTER);
    rect(width / 2, height / 2, 100, 100);
}