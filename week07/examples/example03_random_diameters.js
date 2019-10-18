// example02_random_diameters.js
// makes 5 circles of random sizes

let diameters = [];

function setup() {
    createCanvas(600, 400);

    let numCircles = 5;
    for (let i = 0; i < numCircles; i++) {
        diameters[i] = random(10, 100);
    }
}

function draw() {
    background(40);
    fill(255);

    for (let i = 0; i < diameters.length; i++) {
        circle(100 + (i * 100), height / 2, diameters[i]);
    }
}