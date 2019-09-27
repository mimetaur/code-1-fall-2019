function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    if (mouseIsPressed) {
        drawRedCircle(width / 2, height / 2, 100);
    } else {
        drawBlueCircle(width / 2, height / 2, 100);
    }
}