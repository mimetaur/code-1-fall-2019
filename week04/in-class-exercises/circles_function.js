function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    concentricCircles(200, 200, 100);
}

function concentricCircles(centerX, centerY, diameter) {
    noFill();
    strokeWeight(2);

    // use the circle() function twice
    // https://p5js.org/reference/#/p5/circle
    // the second time you call it, divide it by 2
}