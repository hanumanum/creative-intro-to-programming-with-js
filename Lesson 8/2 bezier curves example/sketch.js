let step = 100
let w = 800
let h = 800

function setup() {
    createCanvas(w, h)
    background("black")
}



function draw() {
    background("black")
    stroke("white")
    noFill()

    for (let y = 0; y < w; y += step) {
        for (let x = 0; x < h; x += step) {
            point(x, y)
            if (y % 2 == 0) {
                bezier(x, y, x + step, y - step, x + step, y - step, x + 2 * step, y)
            }
        }
    }
}