let timer = 0;

function setup() {
    createCanvas(360, 360);
    frameRate(10);
}

function draw() {
    background(220);

    let red = map(mouseX, 0, 360, 50, 255);
    let green = map(mouseY, 0, 360, 50, 255);
    let blue = map(timer, 0, 200, 50, 255);
    fill(red, green, blue);
    ellipse(width / 2, height / 2, 100, 100);

    timer++;
}