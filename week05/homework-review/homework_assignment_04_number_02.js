// p5 adaptation of: https://massmoca.org/event/walldrawing160/

function setup() {
    createCanvas(400, 400);
}

function draw() {
    // draw the frame
    background("#E6E0E2");
    stroke("#887987");
    noFill();
    rectMode(CENTER);
    rect(width / 2, height / 2, width * 0.86, height * 0.86);

    // use push(), pop() and rotate()
    // instead of these coordinates
    // draw the lines
    stroke("#9D2D35");

    push();

    translate(width / 2, height / 2);

    angleMode(DEGREES);
    scale(1.68);
    rotate(45);

    line(0, -100, 0, 100);
    line(-100, 0, 100, 0);

    pop();
}