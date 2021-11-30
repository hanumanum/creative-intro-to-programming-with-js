let step = 15
let lineLength = 10
let w = 800
let h = 800
let r = 0

function setup() {
    createCanvas(w, h)
    background("black")
    stroke("white")
}

function draw() {
    background("black")

    noFill()

    for (let y = step / 2; y < w; y += step) {
        for (let x = step / 2; x < h; x += step) {
            push()
            r = random(0, 2 * PI)
            translate(x, y)
            rotate(r)
            line(0, 0, lineLength, 0)
            pop()
        }

    }


    noLoop()
}