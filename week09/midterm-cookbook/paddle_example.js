let paddle;
let ball;
let ball2;

function setup() {
    createCanvas(600, 400);
    paddle = new Paddle(width / 2, height * 0.9, 100, 25, color("#05bb26"));
    ball = new Ball(width / 2, height * 0.1, color("#c87800"), 0.1);
    ball2 = new Ball(width / 4, height * 0.1, color("#c87800"), 0.001);
}

function draw() {
    background(0);
    paddle.move();
    paddle.draw();
    paddle.catch(ball);
    paddle.catch(ball2);

    ball.fall();
    ball2.fall();
    ball.draw();
    ball2.draw();
}


class Paddle {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    move() {
        let leftEdge = 0
        let rightEdge = width - paddle.w;
        this.x = constrain(mouseX, leftEdge, rightEdge);
    }

    draw() {
        noStroke();
        fill(this.c);
        rect(this.x, this.y, this.w, this.h);
    }

    catch(aball) {
        if (aball.x > paddle.x && aball.x < paddle.x + paddle.w && aball.y > paddle.y && aball.y < paddle.y + paddle.h) {
            aball.caught();
            paddle.w = paddle.w + 10;
        }
    }
}

class Ball {
    constructor(x, y, c, speed = 0.1) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.speed = speed;
        this.r = 10;
        this.active = true;
    }

    fall() {
        this.speed = this.speed * 1.05;
        this.y = this.y + this.speed;
    }

    draw() {
        if (this.active) {
            noStroke();
            fill(this.c);
            ellipse(this.x, this.y, this.r);
        }

    }

    caught() {
        this.active = false;
    }
}
