function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    drawTwoRectangles();
}

function drawTwoRectangles() {
    rect(100, 100, 20, 20);
    rect(180, 180, 40, 40);
}