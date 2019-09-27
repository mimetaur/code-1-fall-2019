function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    drawButton(width / 2, height / 2, 200, 100);
}

function drawButton(x, y, w, h) {
    let clickedInsideButton = true;

    if (clickedInsideButton) {
        fill(100, 200, 0);
    } else {
        fill(200, 100, 0);
    }

    rectMode(CENTER);
    rect(x, y, w, h, 10);
}