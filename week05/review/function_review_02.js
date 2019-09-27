function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    drawEyes(100, 100, 75, 30, 80);
    drawEyes(200, 200, 75, 30, 80);
    drawEyes(200, 350, 75, 30, 80);
}

function drawEyes(x, y, eyeSize, pupilSize, distance) {
    // draw left eye
    noFill();
    ellipse(x, y, eyeSize, eyeSize);
    fill(0);
    ellipse(x, y, pupilSize, pupilSize);

    // draw right eye
    noFill();
    ellipse(x + distance, y, eyeSize, eyeSize);
    fill(0);
    ellipse(x + distance, y, pupilSize, pupilSize);
}