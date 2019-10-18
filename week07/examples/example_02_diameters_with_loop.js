// example02_diameters_with_loop.js
// draw 5 circles, each one of a different size
// using a for loop

let diameters = [20, 95, 65, 89, 37];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(40);
    fill(255);

    for (let i = 0; i < diameters.length; i++) {

        // note how we had to add 100 to start here
        // because otherwise, when i is equal to zero
        // the first circle is half off the screen
        circle(100 + (i * 100), height / 2, diameters[i]);
    }
}