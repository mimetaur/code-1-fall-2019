// example01_diameters.js
// draw 5 circles, each one of a different size

let diameters = [20, 95, 65, 89, 37];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(40);
    fill(255);

    circle(100, height / 2, diameters[0]);
    circle(200, height / 2, diameters[1]);
    circle(300, height / 2, diameters[2]);
    circle(400, height / 2, diameters[3]);
    circle(500, height / 2, diameters[4]);
}