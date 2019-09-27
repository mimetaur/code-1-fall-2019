let playerX = 0;
let playerY = 0;

function setup() {
    createCanvas(400, 400);
    playerX = width / 2;
    playerY = height / 2;
}

function draw() {
    background(220);
    drawPlayer(playerX, playerY, 50);
}

function drawPlayer(px, py, psize) {
    fill(200, 100, 0);
    ellipse(playerX, playerY, 50, 50);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        playerX = playerX - 4;
    } else if (keyCode == RIGHT_ARROW) {
        playerX = playerX + 4;
    }

    if (keyCode == UP_ARROW) {
        playerY = playerY - 4;
    } else if (keyCode == DOWN_ARROW) {
        playerY = playerY + 4;
    }
}