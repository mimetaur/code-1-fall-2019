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
    line(70, 70, 330, 330);
    line(70, 330, 330, 70);
}