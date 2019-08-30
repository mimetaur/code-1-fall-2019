// code 1 week 1
// nathan koch

// drawing in p5.js

// everything inside setup executes once,
// at the beginning of program execution.
function setup() {
    // create a canvas 600 pixels by 600 pixels
    createCanvas(600, 600);

    // clear the screen once
    background(255);
}

// everything inside draw() loops every frame,
// usually 60 frames per second.
function draw() {
    // set the stroke color to black
    stroke(0);

    // set the fill color to 150 (grayscale)
    fill(150);

    // draw a rectangle at 100, 100, with width 200 and height 150
    rect(100, 100, 200, 150);

    // change the fill color to white, with alpha 30
    fill(0, 10);

    // change the stroke color to red
    stroke(255, 0, 0);
    // draw a line from 300, 400 to 500, 500
    line(300, 400, 500, 500);

    // change the stroke color to green
    stroke(0, 255, 0);

    // change the fill color to a transparent purple
    fill(180, 120, 240, 10);

    // draw a triangle
    triangle(100, 500, 200, 50, 200, 400);
}