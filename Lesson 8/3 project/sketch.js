let step = Math.PI / 5
let w = 800
let h = 800
let r = 300
let x0 = w / 2, y0 = h / 2
let mult = 1
let dr = 0


function setup() {
    createCanvas(w, h)
    background("black")
}

function draw() {
    background("black")

    mult = int(map(mouseX, 0, w, 1, 30))
    fill("white")
    text("multiplication="+mult, 50, 50)

    stroke("white")
    noFill()

    for (let t = 0; t <= 2 * PI; t += step) {

        //Start end Points for Bezier curve (same point for start and end)
        let x = x0 + r  * cos(t)
        let y = y0 + r  * sin(t)

        //Control Points for Bezier curve (same point for both)
        let x1 = x0 + r * cos(t + mult*step)
        let y1 = y0 + r  * sin(t + mult*step)

        bezier(x0, y0, x, y, x1, y1, x0, y0)

    }
}