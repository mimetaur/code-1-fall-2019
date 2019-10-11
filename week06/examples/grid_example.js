function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    drawGrid();
}

function drawGrid() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

            let red = map(i * j, 0, 81, 0, 255);
            fill(red, 0, 50);
            rect(i * 40, j * 40, 40, 40);
        }

    }
}