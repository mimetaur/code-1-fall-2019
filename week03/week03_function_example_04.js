function setup() {
    createCanvas(400, 400);
    let mySum = add(1, 2);
    print(mySum);
}

function draw() {
    background(220);
}

function add(numberOne, numberTwo) {
    let sum = numberOne + numberTwo;
    return sum;
}