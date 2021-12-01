let step = 15
let lineLength = 10
let w = 1200
let h = 800
let r = 0

function setup() {
    createCanvas(w, h)
    background("black")

}

function draw() {
    background("black")
    noFill()
    ex1_strokes_noize()
    ex1_strokes_random()
    //ex2_coloredCircles_noize()
    //ex2_coloredCircles_random()

    stroke("green")
    strokeWeight(5)
    line(w/2, 0 , w/2, h)
    noLoop()
}


function ex2_coloredCircles_noize() {
    for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w/2; x += step) {
            r = map(noise(x, y), 0, 1, 0, 255)
            //r = random(0, 255)
            fill(r, 0, 0)
            ellipse(x, y, step)
        }
    }
}

function ex2_coloredCircles_random() {
    for (let y = 0; y < h; y += step) {
        for (let x = w/2; x < w; x += step) {
            //r = map(noise(x, y), 0, 1, 0, 255)
            r = random(0, 255)
            fill(r, 0, 0)
            ellipse(x, y, step)
        }
    }
}


function ex1_strokes_noize() {
    stroke("white")
    for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w/2; x += step) {
            push()
            r = map(noise(x, y), 0, 1, 0, 2 * PI)
            translate(x, y)
            rotate(r)
            line(0, 0, lineLength, 0)
            pop()
        }
    }
}

function ex1_strokes_random() {
    stroke("white")
    for (let y = 0; y < h; y += step) {
        for (let x = w/2; x < w; x += step) {
            push()
            r = random(0, 2 * PI)
            translate(x, y)
            rotate(r)
            line(0, 0, lineLength, 0)
            pop()
        }
    }
}