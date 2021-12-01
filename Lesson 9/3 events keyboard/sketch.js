let w = 1200
let h = 800

let rct = {
    x: w / 2,
    y: h / 2,
    d1: 150,
    d2: 80,
    color: "green",
    stroke: true,
    strokeWeight: 2,
    strokeColor: "white"
}

function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {
    background("black")

    if (rct.stroke) {
        stroke(rct.strokeColor)
        strokeWeight(rct.strokeWeight)
    }
    else {
        noStroke()
    }

    fill(rct.color)
    rect(rct.x, rct.y, rct.d1, rct.d2)
}

function keyPressed() {
    //key, keyCode
}

function keyReleased() {

}

function keyTyped() {

}