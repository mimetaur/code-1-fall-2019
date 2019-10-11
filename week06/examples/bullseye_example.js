function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    stroke(40);
    drawCircles(11, 60);

    stroke(120);
    drawCircles(17, 36);
}

function drawCircles(numCircles, spread) {
    noFill();

    strokeWeight(5);
    for (let i = 1; i < numCircles + 1; i++) {
        circle(width / 2, height / 2, i * spread);
    }
}