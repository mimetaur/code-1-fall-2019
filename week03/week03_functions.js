
// code 1 - fall 19

// a version of your week 2 homework that now uses functions
// to ENCAPSULATE pieces of code and make them:
// 1. easier to read
// 2. easier to re-use

let backgroundColor = 250;

let faceX = 400;
let faceY = 400;
let faceW = 400;
let faceH = 500;
let rEyeX = faceX + 100;
let rEyeY = faceY;
let lEyeX = faceX - 100;
let lEyeY = faceY;
let lPupilSize = 50;
let rPupilSize = 50;
let randomEyeSize = 100;

function setup() {
    createCanvas(800, 800);
    randomEyeSize = random(50, 200);
}

function draw() {
    // IF the mouse is pressed, the code inside
    // the curly brackets will run
    if (mouseIsPressed) {
        // this is a type of function called a procedure
        // it does something, but it doesn't return a value
        makePupilsGoCrazy();
    }

    background(backgroundColor);

    drawEars();
    drawHead();
    drawEyes(randomEyeSize);
    drawNose();
    drawMouth();
}

function makePupilsGoCrazy() {
    backgroundColor = round(random(255));
    lPupilSize = random(10, 80);
    rPupilSize = random(10, 80);
}

// this function uses default parameters
function drawEars(earWidth = 50, earLength = 120) {
    strokeWeight(1);
    fill(220);
    ellipse(faceX - 200, faceY, earWidth, earLength);
    ellipse(faceX + 200, faceY, earWidth, earLength);
}

function drawHead() {
    strokeWeight(1);
    fill(230);
    ellipse(faceX, faceY, faceW, faceH);
}

// this function uses a default parameter
// but notice when it is called
// on line 41, that it uses a random number
function drawEyes(eyeRadius = 100) {
    fill(255);
    ellipse(rEyeX, rEyeY, eyeRadius, eyeRadius);
    ellipse(lEyeX, lEyeY, eyeRadius, eyeRadius);
    fill(0);
    let mouseDistanceModifier = 0.06;
    ellipse(rEyeX + (mouseX - width / 2) * mouseDistanceModifier,
        rEyeY + (mouseY - height / 2) * mouseDistanceModifier, rPupilSize, rPupilSize);
    ellipse(lEyeX + (mouseX - width / 2) * mouseDistanceModifier,
        lEyeY + (mouseY - height / 2) * mouseDistanceModifier, lPupilSize, lPupilSize);

}

function drawNose() {
    strokeWeight(1);
    line(faceX, faceY, faceX + 20, faceY + 120);
    strokeWeight(2);
    line(faceX - 20, faceY + 130, faceX + 20, faceY + 120);
}

function drawMouth(mouthWeight = 2) {
    strokeWeight(mouthWeight);
    noFill();
    arc(faceX, faceY + 150, 200, 50, PI / 3, 2 * PI / 3);
}