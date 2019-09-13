function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(100);

    drawRects(25, 150, 20); // x, y, rectSize
    drawRects(30, 200, 20); // x, y, rectSize
}


function drawRects(x, y, rectSize) {
    rectMode(CENTER);
    rect(x, y, rectSize, rectSize);
    rect(x + 40, y + 40, rectSize * 2, rectSize * 2);
    rect(x + 80, y + 80, rectSize * 3, rectSize * 3);
    rect(x + 120, y + 120, rectSize * 4, rectSize * 4);
}