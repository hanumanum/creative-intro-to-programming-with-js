let w = 1000
let h = 800

let obj1 = {
    x: w / 2,
    y: h / 2,
    d: 100,
    clr: "red",
    v: 20,
    mH: false,
    mV: false
}

let obj2 = {
    x: w / 3,
    y: h / 3,
    d: 150,
    clr: "blue",
    v: 20,
    mH: false,
    mV: false
}

function setup() {
    createCanvas(w, h)
    background("black")
    noStroke()
}

function draw() {
    background("black")

    if (obj1.mH) {
        obj1.x += obj1.v
    }
    if (obj1.mV) {
        obj1.y += obj1.v
    }

    fill(obj1.clr)
    ellipse(obj1.x, obj1.y, obj1.d)

    fill(obj2.clr)
    ellipse(obj2.x, obj2.y, obj2.d)

    obj1.x = constrain(obj1.x, 0 + obj1.d / 2, w - obj1.d / 2)
    obj1.y = constrain(obj1.y, 0 + obj1.d / 2, h - obj1.d / 2)

    if (dist(obj1.x, obj1.y, obj2.x, obj2.y) <= obj1.d / 2 + obj2.d / 2) {
        obj1.clr = "magenta"
        obj2.clr = "lime"
    }
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        obj1.v = 5
        obj1.mH = true
    }

    if (keyCode == LEFT_ARROW) {
        obj1.v = -5
        obj1.mH = true
    }

    if (keyCode == UP_ARROW) {
        obj1.v = -5
        obj1.mV = true
    }

    if (keyCode == DOWN_ARROW) {
        obj1.v = 5
        obj1.mV = true
    }

    if (keyCode == 32) {
        obj1.clr = getRandomColor()
    }


}

function keyReleased() {
    obj1.mH = false
    obj1.mV = false
}