// code 1 - fall 19

// by bryan ma
// adapted for p5 by nathan koch

// homework example -
// a scene that responds to mouse input
// and uses variables to store, name, and change values.

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

function setup() {
    createCanvas(800, 800);
}

function draw() {

    // we haven't talked about if statements yet
    // IF the mouse is pressed, the code inside
    // the curly brackets will run
    // in this case, that means setting those three variables
    // to new values
    if (mouseIsPressed) {
        backgroundColor = round(random(255));
        lPupilSize = random(10, 80);
        rPupilSize = random(10, 80);
    }

    background(backgroundColor);

    // draw ears
    strokeWeight(1);
    fill(220);
    ellipse(faceX - 200, faceY, 50, 120);
    ellipse(faceX + 200, faceY, 50, 120);

    // draw head
    strokeWeight(1);
    fill(230);
    ellipse(faceX, faceY, faceW, faceH);

    // draw eyes
    fill(255);
    ellipse(rEyeX, rEyeY, 100, 100);
    ellipse(lEyeX, lEyeY, 100, 100);
    fill(0);
    let mouseDistanceModifier = 0.06;
    ellipse(rEyeX + (mouseX - width / 2) * mouseDistanceModifier,
        rEyeY + (mouseY - height / 2) * mouseDistanceModifier, rPupilSize, rPupilSize);
    ellipse(lEyeX + (mouseX - width / 2) * mouseDistanceModifier,
        lEyeY + (mouseY - height / 2) * mouseDistanceModifier, lPupilSize, lPupilSize);

    // draw nose
    strokeWeight(1);
    line(faceX, faceY, faceX + 20, faceY + 120);
    strokeWeight(2);
    line(faceX - 20, faceY + 130, faceX + 20, faceY + 120);

    // draw mouth
    strokeWeight(2);
    noFill();
    arc(faceX, faceY + 150, 200, 50, PI / 3, 2 * PI / 3);
}