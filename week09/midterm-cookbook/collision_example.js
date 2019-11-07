let player;
let wall;
let north = 0;
let east = 1;
let south = 2;
let west = 3;

function setup() {
    createCanvas(600, 400);
    player = new Player(width / 2, height / 2, 40, color("#05bb26"));
    wall = new Wall(80, 50, 40, 300, color("#942a24"));
}

function draw() {
    background(0);

    if (wall.contains(player)) {
        print("player is blocked");
        player.bounceBack();
    }
    wall.draw();

    player.pacman();
    player.draw();
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        player.move(west);
    } else if (keyCode == RIGHT_ARROW) {
        player.move(east);
    }

    if (keyCode == UP_ARROW) {
        player.move(north);
    } else if (keyCode == DOWN_ARROW) {
        player.move(south);
    }
}

class Wall {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    contains(player) {
        if (player.x > this.x &&
            player.y > this.y &&
            player.x < this.x + this.w &&
            player.y < this.y + this.h) {
            return true;
        } else {
            return false;
        }
    }

    draw() {
        rectMode(CORNER);
        noStroke();
        fill(this.c);
        rect(this.x, this.y, this.w, this.h);
    }
}

class Player {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.speed = 15;
        this.direction = 0;
    }

    move(direction, speed = this.speed) {
        this.direction = direction;
        if (this.direction == north) {
            this.y -= speed;
        } else if (this.direction == east) {
            this.x += speed;
        } else if (this.direction == south) {
            this.y += speed;
        } else if (this.direction == west) {
            this.x -= speed;
        }
    }

    bounceBack() {
        let bounceSpeed = this.speed * -2;
        this.move(this.direction, bounceSpeed);
    }

    pacman() {
        if (this.y < 0) {
            this.y = height;
        }
        if (this.y > height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
        if (this.x > width) {
            this.x = 0
        }
    }

    draw() {
        noStroke();
        fill(this.c);
        rectMode(CENTER);
        rect(this.x, this.y, this.r, this.r);
    }
}
