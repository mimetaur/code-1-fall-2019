function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);

    grid(mouseX, mouseY);
}

function grid(startX, startY) {
    noFill();

    // row 1
    rect(startX, startY, 100, 100);
    rect(startX + 100, startY, 100, 100);
    rect(startX + 200, startY, 100, 100);

    // row 2
    rect(startX, startY + 100, 100, 100);
    rect(startX + 100, startY + 100, 100, 100);
    rect(startX + 200, startY + 100, 100, 100);

    // row 3
    rect(startX, startY + 200, 100, 100);
    rect(startX + 100, startY + 200, 100, 100);
    rect(startX + 200, startY + 200, 100, 100);
}