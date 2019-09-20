let buttonX = 100;
let buttonY = 100;
let buttonWidth = 200;
let buttonHeight = 100;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    if (mouseIsPressed == true && (mouseX > buttonX && mouseX < buttonX + buttonWidth) && (mouseY > buttonY && mouseY < buttonY + buttonHeight)) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }

    rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

    // is the mouse pressed?
    // is it inside the rectangle?
}