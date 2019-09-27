function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    drawEyes();
}

function drawEyes() {
    let leftEyeX = 100;
    let eyeDistance = 80;
    fill(255);
    ellipse(leftEyeX + eyeDistance, 100, 60, 60);
    ellipse(leftEyeX, 100, 60, 60);
    fill(0);
    ellipse(leftEyeX + eyeDistance, 100, 30, 30);
    ellipse(leftEyeX, 100, 30, 30);
}