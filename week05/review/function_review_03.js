function setup() {
    createCanvas(400, 400);

    background(255);


    drawEyes(random(width * 0.7), random(height * 0.7), random(80, 120), random(30, 80), random(100, 200));
    drawEyes(random(width * 0.7), random(height * 0.7), random(80, 120), random(30, 80), random(100, 200));

    drawEyes(random(width * 0.7), random(height * 0.7), random(80, 120), random(30, 80), random(100, 200));
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