let numCircles = 18;
let circleXs = [];
let circleYs = [];
let hues = [];
let diameters = [];
let isRect = [];

function setup() {
    createCanvas(600, 400);

    for (let i = 0; i < numCircles; i++) {
        circleXs[i] = random(width * 0.2, width * 0.8);
        circleYs[i] = random(height * 0.2, height * 0.8);
        hues[i] = random(100, 240);
        diameters[i] = random(20, 40);
        isRect[i] = random();
    }
    colorMode(HSB);
}

function draw() {
    colorMode(RGB);
    background(220);
    colorMode(HSB);
    noStroke();
    for (let i = 0; i < numCircles; i++) {
        fill(hues[i], 60, 80);
        if (isRect[i] > 0.5) {
            rectMode(CENTER);
            rect(circleXs[i], circleYs[i], diameters[i] * 0.5, diameters[i] * 0.5);
        } else {
            circle(circleXs[i], circleYs[i], diameters[i]);
        }
        stroke(hues[i], 60, 50, 0.5);
        strokeWeight(1);
        if (i > 0) {
            line(circleXs[i - 1], circleYs[i - 1], circleXs[i], circleYs[i]);
        }
        noStroke();
    }

    noLoop();
}