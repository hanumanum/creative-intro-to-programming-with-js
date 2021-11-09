let x = 100
let y = 200
let d = 150
let canvW = 500
let canvH = 500
let dirX = 1
let dirY = 1

function setup() {
    createCanvas(canvW, canvH)
    noStroke()
}

function draw() {
    background("black")
    fill("blue")
    ellipse(x, y, d)
    if (x + d / 2 >= canvW) {
        dirX = -1
    }

    if (x - d / 2 <= 0) {
        dirX = 1
    }

    if (y + d / 2 >= canvH) {
        dirY= -1
    }

    if (y - d / 2 <= 0) {
        dirY = 1
    }

    x += dirX
    y += dirY
}